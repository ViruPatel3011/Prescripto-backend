import jwt from "jsonwebtoken";

// User authentication middleware

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized! Please Login again.",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    req.body.userId = token_decode.id;

    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message || "Error occured during doctor creation",
    });
  }
};

export default authUser;
