import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const DroughtNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const API_KEY = 'a6900fb7-10a0-4f18-b106-37e6ab5811a8';
    const API_URL = `https://content.guardianapis.com/search?order-by=newest&q=india AND drought AND climate AND environment&api-key=${API_KEY}`;

    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setArticles(data.response.results);
        // console.log(data.response.results);
      })
      .catch(error => console.error(error));
  }, []);
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

          <div className="news-container">

            {articles.map((article, index) => (
              <div className="news-card" key={index}>
                <div className="news-card-header">
                  <h4>{article.webTitle}</h4>
                  {/* <span className="news-tag">{article.sectionName}</span> */}
                  <div className="news__info">
                    <br />
                    {/* <p>Published on: {new Date(article.webPublicationDate).toLocaleDateString()}</p> */}
                    <button className='read-more-btn'>
                      <a href={article.webUrl} target={'_blank'}>Read more..</a>

                    </button>


                  </div>
                </div>

              </div>
            ))}


          </div>


        </div>



      </div>
    </div>
  )
}

export default DroughtNews
