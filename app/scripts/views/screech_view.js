export default function screechViewstore) {
  let state = store.getState();
  var token = state.userToken;
  console.log(token);

  //Create the HTML
  let $html = $(`
    <div class="feed-screen">
    "Screeches!"
    </div>
    `);

  //Assign any event listeners
$($html).find('.login-btn').on('click', (e) => {
  store.dispatch({

  })
})

  //Return the html
  return $html;
}
