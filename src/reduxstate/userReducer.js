export const userReducer = (state = {}, { type, payload }) => {
    console.log(payload)
    switch (type) {
        case 'FETCH_User':
            return payload;
        default:
            return state
    }

}