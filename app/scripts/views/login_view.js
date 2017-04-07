import logAndLoad from '../actions/log_and_load.js'

export default function loginView(store) {
  let state = store.getState();

  //Create the HTML
  let $html = $(`
    <div class="login-screen">
      <img class="grackle-img" src="app/images/Grackles_001.png" alt="">
      <h2>Log in to Grackle</h2>
      <input id="login-email" class="login-input" type="text" name="" placeholder="email">
      <input id="password" class="login-input" type="password" name="" placeholder="password">
      <button class="login-btn" type="button" name="log-in">Log In</button>
      <p class="login-pswd">Forgot Password * Sign up for Grackle</p>
    </div>
    `);

  //Assign any event listeners
$($html).find('.login-btn').on('click', (e) => {
  // if (action.email === '' || action.password === '') {
  //     alert('Complete Form')
  // } else {
  store.dispatch(logAndLoad('joebumbulis@gmail.com', 'password'));
});

  //Return the html
  return $html;
}
