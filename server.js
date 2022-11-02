const express = require('express')

const app = express()
const port = process.env.PORT || 8080

app.route("/").get((req,res)=>{
    res.status(200).send("Yo!");
    console.log("here i am");
});

app.listen(port, (err) => {
    if (err) {
        console.log("Error starting the server!");
        console.log(err);
    }
    else
    {
        console.log(`server running on port ${port}`);
    }
})