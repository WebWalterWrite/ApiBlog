import { Router } from 'express'
import { allMembers, oneMember, updateMember, createMember } from '../controllers/membersController'

export class MembersRouter {

    public router: Router;

    constructor (){
        this.router = Router();
        this.routes()
    }

    public routes() {

        
        // All members
        this.router.get(`/api/members/all`,allMembers);

        // One member
        this.router.get(`/api/member/find/:slug`,oneMember);
        
        // update member
        this.router.put(`/api/member/:id/update`, updateMember);
        
        // create member
        this.router.post(`/api/member/create`,createMember);
    }

}

const MembersRoutes = new MembersRouter();

export default MembersRoutes.router;