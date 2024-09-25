import { Router } from "express";
import user from "./user";
import links from "./link";
import { detail } from "../controller/link";
const router = Router();

router.use('/user', user);
router.use('/links', links);
router.get(
    '/:keyword',
    detail
)
router.get(
    '/',
    (req,res,next)=>{
        res.write("<h1>hello page</h1>")
        res.end()
    }
)

export default router;