import {
    createStore,
    applyMiddleware
} from 'redux'
import thunk from './middleware/thunk.js'
import logger from './middleware/logger.js'
import utils from './utils.js'

import loginView from './views/login_view.js'
import logAndLoad from './actions/log_and_load.js'
import screechView from './views/screech_view.js'
import postScreech from './actions/post_screech.js'

export default function app() {

    const initialState = {
        user: '',
        screeches: [],
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
                //create timeOut feature for loading animation
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
                var newState = {
                  screeches: action.screeches,
                  view: screechView
                }
                return Object.assign({}, state, newState);

            case "ADD_SCREECH":
              var screeches = store.getState().screeches

              var newScreech = {
                  name: action.name,
                  username: action.username,
                  body: action.body
              }
              screeches.push(newScreech)
              return Object.assign({}, state, {screeches: screeches.reverse()})
                // return utils.copystate(currentState, {
                //     // loadingScreeches: true,
                //     currentUser: action.email,
                //     view: screechView
                // });



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
