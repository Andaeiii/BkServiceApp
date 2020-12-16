import { USER_LOGGED_IN } from '../types';
import api from '../api';

//an action is just a function that returns another function... 
//function that takes credentials and returns another function and inside this function we make the api requests.. 

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})


export const login = (credentials) => (dispatch) => 
            api.user.login(credentials)
                    .then(user => dispatch(userLoggedIn(user)));        //userLoggedIn ~ regular Redux Action...



                    // export const function lg2(credentials){
//     return function(){
//         api.user.login(credentials).then(res => res.data.user);
//     }
// }