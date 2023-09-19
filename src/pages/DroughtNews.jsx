import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const DroughtNews = () => {
    const [data, setData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const API_KEY = 'AIzaSyBRbktbs7ZQ77segJ1HirU8VCqiW-9gG4k';
    const cx = '36fa7f7d493de4623';
    const query = 'India drought news';
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${cx}&q=${query}&start=${currentPage}`
            );
            const json = await res.json();
            setData(json);
            // console.log(json);
        };

        fetchData();
    }, [currentPage]);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 10);
    };

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 10);
    };

    return (
        <div>
            <Helmet>
                <title>Drought News | India Drought Monitor</title>
            </Helmet>
            <div className='main-container'>
                <div className="section-heading">
                    <h1>
                        Drought News
                    </h1>
                </div>
                <div className="section">


                    {data ? (
                        <div>
                            <div className="news-container">
                                {data.items.map(item => (
                                    <div className="news-card" key={item.link}>
                                        <img className="news-card-image" src={
                                            item.pagemap?.cse_image?.length > 0 &&
                                            item.pagemap?.cse_image[0]?.src
                                        } />
                                        <h3 className="news-card-header">{item.title}</h3>
                                        <p className="">{item.snippet}</p>
                                        <div className="news__info">
                                            <br />
                                            <button className='read-more-btn'>
                                                <a href={item.link} target={'_blank'} rel="noreferrer">Read more..</a>

                                            </button>


                                        </div>

                                    </div>
                                ))}
                            </div>
                            <div>
                                {currentPage > 1 && (
                                    <button className='news-pagination' onClick={handlePreviousPage}> &laquo; Previous</button>
                                )}
                                <button className='news-pagination' onClick={handleNextPage}>Next &raquo;</button>
                            </div>
                        </div>
                    ) : (
                        <h2 className="success-message">Searching Latest News...</h2>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DroughtNews