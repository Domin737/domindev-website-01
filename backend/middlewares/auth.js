// Tutaj będzie middleware do uwierzytelniania
const authMiddleware = (req, res, next) => {
  // Logika uwierzytelniania
  next();
};

export default authMiddleware;
