import Axios from '../../controllers/axios'

const elections = {
  pres: {
    queryTerm: "Pres",
    years: [2012, 2016, 2020]
  },
  senate: {
    queryTerm: "Senate",
    years: [2010, 2012, 2014, 2016, 2018, 2020]
  },
  house: {
    queryTerm: "House",
    years: [2010, 2012, 2014, 2016, 2018, 2020]
  }
}

export const fetchGeoData = 
  async (
    displayYear,
    office,
    setgraphGeoData,
  ) => {
  try {
    console.log(displayYear, office)
    Axios.get(`/${displayYear}/${
      office === "President" ? elections.pres.queryTerm
      : office === "Senate" ? elections.senate.queryTerm
      : elections.house.queryTerm}/geo`)
    .then((response) => {setgraphGeoData(response.data)});
  } catch (error) {
    console.log("Failed to retrive Data: Presitental Elections:", error);
  } 
};

export const fetchSenateData = 
  async(
    displayYear, 
    setgraphGeoData,
  ) => {
  try {
    Axios.get(`/${displayYear}/${elections.senate.queryTerm}/geo`)
    .then((response) => setgraphGeoData(response.data));
  } catch (error) {
    console.log("Failed to retrive Data: Senate Elections");
  } 
};

export const fetchHouseData = 
  async (
    displayYear, 
    setgraphGeoData,
    ) => {
  try {
    Axios.get(`/${displayYear}/${elections.house.queryTerm}/geo`)
      .then((response) => setgraphGeoData(response.data));
  } catch (error) {
    console.log("Failed to retrive Data: House Elections");
  } 
};

export const fetchDataTotal = 
  async (
    office,
    setTotalVote,
  ) => {
  try {
    Axios.get(`/2020/${
      office === "President" ? elections.pres.queryTerm
      : office === "Senate" ? elections.senate.queryTerm
      : elections.house.queryTerm}/total-state-year`)
    .then((response) => setTotalVote(response.data));
  } catch (error) {
    console.log("Failed to retrive Data: Presitental Elections:", error);
  } 
};

