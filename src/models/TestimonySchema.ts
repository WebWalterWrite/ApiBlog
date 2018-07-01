import {Schema, model, Collection} from 'mongoose';

const TestimonySchema:Schema = new Schema ({

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

const Testimony = model('testimony', TestimonySchema,'testimony')


export default Testimony;