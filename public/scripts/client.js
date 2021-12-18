/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


const createTweetElement = tweetObj => {
  //responsible for returning a tweet <article>
  //Must contain entire HTML structure of the tweet
  const newTweet =
  `
  <article>
    <header class="tweet-head">
      <div>
        <img src=${tweetObj.user.avatars}/>
        <span>${tweetObj.user.name}</span>
      </div>
      <div>
        <span>${tweetObj.user.handle}</span>
      </div>
    </header>
    <div>
      <span>${escape(tweetObj.content.text)}</span>
    </div>
    <footer class="tweet-foot">
      <div>
        <span>${timeago.format(tweetObj.created_at)}</span>
      </div>
      <div class="tweet-reactions"> 
        <span><i class="fas fa-flag"></i> <i class="fas fa-retweet"></i> <i class="fas fa-heart"></i></span>
      </div>
    </footer>
  </article>
  `;
  return newTweet;
};


const renderTweets = function(tweets) {
  //Need to prepend (to see latest tweets first) to .tweets-container
  for (let obj of tweets) {
    $('.tweet-container').prepend(createTweetElement(obj));
  }
};

renderTweets(data);


