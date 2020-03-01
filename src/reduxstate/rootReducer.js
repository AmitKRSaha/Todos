export function rootReducer(state = {}, { type, Name }) {
    console.log('state  from reducer - ' + JSON.stringify(state));
    console.log('type - ' + type);
    console.log('Name - ' + Name);
    switch (type) {
        case 'ADD_ITEM':
            return { Name: Name };
        default:
            return state;
    }
}