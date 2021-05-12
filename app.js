const express = require('express');
const app = express();

app.get("/" ,(req,res, next) => {
    res.json({message:"hello word"});
});

const port = process.env.PORT || 3000;
app.listen(port, () =>{ console.log(`Server running on port ${port}`)});