const express = require('express');

const app = express();
app.use(express.urlencoded ({extended:true}));
app.use(express.json);


app.get("/", (req, res) => {

    res.json({online :"compiler"});
  
});
app.post("/run", (req, res) => {
  console.log(req.body);
  res.json(req.body);

});
app.post("/run", (req, res) => {
    console.log(req.body);
    res.json(req.body);
  
});
app.listen(  5000, () =>{
    console.log("server is running on 5000!!");
}
)