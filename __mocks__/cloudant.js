const cloudant = {
	use(dbName) {
		if (dbName === 'Employee') {
			return employeeDB
		} else if (dbName ==='Stamp') {
			return stampDB
		} else throw 'Invalid DB'
	}
}

const employeeDB = {
	get(arg0, arg1) {
		let cb
		let data
		if (arguments.length === 2) {
			let id = arg0
			cb = arg1
			data = getEmployeeById(id)
		} else {
			cb = arg0
			data = employeeData
		}
		cb(null, data)
	}
}

const stampDB = {
	get(arg0, arg1) {
		let cb
		let data
		if (arguments.length === 2 && typeof arg0 === 'object') {
			cb = arg1
			let from = arg0.from
			let to = arg0.to
			data = getStampsInInterval(from, to)
		} else if (arguments.length === 2 && typeof arg0 === 'number') {
			cb = arg1
			let id = arg0
			data = getStampsById(id)
		} else {
			cb = arg0
			data = stampData
		}
		cb(null, data)
	}
}

const getEmployeeById = (id) => {
	let found = employeeData.find(employee => employee.id === id)
	return found
}


const getStampsInInterval = (from, to) => {
	let returned = stampData.filter(stamp => ((stamp.time >= from) || (stamp.time <= to)))
	return returned
}

const getStampsById = (id) => {
	let found = stampData.filter(stamp => stamp.id === id)
	return found
}


const employeeData = [
	{id:0, name:"Fred Flintstone"},
	{id:1, name:"Barney Rubble"},
	{id:2, name:"Mister Kill"},
	{id:3, name:"Muscles McBoulder"}
]

const stampData = [
	{id:0, in:true, time:9},
	{id:0, in:false, time:11},
	{id:0, in:true, time:13},
	{id:1, in:true, time:8},
	{id:1, in:false, time:11},
	{id:1, in:true, time:13},
	{id:2, in:true, time:9},
	{id:2, in:false, time:12},
	{id:3, in:true, time:8}
]

module.exports = cloudant

