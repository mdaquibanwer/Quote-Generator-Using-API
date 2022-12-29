const btn = document.querySelector(".btn"); 
const quote = document.querySelector(".quote")
const quoteAuthor = document.querySelector(".quote-author")
const tweet = document.querySelector(".tweet");

// API URL
const URL = "https://type.fit/api/quotes"


// Event Listener On The Button
btn.addEventListener('click',()=>{
    getQuotes(URL);
})
//  Function Logic
const getQuotes = async (URL)=>{
    try {
        const Response = await fetch(URL)
        const data = await Response.json();
        let indexes = Math.floor(Math.random()*data.length);
        quote.innerHTML = data[indexes].text;
        (data[indexes].author === null) ? quoteAuthor.innerHTML = "unknown" : quoteAuthor.innerHTML = data[indexes].author
    } catch (error) {
        alert("Something Went Wrong");
    }
}

getQuotes(URL);