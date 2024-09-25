import mongoose from 'mongoose';

class ModelConstructor {
    constructor(name, schemaDefinition, options = {}) {
        const schema = new mongoose.Schema(schemaDefinition, { ...options, timestamps: true });
        this.model = mongoose.model(name, schema);
    }

    getModel() {
        return this.model;
    }
}

export default ModelConstructor;
