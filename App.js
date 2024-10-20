const express=require('express');
const app=express();
const port=3000;
p.get("/", (req, res)=>
{
res.send("<h1>hello world</h1>");
});
app.listen(port, ()=>
{
console.log(`app listening to the port ${port}`);
}
)
