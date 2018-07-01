"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testimonyController_1 = require("../controllers/testimonyController");
const testimony = new testimonyController_1.testimonyController;
class testimonyRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/api/testimony/all', testimony.findall);
        this.router.get('/api/testimony/:slug', testimony.findone);
    }
}
exports.testimonyRouter = testimonyRouter;
const testimonyRoutes = new testimonyRouter();
exports.default = testimonyRoutes.router;
//# sourceMappingURL=testimony.js.map