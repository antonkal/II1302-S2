const stats = require('../../stats')

describe('Stats module', () => {
	test('Calculates the total time of given timestamps', () => {
		let stamps = [
			{id: 1, in: true, time:8 },
			{id: 1, in: false, time:12 },
			{id: 1, in: true, time:8 },
			{id: 1, in: false, time:12 },
			{id: 1, in: true, time:9 },
			{id: 1, in: false, time:15 },
			{id: 1, in: true, time:7 },
			{id: 1, in: false, time:12 }
		]
		let hours = stats.calculateHours(stamps)
		expect(hours).toBe(19)
	})

	test('Throws error if starting time happens before end time', ()=> {
		let stamp = [{id: 1, in: true, time:17 }, {id: 1, in: false, time:12 }]
		expect(()=>{stats.calculateHours(stamp)}).toThrowError()
	})
		
	test.each([
		[{id:1, in: true, time: 9}, {id:1, in: false, time: 29}],
		[{id:1, in: true, time: -9}, {id:1, in: false, time: 22}],
		[{id:1, in: true, time: "e"}, {id:1, in: false, time: 20}]
	])('Calls error on invalid time on objects %o or %o', (a, b) => {
		expect(() => {stats.calculateHours([a,b])}).toThrowError()
	})
})
