/**
 * Global error handling middleware.
 * Formats errors consistently and returns the HTTP status and message.
 */
const errorMiddlware = (err, req, res, next) => {
    // ensure sensible defaults
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Something went wrong";

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
        // include stack trace only in development if desired
        stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
    });
};

export default errorMiddlware;