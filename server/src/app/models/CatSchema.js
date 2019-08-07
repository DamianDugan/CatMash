import mongoose from 'mongoose-fill';

const CatSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    votes: {
        type: Number,
        required: false,
        default: 0,
    }
});

export default mongoose.model('Cat', CatSchema);
