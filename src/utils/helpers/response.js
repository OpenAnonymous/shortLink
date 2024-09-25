export function responseSuccess(res,status =200,data="",message = "ok" , error = false){
    res.status(status).json({
        data,
        error,
        message
    })
}

export function responseError(res, status = 500, message = "server error", error = true){
    res.status(status).json({
        error,
        message
    })

}