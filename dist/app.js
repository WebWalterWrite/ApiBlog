"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const posts_1 = __importDefault(require("./routes/posts"));
const members_1 = __importDefault(require("./routes/members"));
const questions_1 = __importDefault(require("./routes/questions"));
const testimony_1 = __importDefault(require("./routes/testimony"));
class App {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        const Mongo_Uri = 'mongodb://sammy:symfony77@ds159020.mlab.com:59020/corpalif';
        mongoose_1.default.connect(Mongo_Uri, () => {
            console.log('we are connected to mongoose');
        });
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
    }
    routes() {
        const router = express_1.default.Router();
        this.app.use((req, res, next) => {
            res.append('Access-Control-Allow-Origin', ['*']);
            res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.append('Access-Control-Allow-Headers', 'Content-Type');
            next();
        });
        this.app.use('/', posts_1.default);
        this.app.use('/', members_1.default);
        this.app.use('/', questions_1.default);
        this.app.use('/', testimony_1.default);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map