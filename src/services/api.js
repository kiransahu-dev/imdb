import axios from "axios";

export const categoryMovies = async (API_URL) => {
    try {
        let resp = await axios.get(API_URL);
        return resp.data
    }
    catch (error) {
        console.log("Error while calling the API", error.message);
        return error.resp.data;
    }
}