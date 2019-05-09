const db = require('../../db')

jest.mock('cloudant')

describe('Employee DAO', () => {
        test('Returns all instances of employee', done => {
		db.getEmployees((err, data) => {
			let emps = data
			expect(emps).toBeDefined()
			expect(emps).toBeInstanceOf(Array)
			done()
		})
        })

        test.each([0,1,2,3])('Returns the instance of employee with id %d', (a, done) => {
		db.getEmployeeById(a, (err, data)=> {
			let emp = data
			expect(emp).toBeDefined()
			expect(emp.id).toBeDefined()
			expect(emp.name).toBeDefined()
			done()
		})
        })
})

describe('Timestamp DAO', () => {
        test.each([[0,23],[8,11],[4,9]])('Returns all timestamps in the given interval %d to %d', (a, b, done) => {
		db.getStampsInInterval(a, b, (err, data) => {
			let stamps = data
			expect(stamps).toBeDefined()
			expect(stamps).toBeInstanceOf(Array)
			done()
		})
        })
        test.each([0,1,2,3])('Returns all timestamps with id %d', (a, done)=>{
		db.getStampsById(a, (err, data) => {
			let stamps = data
			expect(stamps).toBeDefined()
			expect(stamps).toBeInstanceOf(Array)
			done()
		})
        })
})

