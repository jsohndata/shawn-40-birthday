import { useState } from "react";
import { Col,Image, Modal } from "react-bootstrap";

export default function Panel ( {data: {id, cover, large}} ) {

  const[showModal, setShowModal] = useState(false);

  const toggleShowModal = () => setShowModal(!showModal);

  return (
    <Col xs={6} sm={4} md={3} lg={2} className="m-0 m-xl-1 p-0 column">
      <Image 
        src={`${cover}`} 
        alt={id}        
        fluid
        className="button-effect"
        onClick={toggleShowModal} />
      <Modal
            size="lg"
            show={showModal}
            onHide={toggleShowModal}
            className="backdrop-effect modal-container">
            <iframe 
              style={{width: '100%', height: '70vh'}}               
              src={large} 
              frameborder="0" 
              allow="autoplay; encrypted-media" 
              title="example iFrame Equalize Digital Home Page"
              allowfullscreen></iframe>
      </Modal>    
    </Col>
  )
}
