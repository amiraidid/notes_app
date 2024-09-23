const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {

    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: "Login Needed" });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "Invalid Token" });
            }

            req.user = {
                id: decoded.id,
                email: decoded.email,
            };

            next();
        });

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = { protect };
