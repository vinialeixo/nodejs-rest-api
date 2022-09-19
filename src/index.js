const app = require("./config/server-config");
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server  runing ${port}`);
});
