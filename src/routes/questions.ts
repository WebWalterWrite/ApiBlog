import { Router } from 'express';
import { questionsControllers } from '../controllers/questionsController';

const questions = new questionsControllers;


export class questionsRouter {

    public router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    public routes(){

          // All questions
          this.router.get('/api/questions/all',questions.all);

          // One question
          this.router.get('api/question/:slug', questions.displayOne)

          // Create questions
          this.router.post('api/questions/create', questions.create)
    }

}

const questionsRoutes = new questionsRouter();

export default questionsRoutes.router;

