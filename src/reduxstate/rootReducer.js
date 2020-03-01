export function rootReducer(state = {}, action) {
    console.log(state);
    switch (action) {
        case 'ADD_ITEM':
            return '';
        default:
            return state;
    }
}