const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController= require("../controllers/weatherController")
const MemeController= require("../controllers/memeController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByDistrict", CowinController.getByDistrict)

router.get('/weatherUpdates', WeatherController.getWeatherUpdates)
router.get('/sortedWeatherTemperature', WeatherController.sortWeatherTemperature)

router.get('/getAllMemes', MemeController.getAllMemes)
router.post('/editMemes', MemeController.editMemes)

module.exports = router;