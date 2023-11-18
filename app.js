// const express = require('express');
// const app = express();
// const router = express.Router();

// router.get('/home', (req,res) => {
//     res.send('Hello World, This is home router');
// });

// router.get('/profile', (req,res) => {
//     res.send('Hello World, This is profile router');
// });

// router.get('/login', (req,res) => {
//     res.send('Hello World, This is login router');
// });

// router.get('/logout', (req,res) => {
//     res.send('Hello World, This is logout router');
// });

// app.use('/', router);

// app.listen(process.env.port || 3000);

// console.log('Web Server is listening at port '+ (process.env.port || 3000));



/* Middleware*/

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session')

const app = express();
const router = express.Router();
app.use(session({secret: 'some secrets'}));

router.get('/home', (req,res) => {
    res.send('Hello World, This is home router');
});

router.get('/profile', (req,res) => {
    res.send('Hello World, This is profile router');
});

router.get('/login', (req,res) => {
    res.send('Hello World, This is login router');
});

router.get('/logout', (req,res) => {
    res.send('Hello World, This is logout router');
});

// app.use(bodyParser.json());

// app.use('/', router);

// app.listen(process.env.port || 3000);

// console.log('Web Server is listening at port '+ (process.env.port
// || 3000));


// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// // const client = new MongoClient(url);

// MongoClient.connect(url, (err, db) => {
//     if (err) {
//         console.log(err);
//         process.exit(0);
//     }

//     let data = { id: 100, name: "Shahid" };
//     var dbo = db.db("test");

//     console.log("database connected!");

//     dbo.collection("user").insert(data, (err, result) => {
//         if (err) {
//             console.log(err);
//             process.exit(0);
//         }

//         console.log("records added.");
//         console.log(result);
//         db.close();
//     });
// });

/* Password: rWNbXkPoYE3ccFKy */


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://tranthehuy2002:jtwdp123@cluster0.rdfpvfp.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const database = client.db('Cluster0')
    const haiku = database.collection('test')

    const doc = {
        title: "Record of a Shriveled Datum",
        content: "No bytes, no problem. Just insert a document, in MongoDB",
    }

    // Insert the defined document into the "haiku" collection
    const result = await haiku.insertOne(doc);
    
    // Print the ID of the inserted document
    console.log(`A document was inserted with the _id: ${result.insertedId}`)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



app.use(bodyParser.json());

app.use('/', router);

app.listen(process.env.port || 3000);

console.log('Web Server is listening at port '+ (process.env.port
|| 3000));