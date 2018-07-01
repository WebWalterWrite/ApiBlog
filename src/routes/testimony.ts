import {Router}  from 'express';
import { testimonyController } from '../controllers/testimonyController';

const testimony = new testimonyController;

export class testimonyRouter{

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();

    }

    public routes() {

        this.router.get('/api/testimony/all', testimony.findall);
        this.router.get('/api/testimony/:slug', testimony.findone);
    }
}

const testimonyRoutes = new testimonyRouter();

export default testimonyRoutes.router;