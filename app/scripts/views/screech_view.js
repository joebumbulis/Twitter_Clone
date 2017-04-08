export default function screechView(store) {
  let state = store.getState();
  let user = state.user;
  let screechesBody = state.screeches.body;

  //Create the HTML
  let $html = $(`
    <div class="feed-screen">
    "Screeches!" from ${user}
    ${screechesBody}
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
