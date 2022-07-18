import {COUNTRY_NAME} from './type'

const initialstate = {
    city:'New York'
}

 const reducer = (state = initialstate , action) => {
    switch(action.type){
        case COUNTRY_NAME : 
        return{
            ...state,
            city : action.payload
        }
         default : return state
    }
}

export default reducer