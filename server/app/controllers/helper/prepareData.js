const {statesData} = require('./geoData')

exports.pairData = (electionData) => {

  let indexGeo = 0
  let prev = 'AK'
  for (let i = 0; i < electionData.length; i++) {
    let currentElection = electionData[i].dataValues
    if (currentElection.state !== prev) {
      indexGeo = indexGeo + 1
      prev = currentElection.state
    }
    if (prev === statesData.features[indexGeo].properties.abbr) {
      const curParty = currentElection.party
      const constVote =  currentElection.max_percentage
      if (curParty === 'DEM')
        statesData.features[indexGeo].properties = {...statesData.features[indexGeo].properties, "DEM": constVote }
      else if (curParty === 'REP')
        statesData.features[indexGeo].properties = {...statesData.features[indexGeo].properties, "REP": constVote }
      else if (curParty === 'IND')
        statesData.features[indexGeo].properties = {...statesData.features[indexGeo].properties, "IND": constVote }
    } else (
      console.log("WRONG DATA", prev, statesData.features[indexGeo].properties.abbr)
    )
  }
  return statesData
}