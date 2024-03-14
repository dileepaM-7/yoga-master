const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@yoga-master.iywpwra.mongodb.net/?retryWrites=true&w=majority&appName=yoga-master`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const database = client.db("yoga-master");
    const classesCollection = database.collection("classes");

    // to save the data to the database
    app.post('/new-class', async(req, res) => {
      try {
        const newClass = req.body;
        const result = await classesCollection.insertOne(newClass);
        res.send(result);
      } catch (error) {
        console.error("Error inserting new class:", error);
        res.status(500).send("Error inserting new class");
      }
    });

    // to get the approved classes
    app.get('/classes', async (req, res) => {
      const query = { status: 'approved'};
      const result = await classesCollection.find().toArray();
      res.send(result);
    });

    //to classes by the email of the instructer
    app.get('/classes/:email', async (req, res) => {
      const email = req.params.email;
      const query = { instructorEmail: email }; // Corrected key name
      const result = await classesCollection.find(query).toArray();
      res.send(result);
    });

    //manage-classes
    app.get('/classes-manage', async (req, res) => {
      const result = await classesCollection.find(query).toArray();
      res.send(result);
    });
    
    //update classes status and reason 
    app.patch('/change-status/:id', async (req, res) =>{
      const id = req.params.id;
      const status = req.body.status;
      const reason = req.body.reason;
      const filter = {_id: new ObjectId(id)};
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          status: status,
          reason: reason,
        }
      };
      const result = await classesCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    //get approved classes
    app.get('/approved-classes', async (req, res) => {
      const query = {status: "approved"};
      const result = await classesCollection.find(query).toArray();
      res.send(result);
    });

    //get single class details
    app.get('/class/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await classesCollection.findOne(query);
      res.send(result);
    });

    //update class details
    app.put('/update-class/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const updateClass = req.body;
        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: {
            name: updateClass.name,
            description: updateClass.description,
            price: updateClass.price,
            availableSeats: updateClass.availableSeats,
            videoLink: updateClass.videoLink,
            status: "pending"
          }
        };
        const options = { upsert: true }; // Optional, depending on your use case
        const result = await classesCollection.updateOne(filter, updateDoc, options);
        
        res.send(result);
      } catch (error) {
        console.error("Error updating class details:", error);
        res.status(500).send("Error updating class details");
      }
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run().then(() => {
  app.get('/', (req, res) => {
    res.send('Hello dileep!')
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}).catch(console.error);