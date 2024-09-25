import { Router } from "express";
import { create ,detail,update,remove,login,logout} from "../controller/user";
import { validateSchema } from "../middleware/validate";
import { createSchema,updateSchema,loginSchema,search } from "../request/user";
import { verifyToken } from "../middleware/verifyToken";

const router = Router();
router.post(
    '/create',
    validateSchema(createSchema),
    create
)

router.get(
    '/me',
    verifyToken,
    detail
)

router.put(
    '/update',
    verifyToken,
    validateSchema(updateSchema),
    update
)
router.delete(
    '/delete',
    verifyToken,
    remove
)

router.post(
    '/login',
    validateSchema(loginSchema),
    login
)

router.post(
    '/logout',
    verifyToken,
    logout
)
export default router;