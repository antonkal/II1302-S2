const express = require('express')
const controller = require('./controller')

const app = express()

app.use(express.static('public'))

app.get('/hours', (req, res) => {
	if(!(req.query.from && req.query.to)){
		res.status(400).json({error: 'Request need to pass query params from and to'})
	} else {
		let timeData = controller.getHours(req.query.from, req.query.to)
		res.json(timeData)
	}
})
.get('/today', (req, res) => {
	let statsToday = controller.getTodaysStats()
	res.json(statsToday)
})
.get('/employee/:id/stats', (req, res) => {
	try {
		let personalStats = controller.getPersonalStats(req.params.id)
		res.json(personalStats)
	} catch (e) {
		res.status(404).json({error: e})
	}
})

module.exports = app

