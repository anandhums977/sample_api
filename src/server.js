const app = require("express")();



app.get('/',(req,res)=>{
    res.json({message:"hello from server","status":true})
})

app.listen(3000,()=>{
    console.log(`server is up and running........++.........`);
    
})
