const errorMiddlware=(err, req, res, next)=>{
    err.statusCode= err.statusCode||500;
    err.massge= err.massge||"Something went wrong",
    res.status(err.statusCode).json({
        success:false,
        message:err.massge,
        stack:err.stack,        

    })
}
export default errorMiddlware;