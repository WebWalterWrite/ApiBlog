"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TestimonySchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    content: {
        type: String
    },
    image: {
        type: String
    }
});
const Testimony = mongoose_1.model('testimony', TestimonySchema, 'testimony');
exports.default = Testimony;
//# sourceMappingURL=PostTestimony.js.map