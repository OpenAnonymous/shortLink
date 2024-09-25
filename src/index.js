import createApp from './server';
import connectDatabase from './config/mongodb';

const app = createApp();
app.listen(4000, 'localhost',()=>{
    console.log('Server started on http://localhost:4000');
    connectDatabase();
});

