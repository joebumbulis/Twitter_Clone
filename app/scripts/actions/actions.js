export default function Actions () {
  //All async action creators should return a function that takes 'dispatch' as its argument
  return function (dispatch) {
    //Before ajax call dispatch any needed actions
    dispatch( { type: "STARTING_EXAMPLE_ASYNC" });

    //Do the ajax call
    return  $.ajax({
      url: "SOME_URL",
      headers: {
        "SOME_ID": "BLAH"
      }
      data: {
      }
    }).then(function (response) {
      //After the ajax call dispatch any needed actions
      dispatch( { type: "ENDING_EXAMPLE_ASYNC" });
    })
  }
}

const url = 'http://tiny-za-server.herokuapp.com/collections/flux-todo';
const api = {
  getAllTodos: function (store) {
    $.getJSON(url).then((data) => {
      store.dispatch(actions.todosLoaded(data));
    });
  },
