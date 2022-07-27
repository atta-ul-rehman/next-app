var cookie = require("cookie");
export const sendTokenResponse = async (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  await res.setHeader(
    "Set-Cookie",
    cookie.serialize("authToken2", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 86400,
      path: "/",
    })
  );
  res.status(statusCode).json({ success: true, token: token });
};
