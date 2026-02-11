import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Gallery = () => {
    const [ userdata , setUserdata] = useState([])
    const [ page , setPage] = useState(1)


const GetData = async () => {
    const response = await  axios.get(`https://picsum.photos/v2/list?page=${page}&limit=18`);
    
    setUserdata(response.data)
}




useEffect(function(){

    GetData()

},[page])


let printUserData = <div className='w-full bg-black h-[120vh] flex justify-center items-center '>
   <h1 className= ''>LOADING...</h1>
</div>
if (userdata.length>0) {

    printUserData = userdata.map(function(elem , idx){
         
        return  <div key={idx} >
           <a href={elem.url}>
             <div className='h-60 w-60 bg-white rounded-xl overflow-hidden'>
            <img className='h-full object-cover' src={elem.download_url} alt="" />
        </div>
        <h1 className='font-bold text-lg '>{elem.author}</h1>
           </a>
        </div>
    })
    
}

  return (
    <div className='w-full  h-[150vh]  bg-black text-white overflow-y-hidden overflow-x-hidden  '>
     
        <h1 className='text-6xl flex justify-center items-center m-6 font-mono '>Gallery App</h1>
 
    <div className=' flex flex-wrap gap-4 h-[120vh] w-100%  justify-center items-center pt-8 overflow-y-hidden  overflow-x-hidden'>
     

        {printUserData}
       
    </div>


      <div className='flex justify-center items-center gap-10 mt-8 mb-8'>
       
    <button
   
     className='p-4 bg-amber-500 text-black font-bold rounded-2xl cursor-pointer active:scale-95  '
      onClick={()=>{
      if (page > 1) {
        setPage(page - 1)
        setUserdata ([])
        
      }
    }}
     >Prev</button>
     <p  className='text-3xl font-bold text-white'>
      Page: {page}

     </p>

    <button 
     className='p-4 bg-amber-500  text-black font-bold rounded-2xl cursor-pointer active:scale-95 '
     onClick={()=>{
      setPage(page + 1)
      setUserdata ([])

    }}
    >Next</button>
      
      </div>
    
    </div>
  )
}

export default Gallery
