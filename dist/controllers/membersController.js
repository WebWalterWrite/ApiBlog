"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// To do : Importer le fichier contenant nos requêtes mongoose
// Display All members ( Use: user, administrator)
exports.allMembers = (req, res) => {
    res.send('Not implemented : all members ');
};
// Display one member (Use: user, administrator)
exports.oneMember = (req, res) => {
    let member = req.params.slug;
    res.send(`Not Implemented : one member => ${member}`);
};
// Update member ( Use: administrator)
exports.updateMember = (req, res) => {
    let id = req.params.id;
    console.log(id);
    // get data from req.body
    res.json({ resultData: "new data" + id });
};
// Create member (Use: user, administrator)
exports.createMember = (req, res) => {
    console.log(req.body);
    // get data from req.body
    res.json('received');
};
//# sourceMappingURL=membersController.js.map