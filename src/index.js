const express = require('express');
const bodyParser = require('body-parser');
const address = require('address');
const route = require('./routes/route.js');
const TimeStamp = require('./Date and Time/dateTimeController')
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// Global Middleware

// const timeElapsed = Date.now();
// const today = new Date(timeElapsed);

app.use (
    function (req, res, next) {
        // console.log (today.toISOString() + " , " + address.ip() + " , " + req.url);
        console.log(`TimeStamp : ${TimeStamp.timeStamp} , Ip Address - IPV4 : (${address.ip()}) & IPV6 : (${req.ip}) , Route : ${req.url}`)
        next();
  }
  );

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
