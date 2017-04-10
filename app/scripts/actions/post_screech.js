export default function postScreech(store, name, username, body) {
    let state = store.getState();
    const token = state.userToken

    $.ajax({
        type: "POST",
        dataType: "json",
        url: 'https://api.backendless.com/v1/data/message',
        headers: {
            'application-id': "85577861-2A70-62E0-FFC7-B56EDDAFC300",
            'secret-key': "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
            'user-token': token,
            'Content-Type': 'application/json',
            'application-type': 'REST'
        },
        data: JSON.stringify({
          "name": name,
          "username": username,
          "body": body
        })
    }).then(()=>{
      store.dispatch({
        type: 'ADD_SCREECH',
        name: name,
        username: username,
        body: body,
      })
    })
    // .then(()=>{
      // store.dispatch({
      //   type: 'LOAD_SCREECHES'
      //
      // })
    // })
  };
