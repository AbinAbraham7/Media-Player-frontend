import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddVideo}) {

  const [VideoDetails,setvideoDetials]=useState(
    {
      caption:"",
      imageUrl:"",
      embedLink:""
    }
  )

    const [show, setShow] = useState(false);
    console.log(VideoDetails);

    const handleClose = () => {
      setShow(false);
      handleCancel()
    
    }
    const handleShow = () => setShow(true);

   /*const getEmbedLink=(e)=>{
      const link=e.target.value
     if(link.startsWith('https://www.youtube.com/'))
     {
       const embedL=`https://www.youtube.com/embed/${link.slice(32)}`
        setvideoDetials({...VideoDetails,embedLink:embedL})
     }
     else{

     const embedL=`https://www.youtube.com/embed/${link.slice(17)}`
        setvideoDetials({...VideoDetails,embedLink:embedL})
     }
    }
    */
  //https://www.youtube.com/watch?v=cxKAtmvf-uM&list=RDcxKAtmvf-uM&start_radio=1
  //https://youtu.be/cxKAtmvf-uM?si=ue5-08NzqGf3oofg
  //https://youtu.be/f_OZkQV0LHQ?si=hAiDGgofU_juqD1j

  const handleCancel=()=>{
    setvideoDetials({
      caption:"",
      imageUrl:"",
      embedLink:""
    })
  }

  const handleAdd=async()=>{
    const {caption,imageUrl,embedLink}=VideoDetails

    if(!caption || !imageUrl || !embedLink){
        toast.info('please fill the form correctly')
    }
    else{
      if(VideoDetails.embedLink.startsWith('https://www.youtube.com/'))
     {
       const embedL=`https://www.youtube.com/embed/${VideoDetails.embedLink.slice(32)}`
       // setvideoDetials({...VideoDetails,embedLink:embedL})

        console.log(VideoDetails);
        const result=await AddVideoApi({...VideoDetails,embedLink:embedL})
        console.log(result);
        if(result.status>=200 && result.status<300)
        {
          toast.success('Video uploaded Sucessfully')
          handleClose()
          setAddVideo(result.data)
        }
        else{
          toast.error('Something went wrong')
          handleClose()
        }
     }
     else{

     const embedL=`https://www.youtube.com/embed/${VideoDetails.embedLink.slice(17)}`
        //setvideoDetials({...VideoDetails,embedLink:embedL})

        console.log(VideoDetails);
        const result=await AddVideoApi({...VideoDetails,embedLink:embedL})
        console.log(result);
        if(result.status>=200 && result.status<300)
        {
          toast.success('Video Added Sucessfully')
          handleClose()
          setAddVideo(result.data)
        }
        else{
          toast.error('Something went wrong')
          handleClose()
        }
    }


    
    
     }
   
   
  }
  return (
    <>
    <div className="d-flex align-items-center">
        <h5> <span className='d-none d-md-inline'>Upload New Video</span></h5>
        <button className='btn pb-3' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} className='fa-2x'/></button>
    </div>

    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm}  className='me-2'/>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h6>Please fill the following details</h6>
            <form className='p-3 border border-dark rounded mt-3'>
                <div className="mb-3">
                    <input type="text" className="form-control" value={VideoDetails.caption} placeholder='Video Caption' onChange={(e)=>setvideoDetials({...VideoDetails, caption:e.target.value})} />
                </div>
                <div className="mb-3">
                <input type="text" className="form-control" value={VideoDetails.imageUrl} placeholder='Video Image' onChange={(e)=>setvideoDetials({...VideoDetails, imageUrl:e.target.value})} />
                </div>
                <div className="mb-3">
                <input type="text" className="form-control" value={VideoDetails.embedLink} placeholder='Video URL' onChange={(e)=>setvideoDetials({...VideoDetails,embedLink:e.target.value})}/>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button  variant="warning" type='button' onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer  position='top-center' theme="colored" autoClose={2000}/>
    </>
  )
}

export default Add