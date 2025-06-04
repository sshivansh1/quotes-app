import { useState } from "react"
const QuotesApp = () => {
    const [quote, setQuote] = useState({text: "Soon 150k", author: "Shivansh"})

    const fetchNewQuote = async () => {
        const url = 'http://api.quotable.io/random'
        const response = await fetch(url)
        if (!response.ok) throw new Error('Failed to fetch');
        const responseData = await response.json()
        console.log(responseData)
        setQuote({
            text: responseData.content,
            author: responseData.author
        })
    }

    return <div className="container">
        <div className="quotes-app">
            <h1 className="app-heading">Quotes.</h1>
            <i className="bx bxs-heart fav-icon"></i>
            <div className="quote">
                <i className="bx bxs-quote-alt-left left-quote"></i>
                <p className="quote-text">{quote.text}</p>
                <p className="quote-author">{quote.author}</p>
                <i className="bx bxs-quote-alt-right right-quote"></i>
            </div>
            <div className="circles">
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
                <div className="circle-4"></div>
            </div>

            <div className="buttons">
                <button className="btn btn-new-quote" onClick={fetchNewQuote}>New Quote</button>
                <button className="btn btn-favorite">Add to Favorites</button>
            </div>
            <div className="favorites">
                <button className="btn-close">
                    <i className="bx bx-x"></i>
                </button>
                <div className="fav-quote">
                    <div className="fav-quote-delete">
                        <i className="bx bx-x-circle"></i>
                    </div>
                    <div className="fav-quote-text">HI! I am in the favorite</div>
                    <div className="fav-quote-author">Shivansh</div>
                </div>
            </div>
        </div>
    </div>
}

export default QuotesApp 