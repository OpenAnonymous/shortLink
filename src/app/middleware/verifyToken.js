import { responseError, responseSuccess } from "../../utils/helpers/response";
import { Token } from "../../utils/helpers/token";
import { JWTPASS } from "../../config/contants";
import jwt from "jsonwebtoken"
import { getCache } from "../../utils/handles/cache";

export function verifyToken(req,res,next){
    try {
        var token = req.headers.authorization.split(" ")[1];
    } catch (error) {
        return responseError(res,403,"no authorization");
    }
    
    if(token){
        if(getCache(token)){
            return responseError(res,400,"Token Expired")
        }
        else{
            jwt.verify(token, JWTPASS, function (err, decoded) {
                if (err) {
                    return responseError(res, 401,"err token");
                }
                else {
                    req.currentUser = decoded;
                    next();
                }
            });
        }
    }
}
