import express from 'express';

const app = express();

app.get("/", (req, res) => {
	res.send("<h1>Hello World!</h1>");
});

app.get('/instagram',(req,res)=>{
    res.send('<h1>you have visited instagram</h1>');
})


export default app;