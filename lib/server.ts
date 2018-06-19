import app from './app';
import http from 'http';

const server = http.createServer(app);
const port :number = 4000;

server.listen(port, ()=>{

    console.log(`we are connected on port ${port}`)
})


