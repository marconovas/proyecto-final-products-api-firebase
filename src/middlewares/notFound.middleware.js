//ROUTE NOT FOUND MIDDLEWARE
export function notFound(req, res) {
    return res.status(404).json({
        message: "Ruta no encontrada."
    });
}