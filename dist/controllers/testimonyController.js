"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import models
const TestimonySchema_1 = __importDefault(require("../models/TestimonySchema"));
class testimonyController {
    findall(req, res) {
        return TestimonySchema_1.default.find()
            .then(result => {
            res.json(result);
        });
    }
    ;
    findone(req, res) {
        res.send('retrieve one');
    }
}
exports.testimonyController = testimonyController;
exports.default = testimonyController;
//# sourceMappingURL=testimonyController.js.map