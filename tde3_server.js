const express = require('express');
const server = express();


const port = 3000; 

server.get("/",(req,res)=>{
    res.send(`server is running`);
})

server.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});

