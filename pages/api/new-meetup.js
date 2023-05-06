import { MongoClient } from "mongodb";


//from here for js not tsx
// api/new-meetup
//POST    /api/new-meetup

async function handler(req,res) {
  if(req.method === "POST") {
    // req.body is our api end points
    const data = req.body; 

    const {title,image,adress,description} = data; // these are our incoming requests body
    
    //and then we can store them in database
    const client = await MongoClient.connect("mongodb+srv://rcptay:mongodB-1983@nextjsapp.8efe9pg.mongodb.net/nextApp?retryWrites=true&w=majority");
    const db = client.db();
    const meeetupsCollection = db.collection('nextApp'); // we can give any name for the collection
    const result = await meeetupsCollection.insertOne(data);
    // console.log(result)
    client.close();

    //after store data from above we need to send a response now 
    res.status(201).json({message: "meetup created !"});


   

  }
}

export default handler;

