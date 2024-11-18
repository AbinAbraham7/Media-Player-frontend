import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

import { addVideoHistoryApi, deleteVideoApi } from '../services/allApi';
import { height } from '@fortawesome/free-brands-svg-icons/faLinkedin';

function Videocard({video,setdeleteAllVideos,isPresent}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {  setShow(true);
    const time=new Date()
    let formateddate=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(time)
    const reqBody={
      caption:video?.caption,
      url:video?.embedLink,
      Timestamp:formateddate
    }
    const result=await addVideoHistoryApi(reqBody)
    console.log(result);
  }
    const handledelete=async(id)=>{
      const result=await deleteVideoApi(id)
      console.log(result);
      if(result.status>=200&&result.status<300)
      {
        setdeleteAllVideos(result.data)
      }
    }
   const videoDrag=(e,video)=>{
      console.log(video);
      e.dataTransfer.setData("videoDetails",JSON.stringify(video))

    }
  
  return (
    <> <Card style={{ width: '100%'}}className='mt-md-0 mt-2' draggable onDragStart={(e)=>videoDrag(e,video)}>
   { !isPresent && (
        <Card.Img 
            style={{ height: "170px", width: "100%" }} 
            onClick={handleShow} 
            variant="top" 
            src={video?.imageUrl} 
        />
    )}

    <Card.Body className='d-flex justify-content-between p-3 ' style={{height:"60px"}}>
    <Card.Title style={{fontSize:"10px",marginTop:"3px",marginRight:"2px"}} >{video?.caption}</Card.Title>
      
    {!isPresent && (
            <Button 
                onClick={() => handledelete(video?.id)} 
                style={{ fontSize: "12px", height: "30px" }} 
                variant="danger"
            >
                <FontAwesomeIcon icon={faTrash} />
            </Button>
        )}
    </Card.Body>
  </Card>
  
  
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="314" src={`${video?.embedLink}?autoplay=1`} title="Interstellar - Trailer - Official Warner Bros. UK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>
  
  </>
  )
}

export default Videocard