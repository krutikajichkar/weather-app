import {COUNTRY_NAME, FETCH_USERS_SUCCESS} from './type'

const initialstate = {
    city : 'Nagpur'
    
}

 const reducer = (state = initialstate , action) => {
    switch(action.type){
        case COUNTRY_NAME : 
        return{
            ...state,
            city : action.payload
        }
        // case FETCH_USERS_SUCCESS : 
        // return {
        //     ...state,
        //     loading : false ,
        //     data : action.payload ,
        //     error : ''
        // }
         default : return state
    }
}

export default reducer