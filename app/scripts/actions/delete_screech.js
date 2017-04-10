export default function deleteScreech(store, id, $screechLoaded) {
    let state = store.getState();
    const token = state.userToken
    console.log('JOE', id);
    // const url =

    $.ajax({
        type: "DELETE",
        // dataType: "json",
        url: 'https://api.backendless.com/v1/data/message/'+id,
        headers: {
            'application-id': "85577861-2A70-62E0-FFC7-B56EDDAFC300",
            'secret-key': "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
            'user-token': token,
        },
    }).then((status) => {
        console.log(status);
        $screechLoaded.remove()
    });

}
