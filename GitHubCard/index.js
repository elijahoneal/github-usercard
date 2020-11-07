import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/elijahoneal')
.then(res => {
   
    let newCard = document.querySelector('.cards');
    let userCard = gitCardMaker(res.data);
    newCard.appendChild(userCard);
    
    return newCard;
  
  })
.catch(err => err)
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
const gitCardMaker = (data) => {
  // div class card
  let card = document.createElement('div');
  card.classList.add('card');

// user img
  let img = document.createElement('img');
  img.setAttribute('src', data.avatar_url );

  // div class card-info
  let cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  // h3 name
  let h3 = document.createElement('h3');
  h3.classList.add('name');
  h3.textContent = data.name
  // p username
  let p = document.createElement('p');
  p.classList.add('username');
  p.textContent = data.login;
  // p location
  let location = document.createElement('p');
  location.textContent = `Location: ${data.location}`;
  let profile = document.createElement('p');
  // profile link
  let link = document.createElement('a');
  link.setAttribute( 'href', data.html_url);
  link.textContent = data.html_url;
  // link within profile
  profile.textContent = ` Profile: ${link}`;
  profile.appendChild(link);
  // p follower
  let followers = document.createElement('p');
  followers.textContent = `Followers: ${data.followers}`;
  // p following
  let following = document.createElement('p');
  following.textContent = `Followers: ${data.following}`;
  //  p bio
  let bio = document.createElement('p');
  bio.textContent = data.bio;
// append child elements
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(p);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  
  return card
} 



/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];
followersArray.push('tetondan', 'dustinmyers', 'justsml', 'luishrd' , 'bigknell')

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
followersArray.forEach( user => {
  console.log(user);
})
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
