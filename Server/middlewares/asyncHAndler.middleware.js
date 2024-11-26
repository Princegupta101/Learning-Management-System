
/**
 * @asyncHandler - A higher-order function that wraps asynchronous route handlers.
 * * It ensures that any errors that occur in asynchronous functions are passed to the next middleware.
 */
const asyncHandler = (fn) => {
    return (req, res, next) => {
      fn(req, res, next).catch((err) => next(err));
    };
  };
  
  export default asyncHandler;
  