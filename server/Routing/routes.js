import express from 'express';
import {addRecipe, addUser, loginUser, allRecipes, deleteRecipe, editRecipe, getRecipe} from '../controllers/controller.js'

const router = express.Router();

router.post('/signUp', addUser);

router.post('/login', loginUser);

router.post('/add', addRecipe)

router.get('/all', allRecipes)

router.delete('/:id', deleteRecipe)

router.get('/:id', getRecipe)

router.put('/:id',editRecipe);


export default router;