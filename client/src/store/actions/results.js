import { GET_VOTES_BY_OFFICE_AND_YEAR } from "./types";

import DashboardControllers from "../../controllers/DashboardControllers";

export const retrieveVotesByOfficeAndYear = (year, office) => async (dispatch) => {
  try {
    const res = await DashboardControllers.getVotesByOfficeAndYear(year, office)
  }
}