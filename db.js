const cloudant = require('cloudant')

module.exports = {
	getEmployees(cb) {
		let employeeDB = cloudant.use('Employee')
		employeeDB.get(cb)
	},
	getEmployeeById(id, cb) {
		let employeeDB = cloudant.use('Employee')
		employeeDB.get(id, cb)
	},
	getEmployeeTotalsInInterval(from, to, cb) {
		let employeeDB = cloudant.use('Employee')
		employeeDB.get({from, to}, cb)
	},
	getStampsInInterval(from, to, cb) {
		let stampDB = cloudant.use('Stamp')
		stampDB.get({from, to}, cb)
	},
	getStampsById(id, cb) {
		let stampDB = cloudant.use('Stamp')
		stampDB.get(id, cb)
	}
}

