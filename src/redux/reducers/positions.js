export const GENERATE = 'counter/GENERATE'
import store from '../store';

//like state in regular react
let initialState = {
    positions: [[[-3,1],
    [-2,1],
    [-1,1],
    [0,1]]],
    occupiedStates: {}
}


//Long line shape
/* [-3,1]
[-2,1]
[-1,1]
[0,1] */


//shape will be an object with an array, shapeName, and ID
//action will iterate through shapes and add one to make drop
//another action will turn the shapes based on user input


//reducer
export default (state = initialState, action) => {
    switch(action.type) {
        case "GENERATE":
        return {
            ...state,
            positions: action.payload
        }
        break
       /*  case "ISOCCUPIED":
        return {
            ...state,
            occupiedStates
        } */
        default:
        return state
        break
    }
}

//action
export const generate = () => {

    const state =  store.getState();
    let payload = [];

    state.positions.positions.forEach((x,i)=>{
        let shape = []
        x.forEach((y,j)=>{
            shape.push([y[0]+1,y[1]])
        })
        payload.push(shape)
    })

    store.dispatch({type: "GENERATE", payload: payload})
}

export const isOccupied = (x,y) => {
    store.dispatch({type: "ISOCCUPIED"})
}