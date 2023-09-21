import mongoose from "mongoose";

export const Connection = async(username , password) =>{
    const URL =`mongodb://${username}:${password}@ac-08xpnc9-shard-00-00.9zrmfzy.mongodb.net:27017,ac-08xpnc9-shard-00-01.9zrmfzy.mongodb.net:27017,ac-08xpnc9-shard-00-02.9zrmfzy.mongodb.net:27017/?ssl=true&replicaSet=atlas-7excef-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {

       await mongoose.connect(URL,{ useUnifiedTopology:true, useNewUrlParser:true});
       console.log('Databse connected Sucessfully');

    } catch (error) {
        console.log('Error while connectng databases ',error.message);
    }
}


export default Connection;