"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    const id = req.params.id;
    console.log(id);
    // get data from req.body
    res.json({ resultData: "new data" + id });
};
// Create member (Use: user, administrator)
exports.createMember = (req, res) => {
    console.log(req.body);
    //     const getJob = ( str: any ): string => { 
    //         assert(str.test(/A-Z/i));
    //         return str;
    //    }
    //    const myjob = getJob(req.body.job)
    //     console.log(myjob) 
    //     // get data from req.body
    //     myjob ? res.json('received') : res.status(400).json('requete incorrecte')
};
//# sourceMappingURL=membersController.js.map