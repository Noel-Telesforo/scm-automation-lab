const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({message: "SCM Automation Lab Running"});
});

const port = process.env.PORT || 3000;

if(require.main === module) {
  app.listen(port, () => {
    console.log(`Server running onport ${port}`);
  });
}


module.exports = app;