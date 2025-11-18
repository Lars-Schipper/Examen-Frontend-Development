import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default function Contact() {
    return (
        <>
            <Container className='p-5'>
                <Row className='justify-content-center text-center'>
                    <Col className='col-12 col-md-6'>
                        <h1>CONTACT US</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae neque atque deserunt asperiores, placeat nulla eligendi corporis ad adipisci dolore.</p>
                    </Col>
                </Row>

                <Row>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow bg-light py-3 my-3 text-center h-100 w-100'>
                            <h2><i className='bi bi-envelope-at'></i></h2>
                            <Card.Title><h3><b>GET IN <span>TOUCH</span></b></h3></Card.Title>
                            <Card.Body>
                                <p className='mb-0'><b>Phone: </b> +31 123456789</p>
                                <p className='mb-0'><b>Email: </b>info@BytheHorizon.com</p>
                                <p><b>Live chat: </b> Available 24/7 on our website</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow bg-light py-3 my-3 text-center h-100 w-100'>
                            <h2><i className='bi bi-person-check'></i></h2>
                            <Card.Title><h3><b>SALES & GENERAL<span> INQUIRIES</span></b></h3></Card.Title>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab eligendi, accusantium cum doloremque repudiandae.</p>
                                <p className='mb-0'><b>Email: </b>sales@BytheHorizon.com</p>
                                <p className='mb-0'><b>Hours: </b>Monday - Friday</p>
                                <p>9:00 AM - 6:00 PM (PST)</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3 '>
                        <Card className='border-0 shadow bg-light py-3 my-3 text-center h-100 w-100'>
                            <h2><i className='bi bi-gear'></i></h2>
                            <Card.Title><h3><b>TECHNICAL<span> SUPPORT</span></b></h3></Card.Title>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab eligendi, accusantium cum doloremque repudiandae.</p>
                                <p className='mb-0'><b>Email: </b>sales@BytheHorizon.com</p>
                                <p className='mb-0'><b>Hours: </b>Monday - Friday</p>
                                <p>9:00 AM - 6:00 PM (PST)</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow bg-light py-3 my-3 text-center h-100 w-100'>
                            <h2><i className='bi bi-receipt'></i></h2>
                            <Card.Title><h3><b>BILLING<span> SUPPORT</span></b></h3></Card.Title>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab eligendi, accusantium cum doloremque repudiandae.</p>
                                <p className='mb-0'><b>Email: </b>billing@BytheHorizon.com</p>
                                <p className='mb-0'><b>Hours: </b>Monday - Friday</p>
                                <p>8:00 AM - 5:00 PM (PST)</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow bg-light py-3 my-3 text-center h-100 w-100'>
                            <h2><i className='bi bi-pin-map'></i></h2>
                            <Card.Title><h3><b>VISIT<span> US</span></b></h3></Card.Title>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab eligendi, accusantium cum doloremque repudiandae.</p>
                                <p className='mb-0'><b>Address:</b></p>
                                <p className='mb-0'>ByteHorizon HQ</p>
                                <p className='mb-0'>123 Tech Boulevard</p>
                                <p className='mb-0'>Innovative City, CA 90210</p>
                                <p className='mb-0'>USA</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow bg-light py-3 my-3 text-center h-100 w-100'>
                            <h2><i className='bi bi-pin-map'></i></h2>
                            <Card.Title><h3><b>Follow<span> US</span></b></h3></Card.Title>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab eligendi, accusantium cum doloremque repudiandae.</p>
                                <p className='mb-0'><b>Twitter:</b> @ByteHorizonHQ</p>
                                <p className='mb-0'><b>LinkedIn:</b> ByteHorizon</p>
                                <p className='mb-0'><b>Facebook:</b> ByteHorizon</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}