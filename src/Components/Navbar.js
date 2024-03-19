// import React from 'react';
// import "./Nav.css";

// const Navbar = ( { click } ) => {
//   const handleclick = (category)=>{
//     click(category)
//     const Selected = (e) =>{
//       const selectedItem = e.target.value
//       handleclick(selectedItem)
//     }
  

//   }
  
//   return (
//       <nav className="nav" >
//         <div className='logo'>The News</div>
//             <ul className='items'>
//                 <li><a className="link" >Home</a> </li>
//                 <li><a className="link" onClick={()=> handleclick("Technology")}>Technology</a> </li>
//                 <li><a className="link" onClick={()=> handleclick("Sports")}>Sports</a> </li>
//                 <li><a className="link" onClick={()=> handleclick("politics")}>Politics</a> </li>
//                 <li><a className="link" onClick={()=> handleclick("Finance")}>Financial</a> </li>
//                 <li><a className="link" onClick={()=> handleclick("Autmobile")}>Automobile</a> </li>

//                 <label for="category" >News Category</label>
//                 <select id='category' name='categories' onChange={(e) => Selected(e)} >
//                   <option value="Movies">Movies</option>
//                   <option value="Music" >Music</option>
//                   <option value="Economy" >Economy</option>
//                   <option value="Trading" >Trading</option>
//                   <option value="Crime" >Crime</option>
//                   <option value="election">Election</option>
//                   <option value="World">World</option>

//                 </select>
//             </ul>
//             <div className='search'>
//               <input className="txt" type="text" placeholder='Search here'></input>
//               <button className='find'>Search</button>
              
//             </div>
//       </nav>
      
//   )
// }
import React, { useState } from 'react';
import "./Nav.css";
import { ReactComponent as Searchicon } from 'bootstrap-icons/icons/search.svg';
import l from "./l.png"

const Navbar = ({ click }) => {
  const [search,setSearch]=useState('')

  const [expand,setExpand] = useState([])

  const [changed,setchanged]=useState(false)

  const [visible,setvisible] = useState(true)

  const [selectedcategory,setselectedcategory] = useState()
  const toggleMenu = ()=>{
      setvisible(!visible)

  }
  // const togglesubmenu = (item) => {
  //   setExpand((prevExpand) => {
  //     if (prevExpand.includes(item)) {
  //       return prevExpand.filter((i) => i!== item);
  //     } else {
  //       return [...prevExpand, item];
  //     }
  //   });
  // }

  const togglesubmenu = (item) =>{
    if(expand.includes(item)){
      setExpand(expand.filter((i) => i !== item))
    }
    else{
      setExpand([...expand,item])
    }
  }

  const hover =() =>{
    setchanged(!changed)

  }

  const handleclick = (category) => {
    setselectedcategory(category)
    click(category);
  };
  const searchfeature=(e)=>{
    setSearch(e.target.value)
  }
  const addsearch=()=>{
    handleclick(search)
    
    
  }
  

  return (
    <nav className="nav">
      <div className='logo'>
        <img src={l} alt=""/>
      </div>
      <ul className='items'>
        <li><button className="link" >Home </button> </li>
        <li><button className={selectedcategory === 'Technology' ? 'link active' : 'link' } onClick={() => handleclick("Technology")}>Technology</button> </li>
        <li><button className={selectedcategory === 'Sports' ? 'link active' : 'link' } onClick={() => handleclick("Sports")}>Sports</button> </li>
        <li><button className={selectedcategory === 'politics' ? 'link active' : 'link' } onClick={() => handleclick("politics")}>Politics</button> </li>
        <li><button className={selectedcategory === 'Finance' ? 'link active' : 'link' } onClick={() => handleclick("Finance")}>Financial</button> </li>
        <li><button className={selectedcategory === 'Automobile' ? 'link active' : 'link' } onClick={() => handleclick("Automobile")}>Automobile</button> </li>

          <ul className='drop'>
            <li className="nav-item dropdown"> {/* Add 'dropdown' class */}
                    <button className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      More
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><button  className="dropdown-item" onClick={() => handleclick("Movies")}>Movies</button></li>
                      <li><button  className="dropdown-item" onClick={() => handleclick("Music")}>Music</button></li>
                      <li><button  className="dropdown-item" onClick={() => handleclick("Crime")}>Crime</button></li>
                      <li><button className="dropdown-item" onClick={() => handleclick("Economy")}>Economy</button></li>
                      <li><button  className="dropdown-item" onClick={() => handleclick("Trading")}>Trading</button></li>
                      <li><button  className="dropdown-item" onClick={() => handleclick("World")}>World</button></li>
                      <li><button  className="dropdown-item" onClick={() => handleclick("India")}>India</button></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><button  className='dropdown-item'></button>About us</li>
                    </ul>
            </li>

        </ul>
      </ul>
      <div className='search'>
        <input className="txt" type="text" value={search} placeholder='Search here' onChange={(e)=>searchfeature(e)}></input>
        {/* <button className='find' onClick={addsearch}></button> */}
        <i className='bi bi-search' onClick={addsearch}>
          <Searchicon />
        </i>
      </div>
      <div className={`hamburger ${visible ? 'cansee' : ''}`} onClick={toggleMenu}>
      <div className={`container ${changed ? 'change' : " "}`} onClick={hover}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>

      </div>

      <div id='submenu' style={{
        display: visible ? 'none' : 'block',
        cursor:'pointer',
        position:'absolute',
        listStyle:'none',
        color:'black'
        // position: "absolute"
        }}>

          <div className='submenu'>
            <ul className='subview'>
              <li onClick={()=> togglesubmenu('sub1')}>
                      <li><button  className="dropdown-item" onClick={() => handleclick("Movies")}>Movies</button></li>
                      <li><hr className="dropdown-divider" style={{color:"red"}}/></li>
                      <li><button className='dropdown-item'></button>About us</li>    
                      <li>Help</li>
              </li>
            </ul>
          </div>
      </div>

      </div>
    </nav>
  );
}

export default Navbar;


