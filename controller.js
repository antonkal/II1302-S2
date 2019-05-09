const stats = require('./stats')
const db = require('./db')


module.exports = {	
	getHours(from, to) {
		let employees = db.getEmployeeTotalsInInterval(from, to)
		employees.forEach((employee) => {
			employee.hours = stats.calculateHours(employee.stamps)
			
		})
		return employees
	},
	getTodaysStats() {},
	getPersonalStats(id) {}
}
