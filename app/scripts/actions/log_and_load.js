export default function logAndLoad (username, password) {
  /*
  *   Action to Login user and load all screeches
  */
  //All async action creators should return a function that takes 'dispatch' as its argument
  return function (dispatch) {
    //Before ajax call dispatch any needed actions
    dispatch( { type: "STARTING_USER_LOGIN" });

    //Do the ajax call
    return  $.ajax({
      //fill in with post to login user
      type: 'POST',
      contentType: 'application/json',
      url: 'http://api.backendless.com/v1/users/login',
      headers: {
        'application-id': "85577861-2A70-62E0-FFC7-B56EDDAFC300",
        "secret-key": "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
        'Content-Type': 'application/json',
        'application-type': 'REST'
      }
      data: {
      }
    }).then(function (response) {
      //After the ajax call dispatch any needed actions
      dispatch({
        type: "AUTHENTICATED_USER",
        userID: response.userId,
        userToken: response['user-token'],
        user: username
       });
    }).then(function () {
      //This GET request is to load the screechessss
      $.ajax({

      }).then(function (response) {
        //The screechessss

        dispatch({
          type: "LOADED_SCREECHES",
          screeches: response.data
        })
      });
    })
  }
}

// const url = 'http://api.backendless.com/v1/users/login'
// const api = {
//   getAllScreeches: function (store) {
//     $.getJSON(url).then((data) => {
//       store.dispatch(actions.todosLoaded(data));
//     });
//   },
