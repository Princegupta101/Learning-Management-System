/**
 * Custom Error Class to handle application-specific errors
 */
class AppError extends Error{
    constructor (message, statusCode){
        super(message);

        this.statusCode=statusCode;

        Error.captureStackTrace(this,this.constructor );
    }
}
export default AppError;