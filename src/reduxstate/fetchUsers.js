export const fetchusers = (dispatch) => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(res => dispatch({type: 'FETCH_User', payload: res.data}))
}