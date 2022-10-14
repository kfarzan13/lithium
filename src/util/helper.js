const printDate = new Date().toLocaleString()
const printMonth = new Date().toLocaleString(
  'default', {month: 'long'}
)

const getBatchInfo = function() {
    return "Batch Name - Lithium, Week & Day - W3D5, Topic - Nodejs module system."
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo
