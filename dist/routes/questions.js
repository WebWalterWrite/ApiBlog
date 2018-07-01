"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const questionsController_1 = require("../controllers/questionsController");
const questions = new questionsController_1.questionsControllers;
class questionsRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        // All questions
        this.router.get('/api/questions/all', questions.all);
        // One question
        this.router.get('api/question/:slug', questions.displayOne);
        // Create questions
        this.router.post('api/questions/create', questions.create);
    }
}
exports.questionsRouter = questionsRouter;
const questionsRoutes = new questionsRouter();
exports.default = questionsRoutes.router;
//# sourceMappingURL=questions.js.map