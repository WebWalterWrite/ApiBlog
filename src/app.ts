import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import PostsRouter  from './routes/posts';
import MembersRouter from './routes/members';
import questionsRouter from './routes/questions';
import testimonyRouter from './routes/testimony'


class App {
    constructor() {
        this.app= express()
        this.config();
        this.routes()
    }

public app: express.Application;

private config() :void {

    const Mongo_Uri:string = 'mongodb://sammy:symfony77@ds159020.mlab.com:59020/corpalif';
    mongoose.connect(Mongo_Uri,()=>{
        console.log('we are connected to mongoose')
    });

    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended : true }));
} 

private routes(): void {
    const router: express.Router = express.Router();
 
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    this.app.use('/', PostsRouter );
    this.app.use('/',MembersRouter);
    this.app.use('/',questionsRouter);
    this.app.use('/',testimonyRouter)
 }

}


export default new App().app;