// import React, { useEffect, useState } from 'react'
// import "./head.css"
// import Elements from './Elements';
// import axios from 'axios';
// import Navbar from './Navbar';


// const Sidebar = () => {


//   const[headlines,setheadlines] = useState([])
//   const [error,seterror] = useState(null)
//   const key = "122bad685c3e4886b18ec59ae66d4b50"


//   const [currentheadline,setcurrentheadline] = useState(0)
//   const changeheadline = (position) =>{
//     const changeindex = (currentheadline + position + headlines.length) % headlines.length
//     setcurrentheadline(changeindex)
//   }

//   useEffect(() =>{
//     const fetchData = async() => {
//       try{
               
//         const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`)
//         setheadlines(response.data.articles)
//         console.log(response)
    
//       }catch (error) {
//         seterror(error)

//       }}
//       fetchData()
      
  

//   },[])



//     // const fetchdata = async () =>{
//     //   try{
//     //     const response = axios('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=122bad685c3e4886b18ec59ae66d4b50')
//     //     setheadlines(response.data.articles)
//     //     console.log(response)
//     //   }
//     // }

  



//   const box1 = (
//     <div className='side'>
//     {/* <Navbar /><h3>Top headlines in india</h3> */}
//       <div className='sidediv'>
//         {headlines.map((headline, index) => (
//           <div
//             key={headline.id}
//             style={{
//               display: index === currentheadline ? 'block' : 'none'
//             }}
//           >
//             <Elements
//               title={headline.title}
//               description={headline.description}
//               url={headline.url}
//               urlToImage={headline.urlToImage}
//               published={headline.publishedAt}
//               source={headline.source.name}
//               id={headline.id}
              
//             />              

//           </div>
//         ))}
//         <button className='backhead' onClick={() => changeheadline(-1)}></button>
//         <button className='nexthead' onClick={() => changeheadline(1)}></button>
//       </div></div>
// )

// const clonedbox1 = (
//   <div className='box2'>
//   <h3>Top headlines in </h3>
//     <div className='box2sidediv'>
//       {headlines.map((headline, index) => (
//         <div
//           key={headline.id}
//           style={{
//             display: index === currentheadline ? 'block' : 'none'
//           }}
//         >
//           <Elements
//             title={headline.title}
//             description={headline.description}
//             url={headline.url}
//             urlToImage={headline.urlToImage}
//             published={headline.publishedAt}
//             source={headline.source.name}
//             id={headline.id}
            
//           />              

//         </div>
//       ))}
//       <button className='backhead' onClick={() => changeheadline(-1)}></button>
//       <button className='nexthead' onClick={() => changeheadline(1)}></button>
//     </div></div>
// )



//   return (
//     <div>
//       {box1}
//       {clonedbox1}
//     </div>
//       );
// };
// export default Sidebar

import React, { useEffect, useState } from 'react';
import "./head.css";
import Elements from './Elements';
import axios from 'axios';
import Navbar from './Navbar';

const Sidebar = () => {
  const [headlinesBox1, setHeadlinesBox1] = useState([]);
  const [headlinesCloned, setHeadlinesCloned] = useState([]);
  const [error, setError] = useState(null);
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const key = "122bad685c3e4886b18ec59ae66d4b50"

  const changeHeadline = (position, setData) => {
    const changeIndex = (currentHeadline + position + setData.length) % setData.length;
    setCurrentHeadline(changeIndex);
  }

  const fetchData = async (url, setData) => {
    try {
      const response = await axios.get(url);
      setData(response.data.articles);
    } catch (error) {       
      setError(error);
    }
  }

  useEffect(() => {
    const box1Url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`
    const clonedBox1Url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`

    fetchData(box1Url, setHeadlinesBox1);
    fetchData(clonedBox1Url, setHeadlinesCloned);
  }, []);

  const renderElements = (data) => (
    <div className='sidediv'>
      {data.map((headline, index) => (
        <div
          key={headline.id}
          style={{
            display: index === currentHeadline ? 'block' : 'none',
          }}
        >
          <Elements
            title={headline.title}
            description={headline.description}
            url={headline.url}
            urlToImage={headline.urlToImage}
            published={headline.publishedAt}
            source={headline.source.name}
            id={headline.id}
          />
        </div>
      ))}
      <button className='backhead' onClick={() => changeHeadline(-1, data)}></button>
      <button className='nexthead' onClick={() => changeHeadline(1, data)}></button>
    </div>
  );

  return (
    <div>
      <div className='side'>
        <Navbar /><h3>Top headlines in india</h3>
        {renderElements(headlinesBox1)}
      </div>

      <div className='box2'>
        <h3>Top headlines in </h3>
        {renderElements(headlinesCloned)}
      </div>
    </div>
  );
};

export default Sidebar;
