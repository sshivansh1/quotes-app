import { useState } from "react"
const QuotesApp = () => {
    const [quote, setQuote] = useState({text: "Soon 150k", author: "Shivansh"})
    const [showFavSection, setShowFavSection] = useState(false)
    const [favorites, setFavorites] = useState([])

    const fetchNewQuote = async () => {
        const url = 'http://api.quotable.io/random'
        const response = await fetch(url)
        if (!response.ok) throw new Error('Failed to fetch');
        const responseData = await response.json()
        setQuote({
            text: responseData.content,
            author: responseData.author
        })
    }

    const addToFavorites = () => {
        if (!favorites.some((fav) => fav.text === quote.text && fav.author === quote.author)) {
            setFavorites([...favorites, quote])
        }
    }

    return <div className="container">
        <div className="quotes-app">
            <h1 className="app-heading">Quotes.</h1>
            <i className="bx bxs-heart fav-icon" onClick = {()=>{setShowFavSection(prev => !prev)}}></i>
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
                <button className="btn btn-favorite" onClick = {addToFavorites}>Add to Favorites</button>
            </div>
           {showFavSection && (<div className="favorites">
                <button className="btn-close">
                    <i className="bx bx-x" onClick = {() => setShowFavSection(false)}></i>
                </button>
                {favorites.map((favQuote, index) =>(
                    <div className="fav-quote" key={index}>
                        <div className="fav-quote-delete">
                            <i className="bx bx-x-circle"
                            onClick={()=>{
                                const updatedFavorites = favorites.filter((item, i) => i !== index)
                                setFavorites(updatedFavorites)
                            }}></i>
                        </div>
                        <div className="fav-quote-text">{favQuote.text}</div>
                        <div className="fav-quote-author">{favQuote.author}</div>
                    </div>
            ))}
            </div>)}
        </div>
    </div>
}

export default QuotesApp 