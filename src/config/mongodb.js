import mongoose from 'mongoose';
import { MONGOPASS } from './contants';

const connectDatabase = async () => {
    try {
        const connectionString = `mongodb+srv://vanmanh2003:${MONGOPASS}@cluster0.xcziya3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

        await mongoose.connect(connectionString);

        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

export default connectDatabase;
