import express from "express";

const app = express();

app.use(express.json());

app.get('/', function(req, res){
    res.json("hello, ji")
})

app.listen(3000, () => {
    console.log("Your app is running on port 3000!")
});