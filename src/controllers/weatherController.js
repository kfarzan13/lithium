let axios = require("axios")

let getWeatherUpdates = async function (req, res) {

    try {
        let location = req.query.q;
        let option = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${location},&appid=ef77f90c38111b93c7a5f0f27e93ce20`,
        };
        let result = await axios(option);
        console.log(result.data);
        res.status(200).send({ temperature : result.data.main.temp });

    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: err.message });
    }
}


let sortWeatherTemperature = async function (req, res) {
    try {

    let cities = req.query.q
    let temperature = [];
    for (i = 0 ; i < cities.length ; i++) {
        let city = cities[i];
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ef77f90c38111b93c7a5f0f27e93ce20`
        }
        let result = await axios(options);
        temperature.push({city : cities[i] , temperature : result.data.main.temp});
    }
    let sortedTemperature = temperature.sort(function (a, b) {
        return a.temperature - b.temperature;
    });
    res.status(200).send({ status: true, data: sortedTemperature });
    } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
    }
};

module.exports.getWeatherUpdates = getWeatherUpdates
module.exports.sortWeatherTemperature = sortWeatherTemperature