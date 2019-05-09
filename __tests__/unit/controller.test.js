const controller = require('../../controller')

let db = require('../../db')
let stats = require('../../stats')

describe('The getHours() function', () => {
	test('stuff', () => {
		db.getEmployeeTotalsInInterval = jest.fn((from, to) => dbEmployees)
		stats.calculateHours = jest.fn(stamps => 9)

		let staff = controller.getHours('2010-10-20','2017-12-02')
		let fred = staff[0]
		let barney = staff[1]
		expect(staff.length).toBe(2)
		expect(fred.name).toBe('Fred Flintstone')
		expect(barney.name).toBe('Barney Rubble')
		expect(fred.hours).toBe(9)
		expect(barney.hours).toBe(9)
	})
})
describe('The getTodaysStats() function', () => {
	test.todo('stuff')
})
describe('The getPersonalStats function', () => {
	test.todo('stuff')
})

const dbEmployees = [
	{
		id:1,
		name: 'Fred Flintstone',
		stamps: [
		{
			employeeId: 1,
			checkedIn: true,
			time: '2017-01-22 7:30'
		},{
			employeeId: 1,
			checkedIn: false,
			time: '2017-01-22 16:30'
		}]
	},
	{
		id:2,
		name: 'Barney Rubble',
		stamps: [{
			employeeId: 2,
			checkedIn: true,
			time: '2017-01-22 8:30'
		},{
			employeeId: 2,
			checkedIn: false,
			time: '2017-01-22 13:30'
		}]
	}
]

