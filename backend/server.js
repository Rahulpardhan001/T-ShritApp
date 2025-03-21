const express = require('express')
const app = express()
require("dotenv").config();
const port = process.env.PORT || 3000
const db = require('./config/db')
const connectDB = require('./config/db')
const cors = require('cors');
const fileUpload = require('express-fileupload')
// Routes
const ProductRoute = require('./Routes/productRoute');
const userRoute = require('./Routes/userRoute');
const OrderRoute = require('./Routes/orderRoute')
// const connectCloudinary = require('./utills/cloudnary');
const corsOptions ={
  origin:"http://localhost:5173",
  menthods:"GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials:true,
}

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}))



// Routes
app.use('/api/', ProductRoute)
app.use('/api/',OrderRoute)
app.use('/api/user/',userRoute)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// connectCloudinary() 
connectDB();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
