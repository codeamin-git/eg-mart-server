const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const jwt = require('jsonwebtoken')

const port = process.env.PORT || 5000

// middleware
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174', 'https://eg-mart.web.app'],
    credentials: true,
    optionSuccessStatus: 200,
  }
  app.use(cors(corsOptions))
  
  app.use(express.json())


  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zyujvjv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
  async function run() {
    try {
      const productsCollection = client.db('egMart').collection('allProducts')

      app.get('/', async(req, res) => {
        const { page = 1, limit = 8, search = "", sort, brand_name,price,category,maxPrice,minPrice } = req.query;
    const skip = (page - 1) * limit;

    let filter = {};

    if (search && search.length) {
      filter.product_name = { $regex: search, $options: "i" };
    }
      })

    







      // Connect the client to the server	(optional starting in v4.7)
    //   await client.connect();
      // Send a ping to confirm a successful connection
    //   await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
    //   await client.close();
    }
  }
  run().catch(console.dir);

  app.get('/', (req, res)=> {
    res.send('shopping unlimited on EG-Mart')
})

app.listen(port, ()=>{
    console.log(`Easy is Shopping on EG-Mart ${port}`);
})
  