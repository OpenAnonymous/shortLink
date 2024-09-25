import { responseSuccess,responseError } from "../../utils/helpers/response"
import {
    create as createS,
    update as updateS,
    remove as removeS,
} from "../service/user"
import User from "../model/user"
import { Token } from "../../utils/helpers/token"
import {createCache} from "../../utils/handles/cache"

export async function create(req,res,next){
    const user = await createS(req.body)
    return user ? responseSuccess(res) : 
    user == 0 ? responseError(res,403,"email exists") :
    responseError(res,400,"error creating user : email or something else is wrong")
}
export async function detail(req,res,next){
    const decode = req.currentUser;
    const user = await User.findOne({email : decode.email});
    return user? responseSuccess(res,200,user) : responseError(res,400,"error finding user")
}
export async function update(req,res,next){
    console.log(req.currentUser.email)
    const result = await updateS(req);
    return await result ? responseSuccess(res) :
    responseError(res,400,"error updating user")
}
export async function remove(req,res,next){
    const result = await removeS(req.currentUser);
    return await result ? responseSuccess(res) :
    responseError(res,400,"error updating user")
}
export async function login(req,res,next){
    const data = req.body;
    try {
        var user = await User.findOne(data);
    } catch (error) {
        return responseError(res,400,"can't find user")
    }
    
    if(user){
        const token = Token(
            {
                email : user.email,
                password : user.password,
                name : user.name,
                fbOrGoogleId : user.fbOrGoogleId,
            }
        );
        return await responseSuccess(res,200,{token : token},"loginSuccess")
    }
    else{
        return await responseError(res,400,"loginError")
    }
}

export async function logout(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const user = req.currentUser;
        const currentTime = Math.floor(Date.now() / 1000);
        const ttl = user.exp - currentTime;
        createCache(token, 1, ttl);
        return await responseSuccess(res,200,"","logout success");
    } catch (error) {
        return await responseError(res, 500, "logoutError")
    }
}


