let express =require("express");
let path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.listen(PORT, function(){
    console.log("App running on Port " + PORT);
});