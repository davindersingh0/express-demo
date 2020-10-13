const { response } = require('express');
const express = require('express');
const app = express();

app.get('/', (req, res)=> {
res.send('Hello World!');

});

app.get('/books', (req, res)=> {
    res.status(200).send([1,2,3]);
    
    });

    app.get('/books/:id', (req, res)=> {
        
        res.status(200).send(req.params.id + ': My Books');
        
        
        });

        
const port =process.env.PORT || 3000;
app.listen(port,()=> console.log(`Listening to port ${port}`));
