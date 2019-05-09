module.exports = {
	calculateHours: (timestamps) => {
		let totalTime = 0
		for(let i = 0; i<timestamps.length; i+=2) {
			let start = timestamps[i].time 
			let stop = timestamps[i+1].time 
			if(isNaN(start) || isNaN(stop)){ 
				throw ' Time is NaN!'
			}
			if(start < 0 || stop < 0|| start > 24|| stop > 24){ 
				throw 'Wrong time!'
			}
			if(stop - start < 0){ 
				throw 'Invalid time span'
			}
			let time = stop - start
			totalTime += time
		}
		return totalTime
	}
}

