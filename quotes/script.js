
function generate() {
    // create a mapping for quotes and their authors
    const quotes = {
        "Nelson Mandela": '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        "Walt Disney": '"The way to get started is to quit talking and begin doing."',
        "Steve Jobs": '"Your time is limited, so don\'t waste it living someone else\'s life."',
        "Eleanor Roosevelt": '"If life were predictable it would cease to be life, and be without flavor."',
        "John Lennon": '"Life is what happens when you\'re busy making other plans."'
    }

    // get a random quote
    const authors = Object.keys(quotes);
    const author = authors[Math.floor(Math.random() * authors.length)];
    const quote = quotes[author];

    // display the quote
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}
