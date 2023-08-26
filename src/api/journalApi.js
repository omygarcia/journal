import axios from "axios";


const journalApi = axios.create({
    baseURL:'https://vue-demos-2f9dc-default-rtdb.firebaseio.com'
});


export default journalApi;