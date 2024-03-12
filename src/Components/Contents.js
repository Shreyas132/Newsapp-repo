import { useState,useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import Elements from './Elements'
import "./Styling.css"


const Contents = () => {
    const [articles,setArticles] = useState([])
    const key = "122bad685c3e4886b18ec59ae66d4b50"
    // const topic = (btn)=>{
    //     btn = 

    // }
    useEffect(()=>{
        const getData = async() => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=politics&apiKey=${key}`)
             setArticles(response.data.articles)
             console.log(response)

        }
        // const getData1 = async() => {
        //     const response = await axios.get(`https://newsapi.org/v2/everything?q=sports&apiKey=${key}`)
        //      setArticles(response.data.articles)
        //      console.log(response)

        // }

        getData()
    },[])
  return (
    <div>
        { articles.map (article =>{
            return(
                <Elements 
                title = {article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
                />
            )
        })}
    </div>
  )
}

export default Contents