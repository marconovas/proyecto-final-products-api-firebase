import jwt from "jsonwebtoken";

export function login(req, res) {
    const { email, password } = req.body;

    if(
        email !== process.env.ADMIN_EMAIL ||
        password !== process.env.ADMIN_PASSWORD
    ) {
        return res.status(401).json({
            message: "Credenciales inválidas."
        });
    }

    const token = jwt.sign(
        { email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    return res.status(200).json({
        token
    });
}