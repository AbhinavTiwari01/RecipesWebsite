import React, {useState, useEffect} from "react"
import {FormGroup, FormControl, Button, styled, Typography, TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getRecipe, editRecipe } from '../services/api';
import {useParams} from 'react-router-dom';

const Container = styled(FormGroup)`
width: 50%;
margin: 5% auto 0 auto; 
& > div{
    margin-top:25px;
}
`

const defaultValues={
    title : "",
    description : "",
}

const Homepage = ({setLoginUser}) => {

    const {id}= useParams();

    const navigate= useNavigate();

    const [recipe, setRecipe]= useState(defaultValues);

    useEffect(()=> {
        getRecipeData();
    }, [])

    const getRecipeData= async() => {
        let response= await getRecipe(id)
        setRecipe(response.data)

    }

    const onValueChange = (e) => {
        setRecipe({...recipe, [e.target.name]:e.target.value});
    }

    const editData = async() => {
        await editRecipe(recipe, id);
        navigate('/allRecipe')
    }

    return (
            <div>
            <Container>
            <Typography style={{textAlign:'center'}} variant='h5'>Edit Your Recipe</Typography>
            <FormControl>
                <TextField name='title' onChange={(e)=>{onValueChange(e)}} label='Title' value={recipe.title}/>
            </FormControl>
            <FormControl>
                <TextField name='description' onChange={(e)=>{onValueChange(e)}} label='Description' value={recipe.description}
                multiline
                rows={10}
                rowsMax={20}
                />
            </FormControl>
            <FormControl>
            <Button variant='contained' onClick={() => {editData()}}>Edit Recipe</Button>
            </FormControl>
            
        </Container>
            </div>
    )
}

export default Homepage