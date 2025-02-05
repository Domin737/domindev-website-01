export default {
  port: process.env.PORT || 3000,
  db: {
    uri: process.env.DB_URI,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: "1h",
  },
};
