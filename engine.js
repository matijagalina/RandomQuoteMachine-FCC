$(document).ready(function () {
    const quote = $('#quote');
    const quoteButton = $('#quote-btn');
    const twitterButton = $('#twitter');

    quoteButton.on('click', function () {
        quote.html("");
        $.ajax({
            url: 'https://random-quote-generator.herokuapp.com/api/quotes/random',
            type: 'GET',
            dataType: 'json',
            success(response) {
                let text = $('<p id="text"></p>').appendTo(quote);
                let author = $('<p id="author"></p>').appendTo(quote);
                text.text(response.quote);
                author.text(response.author);
            }
        });
        twitterButton.click(function () {
            let textToTweet = $('#text').text();
            let authorToTweet = $('#author').text();
            window.open('https://twitter.com/intent/tweet?&text=' + encodeURIComponent('"' + textToTweet + '"  ' + authorToTweet), 'Share', 'width=700, height=400');
        });
    });
});