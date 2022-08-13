import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, styled} from '@mui/material';
import image from '../Images/image.jpg'
import { getRecipes, deleteData } from '../services/api';
import {Link} from 'react-router-dom';


const Container = styled(Card)`
width: 70%;
margin: 5% auto 0 auto; 

}
`


const AllRecipes = () => {

  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes();
  }, []);

  const getAllRecipes = async () => {

    let response = await getRecipes();
    setAllRecipes(response.data);

  }

  const deleteRecipe= async(id)=> {
    await deleteData(id);
    getAllRecipes();
}

  return (
    <div>

      <Button href='/add' variant='contained'>Add New Recipe</Button>

      <Button href='/home' variant='contained' style={{marginLeft: 1000}}>Logout</Button>

      <Typography variant='h4' style={{textAlign: 'center'}}>All Recipes</Typography>

      {
        allRecipes.map((recipe, id) => {
          return (
            <div style={{alignItems: 'center'}}>

            <Container sx={{ maxWidth: 600}} key={recipe._id}>
              <CardMedia
                component="img"
                height="210"
                image={image}
                alt="food"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {id + 1}: {recipe.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {recipe.description}
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small" component={Link} to={`/edit/${recipe._id}`}>Edit</Button>
                <Button size="small" onClick={() =>deleteRecipe(recipe._id)}>Delete</Button>
              </CardActions>
            </Container>
            </div>
          )
        }
        )

      }
    </div>
  );
}

export default AllRecipes;
