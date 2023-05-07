import { statesData } from './data';

export const pairData = (electionData) => {
  let indexGeo = 0
  let prev = 'AK'
  for (let i = 0; i < electionData.length; i++) {
    if (electionData[i].state !== prev) {
      indexGeo = indexGeo + 1
      prev = electionData[i].state
      // console.log(indexGeo, electionData[i].state, statesData.features[indexGeo].properties)
    }
    if (prev === statesData.features[indexGeo].properties.abbr) {
      const curParty = electionData[i].party
      const constVote =  electionData[i].max_percentage
      if (curParty === 'DEM')
        statesData.features[indexGeo].properties = {...statesData.features[indexGeo].properties, "DEM": constVote }
      else if (curParty === 'REP')
        statesData.features[indexGeo].properties = {...statesData.features[indexGeo].properties, "REP": constVote }
      else 
        statesData.features[indexGeo].properties = {...statesData.features[indexGeo].properties, "IND": constVote }
    } else (
      console.log("WRONG DATA", prev, statesData.features[indexGeo].properties.abbr)
    )
  }
  return statesData
}