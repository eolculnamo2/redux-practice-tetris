export const GENERATE = 'counter/GENERATE'
import store from '../store';

let initialState = {
    positions: [0,1]
}


export default (state = initialState, action) => {
    switch(action.type) {
        case "GENERATE":
        return {
            ...state,
            positions: [state.positions[0]+1,state.positions[1]]
        }
        default:
        return state
    }
}

export const generate = () => {
    store.dispatch({type: "GENERATE"})
}