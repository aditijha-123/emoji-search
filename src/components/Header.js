import { useState } from "react"
import * as emoji from 'node-emoji'

const Header = () => {
    const [searchEmogi,setSearchEmogi] = useState('')
    const [searchresults,setsearchResults] = useState([])

    const change=(e)=>{
    console.log(e.target.value)
     setSearchEmogi(e.target.value)
     const results = emoji.search(e.target.value);
     console.log(results)
     setsearchResults(results);

    }
   
  return (
    <div>
    <div className=" flex justify-center w-full border-4 p-4 justify-evenly bg-sky-200 font-bold">
     <div className="component-header">
    <img
      src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
      width="32"
      height="32"
      alt=""
    />
    </div>
    <div className="heading ">Emoji Search</div>
    <div>
    <img
      src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
      width="32"
      height="32"
      alt=""
    />
  </div>
  </div>
<form className="userinput  ">
<input className="w-full h-16 pl-4 " type="text" name="searchEmogi" id="searchEmogi" value={searchEmogi} onChange={change} placeholder="searchEmogi" />
</form>
<div>
 {searchresults.map(item => (
    // Use a unique key for each item
    
     <div key={item.id}>
     <p className="text-4xl ">{item.emoji}</p>
      
     </div>
    )
  )
    }
</div>
</div>
  
  )
}

export default Header