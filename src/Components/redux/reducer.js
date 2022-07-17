import {COUNTRY_NAME} from './type'

const initialstate = {
    city:'nagpur,in'
}

 const reducer = (state = initialstate , action) => {
    switch(action.type){
        case COUNTRY_NAME : 
        return{
            ...state,
            cityname : action.payload
        }
         default : return state
    }
}

export default reducer