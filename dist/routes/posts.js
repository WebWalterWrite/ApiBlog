"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postsController_1 = require("../controllers/postsController");
class PostsRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        // Allposts
        this.router.get(`/api/posts/all`, postsController_1.allPosts);
        //One post
        this.router.get(`/api/post/:slug`, postsController_1.onePost);
        // Posts by categorie
        this.router.get(`/api/posts/:categorie`, postsController_1.postByCategorie);
    }
}
exports.PostsRouter = PostsRouter;
const postsRoutes = new PostsRouter();
exports.default = postsRoutes.router;
//# sourceMappingURL=posts.js.map