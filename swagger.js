const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Anynomous",
      description:
        "API endpoints for a mini blog services documented on swagger",
      contact: {
        name: "Avyudaya Acharya",
        email: "avyudaya24@gmail.com",
        url: "https://github.com/avyudaya/anynomous-server",
      },
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:5000/",
        description: "Local server",
      },
    ],
  },
  apis: [`./routes/*.js`,`server.js` ],
};

const swaggerSpec = swaggerJsdoc(options);
function swaggerDocs(app, port) {
  // Swagger Page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Documentation in JSON format
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}
module.exports = swaggerDocs;
