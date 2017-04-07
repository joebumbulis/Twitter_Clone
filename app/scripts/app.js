import {
    createStore,
    applyMiddleware
} from 'redux'
import thunk from './middleware/thunk.js'
import logger from './middleware/logger.js'
import utils from './utils.js'

import loginView from './views/login_view.js'

export default function app() {

    const initialState = {
        user: " ",
        messages: [],
        view: loginView
    }

    const reducer = function(state, action) {
        if (state === undefined) {
            return initialState;
        }

        switch (action.type) {
            case "START":

          //set timeout for sign in? 
                return state;

            case "STARTING_USER_LOGIN":
              console.log("Starting Login");
              return state;

            case "AUTHENTICATED_USER":
              return Object.assign({}, state, {
               // Fill in data sent with dispatch
              });


            case "LOADED_SCREECHES":
                console.log('User Logged In!');
                var newUser = action.user

                    return utils.copystate(currentState, {
                        // loadingScreeches: true,
                        currentUser: action.email,
                        view: screechView
                    });
                }


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
