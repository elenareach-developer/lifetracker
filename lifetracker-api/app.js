const express = require("express");
const core = require("cors");
const stroreRouter = reqire("./routes/storeRoute");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/" , function(req, res){
    return res.status(200).json({
        ping:"pong",
    })
})
app.use((error, req, res, next)=>{
    const status = error.statur || 500;
    const message = error.message;

    return res.status(status).json({
        error: {message, status}
    });
});

const port = 6001;

app.listen(port, ()=>{
    console.log(`Start listening on port ` + port);
})