import {
    createStore,
    applyMiddleware
} from 'redux'
import thunk from './middleware/thunk.js'
import logger from './middleware/logger.js'
import utils from './utils.js'

import loginView from './views/login_view.js'
import logAndLoad from './action/log_and_load.js'

export default function app() {

    const initialState = {
        user: '',
        messages: [],
        view: loginView
    }

    const reducer = function(state, action) {
        if (state === undefined) {
            return initialState;
        }

        switch (action.type) {
            case "START":
                return state;

            case "STARTING_USER_LOGIN":
                console.log("Starting Login");
                return state;

            case "AUTHENTICATED_USER":
                console.log("User is authenticated");
                var newState = {
                    // Fill in data sent with dispatch
                    id: action.userID,
                    userToken: action.userToken,
                    user: action.username,
                    name: action.name,
                    bio: action.bio,
                    email: action.email,
                    joinedDate: action.joinedDate,
                }
                return Object.assign({}, state, newState);


            case "LOADED_SCREECHES":
                console.log('User Logged In!');
                var newUser = action.user

                return utils.copystate(currentState, {
                    // loadingScreeches: true,
                    currentUser: action.email,
                    view: screechView
                });



            default:
                console.debug(`Unhandled Action: ${action.type}!`);
                return state;

        };
    };

    const store = createStore(
        reducer,
        applyMiddleware(
            thunk,
            logger
        )
    );

    const render = function() {
        let state = store.getState();
        $('#app').html(state.view(store));
    }

    store.subscribe(render);
    store.dispatch({
        type: "START"
    })

}
