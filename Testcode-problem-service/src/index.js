//process.loadEnvFile() // no need for dotenv package if u use this for updated node 

const { ServerConfig, Logger } = require("./config")
const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/ping",(req,res)=>{
    return res.json({message:"Testcode problem service working"});
})


app.listen(ServerConfig.PORT, () => {
  console.log(`Server is up and running on PORT: ${ServerConfig.PORT}`);
  
});


