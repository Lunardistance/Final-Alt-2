// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'

var quoteTxt = document.querySelector(".quote-text")
var quoteAuth = document.querySelector(".quote-author")
var getNew = document.querySelector(".getnewquote")



function getQuote() {
    $.ajax({
        url: API_URL,
        dataType: 'json',
        success: function (data) {
            console.log(data)
            quoteTxt.textContent=data.quoteText
            quoteAuth.textContent=data.quoteAuthor
            getNew.textContent.innerHTML
            
    
        },

        error: function (error) {
            console.log("")
        }
    })

}

getNew.addEventListener('click', function (data) {
    getQuote()
    
    
    
})


console.log("To be thoughtful and kind only takes a few seconds… to the timeless hurt caused by one rude gesture.")
console.log("Byron Pulsifer")
