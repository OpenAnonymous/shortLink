import { responseSuccess,responseError } from "../../utils/helpers/response"
import { 
    create as createS,
    fcreate as fcreateS,
    detailS
} from "../service/link.js"

export async function create(req,res,next){
    const link = await createS(req)
    return link? responseSuccess(res,200,link) : responseError(res, 400, "Error creating link")
}

export async function fcreate(req,res,next){
    const link = await fcreateS(req)
    return link? responseSuccess(res,200,link) : responseError(res, 400, "Error creating link")
}

export async function detail(req,res,next){
    const keyword = req.params.keyword;
   
    try {
        var link = await detailS(keyword);
    } catch (error) {
        responseError(res)
    }
    
    const {title,originalUrl,shortUrl,thumnalUrl,} = link;
    const redirectUrl = `shopee://open?url=${encodeURIComponent(originalUrl)}`;

    return res.render('link',{
        originalUrl : originalUrl,
        title : title,
        shortUrl : shortUrl,
        thumnalUrl : thumnalUrl,
        redirectUrl : redirectUrl
    });
}

export async function search(req,res,next){
    return await responseSuccess(res)
}

export async function remove(req,res,next){
    return await responseSuccess(res)
}

