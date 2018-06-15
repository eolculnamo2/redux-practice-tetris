//counter reducer
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';
import store from '../store';

const initialState = {
    count: 0
}

//reducers
export default (state = initialState, action) =>{
    switch(action.type) {
        case "INCREMENT":
        return {
            ...state,
            count: state.count + 1
        }
        case "DECREMENT": 
        return {
            ...state,
            count: state.count - 1
        }
        //must have default
        default:
        return state;
    }
};

//actions
export const increment = () => {
    store.dispatch({
           type: "INCREMENT"
       })
}

export const decrement = () => {
     store.dispatch({
            type: "DECREMENT"
        })
}