import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { deleteHistoryVideoApi, getAllVideoHistoryApi } from '../services/allApi';


function Watchhistory() {

  const[deleteVideoHistory,setdeleteVideoHistory]=useState(false)
  const [allHisVideos,setallHisVideos]=useState([])

  const getAllvideoHistory=async()=>{
    const result=await getAllVideoHistoryApi()
    setallHisVideos(result.data)
    
  }
  console.log(allHisVideos);

  const handleDelete=async(id)=>{
    const result=await deleteHistoryVideoApi(id)
    console.log(result);
   if(result.status>=200 && result.status<300)
   {
    setdeleteVideoHistory(true)
   }
  }

  useEffect(()=>{
    getAllvideoHistory()
    setdeleteVideoHistory(false)
  },[deleteVideoHistory])
  return (
    
      
      <div className="p-4">
        <div className="d-flex mt-4">
          <h4>Watch History</h4>
          <Link to={'/'} style={{textDecoration:"none"}} className='ms-auto'> <h5 ><FontAwesomeIcon icon={faHouse} className="me-2" /> <span className='d-none d-md-inline'>Home Page</span></h5></Link>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10 p-3 table-responsive">
             {allHisVideos?.length>0? <table className='table'>
                <thead>
                  <tr>
                    <th>SL.NO</th>
                    <th>Caption</th>
                    <th>URL</th>
                    <th>Timestamp</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {allHisVideos?.map((item,index)=>(
                   <tr>
                   <td>{index+1}</td>
                   <td>{item?.caption}</td>
                   <td>{item?.url}</td>
                   <td>{item?.Timestamp}</td>
                   <td><Button onClick={()=>handleDelete(item?.id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></Button></td>
                 </tr>
                ))
                   
                }
                </tbody>
              </table>:
              <h4 className='text-center text-warning'>No Watch History</h4>}

            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
   
  )
}

export default Watchhistory