import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }, 
    profilePicture: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fprofile-image&psig=AOvVaw2-3EnVrFdZ_Dzx3yHmMKWr&ust=1711820892463000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOiDzPaDmoUDFQAAAAAdAAAAABAE",
    },
}, { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;