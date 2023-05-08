const {statesData} = require('./geoData')

exports.pairData = (electionData) => {

  let stateKey = {}
  electionData.forEach(element => {
    const currentVal = element.dataValues;
    if (currentVal.party === "DEM") {
      stateKey[currentVal.state] = {...stateKey[currentVal.state], "DEM":currentVal.max_percentage};
    } else if (currentVal.party === "REP") {
      stateKey[currentVal.state] = {...stateKey[currentVal.state], "REP":currentVal.max_percentage};
    } else {
      stateKey[currentVal.state] = {...stateKey[currentVal.state], "IND":currentVal.max_percentage};
    }
  });
  statesData.features.forEach(element => {
    const currentState = element.properties
    if (currentState.abbr in stateKey) {
      if ("DEM" in stateKey[currentState.abbr]) {
        currentState.DEM = stateKey[currentState.abbr]["DEM"];
      };
      if ("REP" in stateKey[currentState.abbr]) {
        currentState.REP = stateKey[currentState.abbr]["REP"];
      };
      if ("IND" in stateKey[currentState.abbr]) {
        currentState.IND = stateKey[currentState.abbr]["IND"];
      };
    }
  })

  return statesData
}