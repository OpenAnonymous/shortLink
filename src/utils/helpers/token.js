import jwt from "jsonwebtoken"
import { JWTPASS } from "../../config/contants"
export function Token(data){
    const token = jwt.sign(data,JWTPASS,{ expiresIn: '1h' });
    return token;
}
