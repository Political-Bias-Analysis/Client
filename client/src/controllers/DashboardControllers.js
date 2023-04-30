import Axios from "./axios";

class RequestResultsData {
    getVotesByOfficeAndYear() {
        return Axios.get("/getVotesByOfficeAndYear");
    }
}