import {INCREMENT , DECREMENT , VISIBILITY } from './actionsTypes' 



export const increment = () => {


return {type:INCREMENT}


}


export const decrement = () => {


return {type : DECREMENT}

}

export const changeVisibility =() => {


return {type : VISIBILITY}

}