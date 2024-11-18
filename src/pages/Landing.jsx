import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>
     <Container className=' py-5 px-4'>
      <Row className='mt-4 d-flex justify-content-center align-items-center ' >
        
        <Col md={6}  > 
        <h4 className='mt-md-4 mt-1 '>Welcome to <sapn className="text-warning">Media Player</sapn></h4>
        <p style={{textAlign:"justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, voluptas. Ex optio dolor delectus itaque accusamus omnis eius officia odit dolore rem, provident neque modi. Repellendus aspernatur quae accusamus sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nulla officia ab inventore optio voluptas eligendi quae iste rerum praesentium voluptatem assumenda, adipisci doloribus molestiae dolor eius molestias doloremque reiciendis.</p>
        <Link to={'/Home'}><button className="btn btn-warning ">Get Started</button></Link>
        
        </Col>
        <Col md={1}></Col>
        <Col md={5} className='d-flex justify-content-center align-items-center'>
            <img className='mt-5 mt-md-0 p-2' src="https://cdn.dribbble.com/users/435595/screenshots/2265515/animated-play-button.gif" alt="no image" height={"300px"}  width={"350px"} />
        </Col>
        
      </Row>
    </Container>

    <Container className='mt-5' >
        <h2 className='text-center'>Features</h2>
      <Row className='d-flex justify-content-center align-items-center mt-3'>
        <Col md={1}></Col>
        <Col md={10}>
            <Row>
            <Col md={4} className='p-3'>
        <Card className='p-3'>
            <Card.Img variant="top" src="https://i.gifer.com/THn0.gif" style={{height:"200px",width:"100%"}} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text style={{textAlign:"justify"}}>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className='p-3'>
        <Card className='p-3'>
            <Card.Img variant="top" src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" style={{height:"200px"}}/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text  style={{textAlign:"justify"}}>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className='p-3'>
        <Card className='p-3'>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/c6/c1/1d/c6c11d8ba0b9f26caf0a6a8ee3a3e78e.gif" style={{height:"200px"}}/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text  style={{textAlign:"justify"}}>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. 
              </Card.Text>
            </Card.Body>
          </Card>
            

        </Col>
        
            </Row>
            </Col>
        
        <Col md={1}></Col>
        
      </Row>
    </Container>
    <div className="container">
        <div className="row p-md-5 p-3">
            <div className="col border border-2 border-secondary rounded p-md-5 p-3">
                <div className="row">
                <div className="col-md-6">
                    <h4 className='text-warning'>Simple fast and Powerful</h4>
                    <p><span className='fs-4'>Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. Libero, labore aperiam voluptates facere exercitationem .</p>
                    <p><span className='fs-4'>Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. Libero, labore aperiam voluptates facere exercitationem e.</p>
                    <p><span className='fs-4'>Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. Libero, labore aperiam voluptates facere exercitationem .</p>
                </div>
                <div className="col-md-6">
                <iframe width="100%" height="360" src="https://www.youtube.com/embed/drr8XByJMMI?list=RDcxKAtmvf-uM" title="Habibi Drip | Nivin Pauly | Ribin Richard | Dabzee | Kuttu Sivanandan |Shahin Rahman |Nikhil |Richa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                </div>

            </div>

        </div>
    </div>
    </>
  )
}

export default Landing