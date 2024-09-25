import { Router } from "express";
import { create ,fcreate,detail,search,update,remove} from "../controller/link";
import { validateSchema } from "../middleware/validate";
import { createSchema,deleteSchema } from "../request/link";
import { verifyToken } from "../middleware/verifyToken";

const router = Router();
router.post(
    '/create',
    verifyToken,
    validateSchema(createSchema),
    create
)

router.post(
    '/fastcreate',
    validateSchema(createSchema),
    fcreate
)

router.get(
    '/link',
    validateSchema(deleteSchema),
    detail
)

router.get(
    '/links',
    search
)

router.delete(
    '/delete',
    validateSchema(deleteSchema),
    remove
)
export default router;