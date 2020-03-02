$(document).ready(function() {

  $('.submit-tweet').submit(function(event) {
    event.preventDefault();
    console.log('Button Clicked, Ajaxing...');

    const $textLength = $(this).serialize().replace(/%20/g, ' ').length;

    if ($textLength > 145) {

      $('section').addClass('scroll-out');
      $('#tweet-container').addClass('scroll-out');
      $('.error2').slideDown().removeClass('hidden');
      $('.submit-tweet').keydown(function() {

        $('.error2').slideUp().addClass('hidden');
      });

    } else if ($textLength < 6) {
      $('section').addClass('scroll-out');
      $('#tweet-container').addClass('scroll-out');
      $('.error1').slideDown().removeClass('hidden');
      $('.submit-tweet').keypress(function() {
        $('.error1').slideUp().addClass('hidden');
      });

    } else {
      $('.error1').addClass('hidden');
      $('.error2').addClass('hidden');

      const $text = $(this).serialize();
      $('submit-tweet').text($text);

      $.ajax({
        url: '/tweets',
        type: 'POST',
        data: $text
      }).then(function(result) {
        console.log('Successfully Ajaxed!');
        loadTweets();
        document.getElementsByClassName('submit-tweet')[0].reset();
        document.getElementsByClassName('counter')[0].textContent = 140;
      });
    }
  });

  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      type: 'GET',
      data: 'json'
    }).then(function(result) {
      renderTweets(result);
    });
  };

  const createTweetElement = function(tweetData) {
    let currentDate = Date.now();
    let $tweet = `
     <article class="tweet">
    <header>
      <div class="tweet-user">
      <img src="${tweetData.user.avatars}">
        <h3>${tweetData.user.name}</h3>
      </div>
      <h5>${tweetData.user.handle}</h5>
    </header>
  <p>${escape(tweetData.content.text)}</p>
      
      <footer>
        <h6> ${Math.floor((currentDate - tweetData.created_at) / 86400000)} days ago</h6>
        <div class="icons">
          <i class="fas fa-flag fa-xs"></i>
          <i class="fas fa-retweet fa-xs"></i>
          <i class="fas fa-heart fa-xs"></i>
        </div>
      </footer>
   </article>
    `;

    return $tweet;
  };

  const renderTweets = function(tweets) {
    $('#tweet-container').empty();

    for (let tweetData of tweets) {

      const $tweet = createTweetElement(tweetData);
      $('#tweet-container').prepend($tweet);

    }
  };

  const escape = function(str) {

    let paragraph = document.createElement('p');
    paragraph.appendChild(document.createTextNode(str));
    return paragraph.innerHTML;

  };
});
