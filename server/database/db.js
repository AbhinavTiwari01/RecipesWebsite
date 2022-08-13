import mongoose from 'mongoose';

const Connection = async() => {

    const URL = 'mongodb://localhost:27017/TaskForInterview';

    try{
        await mongoose.connect(URL, {useUnifiedTopology : true, useNewUrlParser : true});
        console.log("Database has been connected");

    }catch(err){
        console.log("Error in connection for database");
    }

}

export default Connection;