import Axios from 'axios';


const URL= 'http://localhost:8080';

export const addUser = async(user) => {

    try{

        return await Axios.post(`${URL}/signUp`, user).then(
            res=>{
                alert(res.data.message);
            }
        )

    }catch(err){
        console.log("Error occurred while fetching the POST API", err)
    }

}


export const addRecipe = async(recipe) => {

    try{

        return await Axios.post(`${URL}/add`, recipe)

    }catch(err){
        console.log("Error occured while fetching the post API", err)
    }
}

export const getRecipes = async () => {

    try{

        return await Axios.get(`${URL}/all`);

    }catch(err){
        console.log("Error while calling the get API for all recipes", err);
    }

}

export const deleteData = async(id)=> {

    try{

        return await Axios.delete(`${URL}/${id}`);
    
    }catch(err){

        console.log("Error occured while deleting the recipe", err);
    }
}


export const getRecipe = async (id) => {

    try{

        return await Axios.get(`${URL}/${id}`);

    }catch(err){
        console.log("Error while calling the get API for selected recipe", err);
    }

}


export const editRecipe = async (recipe, id) => {

    try{

        return await Axios.put(`${URL}/${id}`, recipe);

    }catch(err){
        console.log("Error while calling the get API for edit recipe", err);
    }

}


