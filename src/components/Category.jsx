
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Videocard from './Videocard';
import { addVideoToCategoryApi, addcategoryApi, deleteCategoryApi, getAllCategoryApi } from '../services/allApi';
import { toast } from 'react-toastify';
import { categoryStatusContext } from '../context/Contextshare';

function Category({}) {


  const [videoCategoryStatus,setvideoCategoryStatus]=useState({})
  const [deleteCategoryStatus,setdeleteCategoryStatus]=useState({})
  const [addCategoryStatus,setaddCategoryStatus]=useState({})
  const [allCategory,setallCategory]=useState([])
  const [videoCategory,setvideoCategory]=useState("")
  const [show, setShow] = useState(false);

  const {categoriesStatus}=useContext(categoryStatusContext)
  console.log(videoCategory);
  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  const handleCancel=()=>{
    setvideoCategory("")
  }
  const handleAdd=async()=>{
    if(videoCategory)
    {
      const reqBody={
        Category:videoCategory,
        Allvideos:[]
      }
      const result=await addcategoryApi(reqBody)
      console.log(result);
      if(result.status>=200 && result.status<300)
      {
        toast.success('Category Added Successfully')
        setvideoCategoryStatus(result.data)
       
        handleClose()
      }
      else{
        toast.error("Something Went Wrong")
        handleClose()
      }
    }
    else{
      toast.info('Please Add a Category Name')
    }
  }

  const getCategory=async()=>{
    const result=await getAllCategoryApi()
    setallCategory(result.data);
    console.log(allCategory);
  }

  const handleDelete=async(id)=>{
    const result=await deleteCategoryApi(id)
    console.log(result);
    if(result.status>=200 && result.status<300)
    {
      setdeleteCategoryStatus(result.data)
    }
  }
  const ondrag=(e)=>{
    e.preventDefault()//to prevent data loss

  }
 const videoDrop=async(e,categoryDetails)=>{
  console.log(categoryDetails);
  console.log(e)
  const videoDetails=JSON.parse(e.dataTransfer.getData("videoDetails"))
  console.log(videoDetails);
  if(categoryDetails.Allvideos.find((item)=>item.id==videoDetails.id))
  {
    toast.info('video already exist')
  }
  else{
    categoryDetails.Allvideos.push(videoDetails)
    console.log(categoryDetails);
  const result = await addVideoToCategoryApi(categoryDetails.id,categoryDetails)
  if(result.status>=200 && result.status<300)
  {
    toast.success('video added sucessfully')
    setaddCategoryStatus(result.data)
  }
  else{
    toast.error('something went wrong')
  }

  }
  }
  
 const videodrag=(e,video,category)=>{
  console.log(video)
  console.log(category)

  const dataShare={
    category,
    video
  }
  e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
 }
 console.log(categoriesStatus);
 useEffect(() => {
  console.log("Category updated. Fetching categories...");
  getCategory();
}, [allCategory, addCategoryStatus, deleteCategoryStatus, videoCategoryStatus]);

  return (
    <>
    <div >
      <h4 className='mb-3'>Category</h4>
    <button className='btn btn-warning w-100' onClick={handleShow}>Add Category</button>


    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border border-2 border-secondary rounded p-3'>
            <input type="text" className="form-control w-100" placeholder='Category name' 
            value={videoCategory} onChange={(e)=>{setvideoCategory(e.target.value)}}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>

    {allCategory?.length>0 &&
    allCategory.map((item)=>(
      <div className="border border-dark rounded mt-3 p-2 mb-2" droppable onDragOver={(e)=>ondrag(e)} onDrop={(e)=>videoDrop(e,item)}>
      <div className="d-flex justify-content-between mb-2">
        <h6>{item?.Category}</h6>
        <Button onClick={()=>handleDelete(item?.id)} variant="danger" style={{height:"35px",fontSize:"17px"}}><FontAwesomeIcon icon={faTrash} /></Button>
        
      </div>
      {item.Allvideos.length>0 &&
      item.Allvideos.map((video)=>(

        <div className='mb-4' draggable onDragStart={(e)=>videodrag(e,video,item)}>
          {<Videocard video={video} isPresent={true}/>}
          </div>
      )
    )
        }
      
    </div>

    ))
      }
   
    </div>
    </>
  )
}

export default Category