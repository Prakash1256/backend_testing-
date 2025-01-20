// const asyncHandler = (fn) => async (req,res)=>{
//    try {
//         await fn(req, res, next)
//    } catch (error) {
//     res.status(error.code || 500).json({
//         success:false,
//         message:err.message
//     })
//    }
// }

// export default asyncHandler

const asyncHandler = (requestHandler) =>{
    (req, res , next)=>{
        Promise.resolve(requestHandler(req, res, next)).catch((err)=> next(err))
    }
}

export {asyncHandler}