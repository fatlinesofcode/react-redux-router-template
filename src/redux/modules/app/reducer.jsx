import update from 'react/lib/update';

const initialState = {
    title: "",
    btnLeft:null,
    btnRight:null
}

export default function app(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_APP_STATE':
            let nextState = update(initialState, {});
            // return Object.assign({}, state, action.payload);
            for (let key in action.payload) {
                let val = action.payload[key];
                nextState[key] = val;
            }
            return nextState;

            break;
        default:
            return state;
    }
}