"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class questionsControllers {
    // Retrieve all questions
    all(req, res) {
        res.send('get All questions');
    }
    displayOne(req, res) {
        res.send('get one questions');
    }
    create(req, res) {
        const data = req.body;
        res.send('create new questions');
    }
}
exports.questionsControllers = questionsControllers;
exports.default = questionsControllers;
//# sourceMappingURL=questionsController.js.map