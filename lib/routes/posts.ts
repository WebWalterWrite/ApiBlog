import { Router } from "express";
import { allPosts, onePost, postByCategorie } from '../controllers/postsController';
export class PostsRouter {
    
    public router : Router;

    constructor () {
        this.router = Router();
        this.routes();
    }
    

    public routes() {
        
   

        // Allposts
        this.router.get(`/api/posts/all`,allPosts);

        //One post
        this.router.get(`/api/post/:slug`,onePost);
        
        // Posts by categorie
        this.router.get(`/api/posts/:categorie`, postByCategorie);
    
    }

}

const postsRoutes = new PostsRouter();

export default postsRoutes.router;