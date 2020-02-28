// import { json } from "body-parser";

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const createTweetElement = function(tweetData) {
  
  
    const $tweet = `
     <article class="tweet">
    <header>
      <div class="tweet-user">
      <img src="${tweetData.user.avatars}">
        <h3>${tweetData.user.name}</h3>
      </div>
      <h5>${tweetData.user.handle}</h5>
    </header>
  <p>${tweetData.content.text}</p>
      <footer>
        <h6>${tweetData.created_at}</h6>
        <div class="icons">
          <i class="fas fa-flag fa-xs"></i>
          <i class="fas fa-retweet fa-xs"></i>
          <i class="fas fa-heart fa-xs"></i>
        </div>
      </footer>
   </article>
    `;
    console.log($tweet);
    return $tweet;
  }
  const tweetData = 
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }
  
  const $tweet = createTweetElement(tweetData);
  
  console.log($tweet);
  
  
  $('#tweet-container').append($tweet);
});
