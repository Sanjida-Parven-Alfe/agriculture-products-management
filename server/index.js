const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb'); // 1. ObjectId ইমপোর্ট করা জরুরি
const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://agriculture-management-system:lHFOCIdujMXFxItL@cluster0.5scl4km.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // await client.connect(); 
    
    const db = client.db('agriculture-management-system')
    const productscollection = db.collection('products')    
    
    app.get('/products', async (req, res) => {
        const result = await productscollection.find().toArray()
        res.send(result)
    })

    app.get('/products/:id', async (req, res) => {
        const id = req.params.id;
        try {
            const query = { _id: new ObjectId(id) }
            const result = await productscollection.findOne(query)
            res.send(result)
        } catch (error) {
            res.status(404).send({ message: "Product not found" });
        }
    })

    app.post('/products', async (req, res) => {
        const product = req.body;
        const result = await productscollection.insertOne(product);
        res.send(result);
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('AgriMart Server is running')
})

app.listen(port, () => {
  console.log(`AgriMart Server listening on port ${port}`)
})