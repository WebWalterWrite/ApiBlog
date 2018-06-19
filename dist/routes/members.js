"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const membersController_1 = require("../controllers/membersController");
class MembersRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        // All members
        this.router.get(`/api/members/all`, membersController_1.allMembers);
        // One member
        this.router.get(`/api/member/find/:slug`, membersController_1.oneMember);
        // update member
        this.router.put(`/api/member/:id/update`, membersController_1.updateMember);
        // create member
        this.router.post(`/api/member/create`, membersController_1.createMember);
    }
}
exports.MembersRouter = MembersRouter;
const MembersRoutes = new MembersRouter();
exports.default = MembersRoutes.router;
//# sourceMappingURL=members.js.map