let express =require("express");
let path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.listen(PORT, function(){
    console.log("App running on Port " + PORT);
});

let tables = [];
let waitlist = [];

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"home.html"));
});

app.get("/reserve",function(req,res){
    res.sendFile(path.join(__dirname,"reserve.html"));
});

app.get("/api/tables",function(req,res){
    return res.json(tables);
});

app.get("/api/waitlist",function(req,res){
    return res.json(waitlist);
});
