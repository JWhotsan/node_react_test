const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('hihihihi')
})

app.get('/test', (req, res) => {
    res.json({message: 'jas;lkdfj;lkajsdf'})
})
app.get('/api/goal', (req, res)=>{
    res.send('jinwoo is Jinwoo')
    })

app.listen(5555, () => {
    console.log('hi')
})