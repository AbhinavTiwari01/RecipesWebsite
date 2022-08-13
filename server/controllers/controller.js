import userModel from '../Schema/userSchema.js'
import recipeModel from '../Schema/recipeSchema.js';

export const addUser = async(req, res) => {

    const {name, username, email, password}= req.body

    try{

        const preUser= await userModel.findOne({email : email});

        if(preUser){
            res.send({message: "Email already exist"})
        }

        else{
        const newData = new userModel({name : name, username : username , email : email, password: password});
        await newData.save();
        res.send({message: "Successfully registered"});
        }

    }catch(err){
        res.status(404).json({message : err.message})
    }
    
}

export const loginUser = async(req, res)=> {

    const {username, password} = req.body;

    userModel.findOne({ username: username}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}

export const addRecipe = async(req, res) => {

    const user= req.body;

    try{

        const newRecipe = new recipeModel(user);
        await newRecipe.save();
        res.status(201).json(newRecipe);

    }catch(err){
        res.status(404).json({message : err.message});
    }

}

export const allRecipes = async(req, res)=>{
    
    try{

        const allData = await recipeModel.find({});
        res.status(201).json(allData);
    }catch(err){

        res.status(404).json({message : err.message});

    }
}

export const deleteRecipe =async(req, res) => {

    try{

        await recipeModel.deleteOne({_id: req.params.id})
        res.status(201).json("User is deleted");
    }catch(err){
        res.status(404).json({message : err.message});
    }
}

export const getRecipe = async(req, res)=> {

    try{

        const recipeData = await recipeModel.findById(req.params.id);
        res.status(201).json(recipeData);

    }catch(err){
        res.status(404).json({message : err.message});
    }

}

export const editRecipe = async(req, res)=> {

    let recipe= req.body;

    const editData= new recipeModel(recipe);

    try{

        const newData = await recipeModel.updateOne({_id: req.params.id}, editData)
        res.status(201).json(newData);

    }catch(err){
        res.status(404).json({message : err.message});
    }

}

