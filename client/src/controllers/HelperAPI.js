import Axios from './axios'

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

export const fetchGeoData = async (displayYear,office) => {
  try {
    const response = await Axios.get(`/geo/${displayYear}/${
      office === "President" ? elections.pres.queryTerm
      : office === "Senate" ? elections.senate.queryTerm
      : elections.house.queryTerm}`);
    return response.data
  } catch (error) {
    console.log("Failed to retrive Geo Data - Elections:", error);
  } 
};


export const fetchDataTotal = async (office,) => {
  try {
    const response = await Axios.get(`/total-state-year/2020/${
      office === "President" ? elections.pres.queryTerm
      : office === "Senate" ? elections.senate.queryTerm
      : elections.house.queryTerm}`)
    return response.data
  } catch (error) {
    console.log("Failed to retrive Total Data - Elections:", error);
  } 
};

export const fetchVoteRegisByYear = async (year) => {
    try {
      const response = await Axios.get(`/get-voter-regis/${year}`)
      return response.data
    } catch (error) {
      console.log("Failed to retrive Vote Regis Data", error)
    }
};

export const fetchArticleCountByYear = async (year,) => {
    try {
      const response = await Axios.get(`/get-article-count-by-year/${year}`)
      return response.data;
    } catch (error) {
      console.log("Failed to retrive Article Count Data By Year", error)
    }
};

export const fetchAllArticleCount = async () => {
    try {
      const response = await Axios.get(`/get-all-articles-count/`)
      return response.data;
    } catch (error) {
      console.log("Failed to retrive all article count", error)
    }
  }

export const fetchArticleCount = async () => {
    try {
      const response = await Axios.get(`/get-article-total-count/`)
      return response.data;
    } catch (error) {
      console.log("Failed to retrive Vote Regis Data", error)
    }
  }

  export const fetchArticleCountBySource = async () => {
    try {
      const response = await Axios.get(`/get-count-by-source/`);
      return response.data
    } catch (error) {
      console.log("Failed to retrive Vote Regis Data", error)
    }
  }