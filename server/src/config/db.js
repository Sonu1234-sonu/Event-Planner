import mongoose from "mongoose";

const ConnecteDB=async()=>{
    try{
         const conn=await mongoose.connect(process.env.MONGO_URI);
         console.log("MongoDB Connected :",conn.connection.host);

    }catch(error)
    {
       
        console.log("Error connecting Db:",error);
        process.exit(1);
    }
    
};
export default ConnecteDB;

