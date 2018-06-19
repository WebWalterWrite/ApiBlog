import { Request, Response } from 'express';
// To do : Importer le fichier contenant nos requêtes mongoose


// Display All members ( Use: user, administrator)
export const allMembers = (req: Request, res: Response) =>{
    res.send('Not implemented : all members ')
};

// Display one member (Use: user, administrator)
export const oneMember = (req: Request, res: Response) =>{
    
    let member: string = req.params.slug;

    res.send(`Not Implemented : one member => ${member}`)
}

// Update member ( Use: administrator)
export const updateMember = (req: Request, res: Response) =>{

    let id = req.params.id

    console.log(id)
    
    // get data from req.body
    res.json({ resultData : "new data" + id})
}

// Create member (Use: user, administrator)
export const createMember = (req: Request, res:Response) =>{
    console.log(req.body)
    // get data from req.body

    res.json('received')
}



