  import { COUNTRY_NAME ,FETCH_USERS_SUCCESS} from "./type"
  import axios from 'axios'
  

  export const countryName = (city) => {
    return{
        type : COUNTRY_NAME,
        payload : city
    }
}

// export const fetchUsersSuccess = (data) => {
//     return{
//         type : FETCH_USERS_SUCCESS ,
//         payload : data
//     }
// }

// export const fetchData = () => {
//     return (dispatch) => {
//         axios.get(`http://api.weatherstack.com/forecast?access_key=d6960de5bb7644304b29a83618d88fd8&query=Nagpur`)
//         .then(response => 
//             {const data = response.data
//             dispatch(fetchUsersSuccess(data))})
//         .catch(error => {
//             const errorMsg = error.message
//         })
//     }
// }
