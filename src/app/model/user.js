import ModelConstructor from '../model/contructor.js';

const userSchemaDefinition = {
    fbOrGoogleId: String,
    email: String,
    password: String,
    name: String
};

const User = new ModelConstructor('User', userSchemaDefinition);

export default User.getModel();
