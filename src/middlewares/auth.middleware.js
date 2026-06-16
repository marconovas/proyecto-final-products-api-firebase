import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;

export async function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!auth){
        res.status(401).json({
            message: "Token requerido."
        });
    }

    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(
            token,
            SECRET
        );

        res.user = decoded;
        
        next();
    } catch(error) {
        return res.status(403).json({
            message: "Token inválido."
        })
    }
}