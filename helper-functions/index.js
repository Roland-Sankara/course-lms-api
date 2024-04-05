function verifyToken(){
    return ((req, res, next)=>{
        // console.log(req.headers)
        if(req.headers.authorization){
            let authHeader = req.headers.authorization
            let token = authHeader.split(' ')[1];
    
            if(token){
                res.send('token exists')
                // Verify if the token is authentic
            }else{
                res.send('token is missing')
            }
        }else{
            res.send("Missing Authorization Header")
        }
    })
}

export default verifyToken;