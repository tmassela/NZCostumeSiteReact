import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

    const CostumeCard = (props) => {
        const [modal, setModal] = useState(false);
        const toggle = () => setModal(!modal);
        return (

            <div>
                <Card hoverable onClick={toggle}>
                    <CardImg
                        width='100%'
                        src={props.costume.image}
                        alt={props.costume.name}
                    />
                    <CardImgOverlay>
                        <CardTitle>{props.costume.name}</CardTitle>
                    </CardImgOverlay>
                </Card>

                <Modal isOpen={modal} toggle={toggle} size="lg" style={{maxWidth: '2000px', width: '100%'}}>
                    <ModalHeader toggle={toggle}>{props.costume.name}  </ModalHeader>
                    <ModalBody>

                    <Container>
                            <Row>
                                <Col >
                                    <img src={props.costume.image2} style={{width: '400px'}}></img>
                                </Col>
                                <Col>
                                    <img src={props.costume.image3} style={{width: '400px'}}></img>
                                </Col>
                                <Col>
                                    <img src={props.costume.image4} style={{width: '400px'}}></img>
                                </Col>
                            </Row>

                        </Container>

                    </ModalBody>
                    <ModalFooter style={{display: "flex", justifyContent: "center",}}>
                        {props.costume.left} remaining costumes <br></br>
                        Contact NZ Booster for exact sizes. <br></br>
                    </ModalFooter>
                    <ModalFooter>
                        <div onClick={(e) => {window.location.href ='mailto:example@email.com';}}>
                            <Button color="primary" onClick={toggle}>Contact Form NZ Booster</Button>{' '}
                        </div>
                    </ModalFooter>
                </Modal>
            </div>

        );
    }


export default CostumeCard
