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
    Axios.get(`/geo/${displayYear}/${
      office === "President" ? elections.pres.queryTerm
      : office === "Senate" ? elections.senate.queryTerm
      : elections.house.queryTerm}`)
    .then((response) => {setgraphGeoData(response.data)});
  } catch (error) {
    console.log("Failed to retrive Geo Data - Elections:", error);
  } 
};


export const fetchDataTotal = 
  async (
    office,
    setTotalVote,
  ) => {
  try {
    Axios.get(`/total-state-year/2020/${
      office === "President" ? elections.pres.queryTerm
      : office === "Senate" ? elections.senate.queryTerm
      : elections.house.queryTerm}`)
    .then((response) => setTotalVote(response.data));
  } catch (error) {
    console.log("Failed to retrive Total Data - Elections:", error);
  } 
};

export const fetchVoteRegisByYear = 
  async (
    year,
    setVoteRegis
  ) => {
    try {
      Axios.get(`/get-voter-regis/${year}`)
      .then((response) => setVoteRegis(response.data));
    } catch (error) {
      console.log("Failed to retrive Vote Regis Data", error)
    }
};

export const fetchArticleCountByYear = 
  async (
    year,
    setArticleCount
  ) => {
    try {
      Axios.get(`/get-article-count-by-year/${year}`)
      .then((response) => setArticleCount(response.data));
    } catch (error) {
      console.log("Failed to retrive Article Count Data By Year", error)
    }
};

export const fetchAllArticleCount = 
  async (
    setAllArticleCount
  ) => {
    try {
      Axios.get(`/get-all-articles-count/`)
      .then((response) => setAllArticleCount(response.data));
    } catch (error) {
      console.log("Failed to retrive all article count", error)
    }
  }

export const fetchArticleCount = 
  async (
    setArticleCount
  ) => {
    try {
      Axios.get(`/get-article-total-count/`)
      .then((response) => setArticleCount(response.data));
    } catch (error) {
      console.log("Failed to retrive Vote Regis Data", error)
    }
  }

  export const fetchArticleCountBySource = 
  async (
    setArticleCountBySourcr
  ) => {
    try {
      Axios.get(`/get-count-by-source/`)
      .then((response) => setArticleCountBySourcr(response.data));
    } catch (error) {
      console.log("Failed to retrive Vote Regis Data", error)
    }
  }