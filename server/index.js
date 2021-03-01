import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"

//connect to the database 
//create a mongodb cluster
//setup the models and create documents

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//contect to database mongo atlas 

const CONNECTION_URL = 'mongodb+srv://root:agarwal1202@mflix.yoqme.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));


mongoose.set("useFindAndModify", false);