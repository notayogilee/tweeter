// import { json } from "body-parser";

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  $('.submit-tweet').submit(function (event) {
    event.preventDefault();
    console.log('Button Clicked, Ajaxing...');

    const $textLength = $(this).serialize().length;
    if ($textLength > 145) {
      alert('Please do not tweet more than 140 characters');
    } else if ($textLength < 6) {
      alert('Please enter a tweet');
    } else {
      const $text = $(this).serialize();
      const $form = $(this);

      $.ajax({
        url: '/tweets',
        type: 'POST',
        data: $text
      }).then(function (result) {
        console.log('Successfully Ajaxed!');
        loadTweets();
        document.getElementsByClassName('submit-tweet')[0].reset();
        document.getElementsByClassName('counter')[0].textContent = 140;
      })
    }
  });

  const loadTweets = function () {
    $.ajax({
      url: '/tweets',
      type: 'GET',
      data: 'json'
    }).then(function (result) {
      renderTweets(result);
    })
  }


  const createTweetElement = function (tweetData) {

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

    return $tweet;
  }

  const renderTweets = function (tweets) {
    for (let tweetData of tweets) {

      const $tweet = createTweetElement(tweetData);
      $('#tweet-container').append($tweet);
    }
  }

});
