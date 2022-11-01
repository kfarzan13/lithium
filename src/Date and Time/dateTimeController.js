const dateObject = new Date();
// current date
const date = (`${dateObject.getDate()}`);
 
// current month
const month = (`${dateObject.getMonth() + 1}`); // we are using ( +1) because getMonth() returns month from 0-11 not 1-12
 
// current year
const year = dateObject.getFullYear();
 
// current hours
const hours = dateObject.getHours();
 
// current minutes
const minutes = dateObject.getMinutes();
 
// current seconds
const seconds = dateObject.getSeconds();
 
// prints date & time in YYYY-MM-DD HH:MM:SS format
const timeStamp = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`


module.exports.timeStamp = timeStamp


