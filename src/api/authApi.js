import axios from "axios";
//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
//clave api web - AIzaSyCMDPo6b04STl0wQh0Xr_klNHLXRySmaWw

const authApi = axios.create({
    baseURL:'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key:'AIzaSyCMDPo6b04STl0wQh0Xr_klNHLXRySmaWw'
    }
});

export default authApi;