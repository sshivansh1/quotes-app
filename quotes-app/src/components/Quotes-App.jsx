const QuotesApp = () => {
    return <div className="container">
        <div className="quotes-app">
            <h1 className="app-heading">Quotes.</h1>
            <i className="bx bxs-heart fav-icon"></i>
            <div className="quote">
                <i className="bx bxs-quote-alt-left left-quote"></i>
                <p className="quote-text">Soon 150k</p>
                <p className="quote-author">Shivansh</p>
                <i className="bx bxs-quote-alt-right right-quote"></i>
            </div>
            <div className="circles">
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
                <div className="circle-4"></div>
            </div>

            <div className="buttons">
                <button className="btn btn-new-quote">New Quote</button>
                <button className="btn btn-favorite">Add to Favorites</button>
            </div>
        </div>
    </div>
}

export default QuotesApp 