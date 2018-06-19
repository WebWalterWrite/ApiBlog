"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Display all posts (Use: user, admin)
exports.allPosts = (req, res) => {
    res.send('Not implemented for route : all post');
};
// Dipslay one post by slug (Use: user, admin)
exports.onePost = (req, res) => {
    let slug = req.params.slug;
    res.send(`Not implemented for route : ${slug} post `);
};
// Display posts by categories (Use: user, admin)
exports.postByCategorie = (req, res) => {
    let categorie = req.params.categorie;
    res.send(`Not implemented for route : ${categorie} post`);
};
//# sourceMappingURL=postsController.js.map