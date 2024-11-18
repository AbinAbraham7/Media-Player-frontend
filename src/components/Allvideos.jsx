import React, { useContext, useEffect, useState } from 'react'
import Videocard from './Videocard'
import { addVideoToCategoryApi, getVideosApi } from '../services/allApi'
import { categoryStatusContext } from '../context/Contextshare'


    
function Allvideos({addvideo}) {

  const [deleteAllVideos,setdeleteAllVideos]=useState({})

  const [allvideos,setallvideos]=useState([])

  const {setCategoryStatus}=useContext(categoryStatusContext)
  const getAllvideos=async()=>{
    const result=await getVideosApi()
    setallvideos(result.data)
  }

  console.log(allvideos);

  const ondrop=(e)=>{
    e.preventDefault()
  }
  const videoDrop=async(e)=>{
    const {category,video}=JSON.parse(e.dataTransfer.getData('dataShare'))
    console.log(category,video);
    const newArray=category.Allvideos.filter((item)=>item.id!=video.id)
    const newCategory={
      Category:category.Category,
      Allvideos:newArray,
      id:category.id

    }
    const result=await addVideoToCategoryApi(category.id,newCategory)
    console.log(result.data);
    if(result.status>=200 && result.status>300)
    {
      setCategoryStatus(result.data);
      
    }
  }
  useEffect(()=>{getAllvideos()},[addvideo,deleteAllVideos])
  return (
  
  <>
  <div droppable onDragOver={(e)=>ondrop(e)} onDrop={(e)=>videoDrop(e)}>
  <h4>All Videos</h4>
  { allvideos.length>0?
  <div className="container-fluid">
    <div className="row w-100">
        { allvideos.map((item)=>(
          <div className="col-md-3 p-md-2">
          <Videocard video={item} setdeleteAllVideos={setdeleteAllVideos}/>
      </div>

        ))
          }
        
    </div>
  </div>

      :
  <div className="container mt-3">
    <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <img src="https://tse3.mm.bing.net/th?id=OIP.tr-g8hu0-qTz2Wzk8QDAOAHaFX&pid=Api&P=0&h=180" alt="" className='w-100' />
            <h5 className='text-warning text-center'>No video added yet.</h5>
        </div>
        <div className="col-md-4"></div>
    </div>
  </div>}

  </div>
  </>
  )
}

export default Allvideos