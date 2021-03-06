export default function logAndLoad (store, email, password) {
  var state = store.getState();
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
        "application-id": "85577861-2A70-62E0-FFC7-B56EDDAFC300",
        "secret-key": "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
        "Content-Type": 'application/json',
        "application-type": 'REST'
      },
      data: JSON.stringify({
        login: email,
        password: password
      })
    }).then( (response) => {
      //After the ajax call dispatch any needed actions
      dispatch({
        type: 'AUTHENTICATED_USER',
        userID: response.ownerId,
        userToken: response['user-token'],
        username: response.username,
        name: response.name,
        bio: response.bio,
        email: response.email,
        joinedDate: new Date(response.created)
       });
    }).then( ()=> {
      // console.log(store.getState().userToken);
      //This GET request is to load the screechessss
      $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'https://api.backendless.com/v1/data/message',
        headers: {
          'application-id': "85577861-2A70-62E0-FFC7-B56EDDAFC300",
          "secret-key": "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
          'user-token': state.userToken,
        }
      }).then( (response, status) => {
        //The screechessss
        var screeches = response.data.map((screech)=>{
          return {
            body: screech.body,
            chip: screech.chip,
            username: screech.username,
            name: screech.name,
            objectId: screech.objectId,
            date: new Date(screech.created)
          };
        })
        dispatch({
          type: "LOADED_SCREECHES",
          screeches: screeches
        })
      });
    })
  }
}
