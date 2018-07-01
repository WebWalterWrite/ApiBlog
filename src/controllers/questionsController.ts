import { Request, Response} from 'express';

export class questionsControllers {

// Retrieve all questions
 public all (req: Request, res: Response): void{

    res.send('get All questions')
 }

 public displayOne (req: Request, res:Response): void {

    res.send('get one questions')
 }

 public create (req: Request, res: Response): void {
     const data = req.body
     res.send('create new questions')
 }

}

export default questionsControllers;