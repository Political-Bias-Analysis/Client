import Axios from "./axios";

class RequestResultsData {
    getVotesByOfficeAndYear(year, office) {
        return Axios.get(`/${year}/${office}`);
    }
}

export default RequestResultsData;