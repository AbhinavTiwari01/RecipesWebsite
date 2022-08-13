import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({

    title : {
        type :  String,
        required : true
    },

    description : {
        type :  String,
        required : true
    }
})

const recipeModel = mongoose.model("RecipeCollection", recipeSchema, "RecipeCollection");

export default recipeModel;