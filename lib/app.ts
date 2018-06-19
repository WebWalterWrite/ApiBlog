import express from 'express';
import bodyParser from 'body-parser';

import PostsRouter  from './routes/posts';
import MembersRouter from './routes/members';


class App {
    constructor() {
        this.app= express()
        this.config();
        this.routes()
    }


public app: express.Application;

private config() :void {

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

    this.app.use('/', PostsRouter )
    this.app.use('/',MembersRouter)
 }

}


export default new App().app;