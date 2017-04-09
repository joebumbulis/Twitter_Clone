export default function screechView(store) {
    let state = store.getState();
    // let screech = state.screech;
    // let user = state.user;
    // let screechesBody = state.screeches.body;

    //Create the HTML
    let $html = $(`
    <header class="primary-header">
        <a href="#"><i class="fa fa-home" aria-hidden="true"></i><h6 class="header-nav-words">Home</h6></a>
        <a href="#"><i class="fa fa-bolt" aria-hidden="true"></i><h6 class="header-nav-words">Moments</h6></a>
        <a href="#"><i class="fa fa-bell" aria-hidden="true"></i><h6 class="header-nav-words">Notications</h6></a>
        <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i><h6 class="header-nav-words">Messages</h6></a>

        <img class="grackle-img" src="app/images/Grackles_001.png" alt="">
        <input class="search-input" type="text" name="" placeholder="search grackle">
        <a href="#"><img class="header-profile-pic" src="https://pbs.twimg.com/profile_images/840251399304806403/__JeV4ux.jpg" alt="profile image"></a>
        <a href="#">
            <div class="header-screech-box">SCREECH</div>
        </a>
    </header>

    <div class="feed-body">
        <aside class="information-aside">
            <aside class="profile-column">
                <img src="" alt="profile-background">
                <img src="" alt="profile-pic">
                <h2><a href="#">${state.name}</a></h2>
                <h3><a href="#">${state.user}</a></h3>
                <h6>SCREECHES</h6>
                <h6>PLAGUING</h6>
                <h6>PLAGUERS</h6>

            </aside>
            <aside class="aside-column trending-column">
                <h3>Trends</h3>
                <h5><a href="#">Change</a></h5>
                <div>
                    <h6>#stealingchipsatMaudies</h6>
                    <h6>#BartonCreekMallgathering</h6>
                    <h6>#nightmaremakers</h6>
                    <h6>#austinlovestohateus</h6>
                </div>
            </aside>
            <aside class="aside-column who-to-follow-column">
                <h3>Who to follow</h3>
                <h5><a href="#">Refresh</a><a href="#">View all</a> </h5>
                <div class="profiles-in-column">
                    <img src="" alt="">
                    <h5></h5>
                    <h6>$</h6>
                    <button class="follow-btn" type="button" name="follow-button">FOLLOW</button>
                </div>
            </aside>
        </aside>

        <main class="screech-feed">
            <section class="post-screech-feed-top">
                <img src="https://pbs.twimg.com/profile_images/840251399304806403/__JeV4ux.jpg" alt="profile pic">
                <input type="text" name="" placeholder="What's Gracklin'?">
                <button type="button" name="screech-btn">Screech</button>
            </section>
            <div class="screech-container">

            </div>
        </main>
    </div>
    `);
var screechContainer = $html.find('.screech-container');

store.getState().screeches.forEach((screech)=>{
  console.log(screech);
    var screechLoaded = $(`
    <img src="https://pbs.twimg.com/profile_images/840251399304806403/__JeV4ux.jpg" alt="screecher-profile-pic">
    <h2 class="name"><a href="#">${screech.name}</a></h2>
    <h3 class="username"><a href="#">${screech.username}</a></h3>
    <div class="screech-body">${screech.body}</div>
    <a href="#"><i class="fa fa-reply" aria-hidden="true"></i></a>
    <a href="#"><i class="fa fa-retweet" aria-hidden="true"></i></a>
    <a href="#"><i class="fa fa-caret-up" aria-hidden="true"></i></a>
    <a href="#"><i class="fa fa-trash" aria-hidden="true"></i></a>
    `)
    screechContainer.after(screechLoaded)
})



    //Assign any event listeners
    $($html).find('.login-btn').on('click', (e) => {
        store.dispatch({

        })
    })

    //Return the html
    return $html;
}
