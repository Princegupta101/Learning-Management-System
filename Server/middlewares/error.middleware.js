/**
 * @errorMiddleware - Global error handling middleware.
 * Catches any errors thrown in the application and formats the response with appropriate status and message.
 * It also returns the stack trace for development purposes (can be removed in production).
 */
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