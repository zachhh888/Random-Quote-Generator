const spinner = document.querySelector('#js-spinner');
const generatenewQuote = document.querySelector('.generate-new-quote');
const tweetIt = document.querySelector('.tweet-it');

generatenewQuote.addEventListener('click', getrandomQuote);
getrandomQuote();

//opens twitter in spearate window to create public post 
function twitterPost (url) {
    window.open(url,'_blank');
};

//fetches quote from trump quote API
function getrandomQuote () {
   generatenewQuote.disabled = true;
    $.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data, status){
document.querySelector('.random-quote').textContent = `${data.message}`;
var url = `https://twitter.com/share?text=${data.message} - Donald Trump`;
tweetIt.onclick = function() {
    twitterPost(url);
};

console.log(data.message);
});
generatenewQuote.disabled = false;
};

