import NodeCache from "node-cache";

const myCache = new NodeCache();
export function createCache(key,value,ttl){
    myCache.set(key,value,ttl);
}

export function getCache(key){
    return myCache.get(key);
}

