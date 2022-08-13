import React, {useState} from "react"
import {FormGroup, FormControl, Button, styled, Typography, TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { addRecipe } from '../services/api';

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

const AddRecipe = () => {

    const navigate= useNavigate();

    const [recipe, setRecipe]= useState(defaultValues);

    const onValueChange = (e) => {
        setRecipe({...recipe, [e.target.name]:e.target.value});
    }

    const addData = async() => {
        await addRecipe(recipe);
        navigate('/allRecipe')
    }

    return (
        <>
            <Button href='/allRecipe' style={{marginLeft: 1100}} variant='contained'>All Recipes</Button>
            <Container>
            <Typography style={{textAlign:'center'}} variant='h5'>Add Your Recipe</Typography>
            <FormControl>
                <TextField name='title' onChange={(e)=>{onValueChange(e)}} label='Title'/>
            </FormControl>
            <FormControl>
                <TextField name='description' onChange={(e)=>{onValueChange(e)}} label='Description'
                multiline
                rows={10}
                rowsMax={20}
                />
            </FormControl>
            <FormControl>
            <Button variant='contained' onClick={() => {addData()}}>Add Recipe</Button>
            </FormControl>
            
        </Container>
        </>
    )
}

export default AddRecipe;