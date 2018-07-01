import { Request, Response } from 'express';
// Import models
import testimony from '../models/TestimonySchema';

export class testimonyController{

 public findall(req: Request, res:Response):object{

    return testimony.find()
    .then(result =>{
    res.json(result)
    })
 };

 public findone (req: Request, res:Response): void {
    res.send('retrieve one')
 }


}

export default testimonyController;