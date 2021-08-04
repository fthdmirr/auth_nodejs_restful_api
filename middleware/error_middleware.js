const error_middleware=(err,req,res,next)=>{
    res.json({
        message:err.message,
        errorCode:err.statusCode
    })
}


module.exports=error_middleware