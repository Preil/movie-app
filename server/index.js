
const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app=next({dev})
const handle = app.getRequestHandler()

app.prepare().then(()=>{
  const server = express();

  server.get('/api/v1/movies', (req, res)=>{
    return res.json({message: 'hello world'})
  })

  server.post('/api/v1/movies', (req, res)=>{
    return res.json({message: 'Saving Post'})
  })

  server.patch('/api/v1/movies/:id', (req, res)=>{
    const {id} = req.params;
    return res.json({message: `Updating post of id: ${id}`})
  })

  server.delete('/api/v1/movies/:id', (req, res)=>{
    const {id} = req.params;
    return res.json({message: `Deleting post of id: ${id}`})
  })

  server.get('*',(req, res)=>{
    return handle(req, res)
  })

  const PORT = process.env.PORT || 3000;
  server.listen(PORT,(err)=>{
    if(err) throw err
    console.log('> Ready on port ' + PORT)
  })
})