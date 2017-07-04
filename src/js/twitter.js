function getTweet(hetemeel, userId) {
	twitterFetcher.fetch({
  		"id": userId,
		"maxTweets": 1,
		"enableLinks": true,
		"showPermalinks": false,
		"customCallback": handleTweets,
		"dataOnly": true
	});
	
	function handleTweets(tweets) {
		console.log(tweets);
	    // var element = document.getElementById(hetemeel);
	    // var html = '';
	    // html += '<strong class="footer-twitter-post-heading"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612"><path d="M612 116.258a250.714 250.714 0 0 1-72.088 19.772c25.93-15.527 45.777-40.155 55.184-69.41-24.322 14.378-51.17 24.82-79.775 30.48-22.9-24.438-55.49-39.66-91.63-39.66-69.33 0-125.55 56.218-125.55 125.514 0 9.828 1.11 19.427 3.25 28.606-104.32-5.24-196.83-55.223-258.75-131.174-10.82 18.51-16.98 40.078-16.98 63.1 0 43.56 22.19 81.994 55.84 104.48a125.556 125.556 0 0 1-56.87-15.756v1.568c0 60.806 43.29 111.554 100.7 123.104a127.12 127.12 0 0 1-33.08 4.398 120.5 120.5 0 0 1-23.63-2.333c15.99 49.907 62.34 86.2 117.26 87.194-42.94 33.66-97.1 53.66-155.91 53.66-10.13 0-20.11-.61-29.94-1.72 55.57 35.68 121.54 56.49 192.44 56.49 230.95 0 357.19-191.29 357.19-357.18l-.42-16.25c24.66-17.59 46-39.7 62.79-64.86z" fill="#010002"/></svg>' + tweets[0].author + 'posted:</strong>';
	    // html += '<p class="tweet">'+tweets[0].tweet+'</p>';
	    // element.innerHTML = html;
	    $('.avatar, .full-name').remove();
	}
}

