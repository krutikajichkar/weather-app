  import { COUNTRY_NAME } from "./type"

  export const countryName = (city) => {
    return{
        type : COUNTRY_NAME,
        payload : city
    }
}