import { Request, Response, NextFunction } from 'express';


// Display all posts (Use: user, admin)
export const allPosts = (req: Request, res: Response) =>{

    res.send('Not implemented for route : all post')
};

// Dipslay one post by slug (Use: user, admin)
export const onePost = (req: Request, res: Response) =>{
    
    let slug: string = req.params.slug;
    
    res.send(`Not implemented for route : ${slug} post `)
};

// Display posts by categories (Use: user, admin)
export const postByCategorie = (req:Request, res: Response) =>{

    let categorie: string = req.params.categorie;

    res.send(`Not implemented for route : ${categorie} post`)
};


