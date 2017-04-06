export default function exampleView(store) {
  let state = store.getState();

  //Create the HTML
  let $html = $(`
    <div class="login-screen">
      <img class="grackle-img" src="app/images/Grackles_001.png" alt="">
      <h2>Log in to Grackle</h2>
      <input class="login-input" type="text" name="" placeholder="email">
      <input class="login-input" type="password" name="" placeholder="password">
      <button class="login-btn" type="button" name="log-in">Log In</button>
      <p class="login-pswd">Forgot Password * Sign up for Grackle</p>
    </div>
    `);

  //Assign any event listeners


  //Return the html
  return $html;
}
