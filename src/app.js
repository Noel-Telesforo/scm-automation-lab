const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({message: "SCM Automation Lab Running"});
});

app.get("/health", (req, res) => {
  res.send("OK")
})

const port = process.env.PORT || 3000;

if(require.main === module) {
  app.listen(port, () => {
    console.log(`Server running onport ${port}`);
  });
}


module.exports = app;