import Axios from "./axios";

class RequestResultsData {
    getVotesByOfficeAndYear(year, office) {
        return Axios.get("/getVotesByOfficeAndYear");
    }
}