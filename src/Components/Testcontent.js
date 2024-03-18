import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Elements from './Elements';
import "./Styling.css";
// import "./alternatestyle.css"
import Navbar from './Navbar';
// import Sidebar from './Sidebar';


const Testcontent = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 6
    const key = "122bad685c3e4886b18ec59ae66d4b50"

    useEffect(() => {
        getData("car")
    }, []);
    const getData = async (category) => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${category}&apiKey=${key}`);
            setArticles(response.data.articles);
            console.log(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    const currentContents = articles.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <Navbar click={getData}/>
            {/* <Sidebar /> */}

            <ul className='maincontent'>
                {currentContents.map((article, index) => (
                    <Elements key={index} title={article.title}
                    description={article.description}
                    url={article.url}
                    urlToImage={article.urlToImage}
                    published={article.publishedAt}
                    source={article.source.name}
     />
                ))}
            </ul>

            <div className='prevnext'>
                <button className='prev' disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                <span className="arrow">&lt;</span>
                    
                </button>
                <span style={{color:'green',margin:'20px 5px 0px 5px'}}> Page no: {`${currentPage}`}</span>
                <button  className="next"disabled={endIndex >= articles.length} onClick={() => handlePageChange(currentPage + 1)}>
                <span className="arrow">&gt;</span>
                    
                </button>
            </div>
        </div>
    );
};


export default Testcontent