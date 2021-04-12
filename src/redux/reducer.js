import {INCREMENT , DECREMENT , VISIBILITY} from './actions/actionsTypes'



const initialState ={

count : 0 ,
display: true


}



const reducer = (state = initialState , action ) => {


switch(action.type) {

case INCREMENT : return {...state , count : state.count +1}
case DECREMENT :return {...state,count : state.count>0 ? state.count -1 : state.count}
case VISIBILITY: return {...state , display: !state.display}
default : return state




}



}


export default reducer