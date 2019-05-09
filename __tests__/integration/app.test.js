const request = require('supertest')

const app = require('../../app')
const controller = require('../../controller')

jest.mock('../../controller')

controller.getHours.mockImplementation((from,to) => {})
controller.getPersonalStats.mockImplementation((id) => {
	let id_nr = parseInt(id, 10)
	if(id_nr > 3 || id_nr < 1) {
		throw 'Not in DB'
	} else return {
		id: id_nr,
		name: 'Pebbles',
		workedHours: 12
	}
})

describe('HTTP interface endpoints', () => {
	describe('GET /hours', () => {
		test('returns error code with no query params', async () => {
			let response = await request(app).get('/hours')
			expect(response.statusCode).toBe(400)
		})
		test('returns 200 on valid query params', async () => {
			let response = await request(app).get('/hours?from="2011-04-15"&to="2012-05-12"')
			expect(response.statusCode).toBe(200)
		})
	})
	describe('GET /today', () => {
		test('returns with status code 200', async () => {
			let response = await request(app).get('/today')
			expect(response.statusCode).toBe(200)
		})
	})
	describe('GET /employee/:id/stats', () => {
		test.each([1, 2, 3])('returns with status code 200 for id %d', async (id) => {
			let response = await request(app).get(`/employee/${id}/stats`)
			expect(response.statusCode).toBe(200)
		})
		test.each([100,324,0])('returns with status code 404 for id %d', async (id) => {
			let response = await request(app).get(`/employee/${id}/stats`)
			expect(response.statusCode).toBe(404)
		})
		test.each([1, 2, 3])('returns stats for employee ¤%d', async (id) => {
			let response = await request(app).get(`/employee/${id}/stats`)
			let employee = response.body
			expect(employee.id).toBe(id)
			expect(employee.name).toBe('Pebbles')
			expect(employee.workedHours).toBe(12)
		})
	})
})

