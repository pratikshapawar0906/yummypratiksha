const express =require('express')
const connectDb = require('./config/db');
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
const ContactRouter=require('./router/ContactRouter')
const cors=require('cors')
dotenv.config()

const app = express();


const PORT = process.env.PORT || 4000;

// database connection
connectDb()


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Middleware
app.use(bodyParser.json())
app.use(cors())

// Serve static files from the 'public' folder
// app.use(express.static('public'));


app.use('/user',ContactRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});



