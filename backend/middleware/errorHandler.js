const errorHandler = (err, req, res, next) => {
    const errorStatus = res.statusCode ? res.statusCode : 500
    res.status(errorStatus);
    res.json({
        message: err.message,
        stack: err.stack
    })
}

module.exports = {errorHandler}