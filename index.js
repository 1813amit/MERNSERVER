const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const cors = require('cors'); 

app.use(cors());
app.use(bodyParser.json());

app.post('/api/calculateDifference', (req, res) => {
 try {
    
    const { timestamp1, timestamp2 } = req.body;
console.log(timestamp1,timestamp2 ,
    
    ":::::::::")
    const date1 = new Date(timestamp1);
    const date2 = new Date(timestamp2);
  
console.log(date1, date2)

    const differenceInSeconds = Math.abs((date2 - date1) / 1000);
  
    res.json({ differenceInSeconds });
 } catch (error) {
    console.log(error)
    return res.json(error)
 }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
