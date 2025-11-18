import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Header from '../media/header.jpg';
import Button from 'react-bootstrap/Button';
import Storage from '../media/storage.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';


import '../App.scss';

export default function Home() {
    return (
        <>
            <Container fluid className='p-0'>
                <Row className='bg-dark text-center p-2'>
                    <Col className='text-white'>
                        <h6 className='pb-0'><b>New Location: </b> ByteHorizon Singapore 1</h6>
                    </Col>
                </Row>
                {/* <Row>
                    <Image id='banner' src={Header} height={500} alt='image of a couple of computers that are turned on'></Image>
                </Row> */}

                <Row>
                    <figure className='position-relative'>
                        <Image id='banner' src={Header} height={500} className='w-100' alt='image of a couple of computers that are turned on'></Image>
                        <figcaption>
                            <h3>OBJECT STORAGE</h3>
                            <h3><b>FOR ALL DATA NEEDS</b></h3>
                        </figcaption>
                    </figure>
                </Row>
            </Container>

            <Container fluid className='bg-light px-5 py-3'>
                <Row>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow bg-light text-center h-100 w-100'>
                            <Card.Body>
                                <h2>
                                    <i className="bi bi-cloud"></i>
                                </h2>
                                <Card.Title><h4><b><span>RELIABLE</span> CLOUD STORAGE</b></h4></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow bg-light text-center h-100 w-100'>
                            <Card.Body>
                                <h2>
                                    <i className="bi bi-hdd-stack"></i>
                                </h2>
                                <Card.Title><h4><b><span>INSTANT</span> SCALABILITY</b></h4></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow bg-light text-center h-100 w-100'>
                            <Card.Body>
                                <h2>
                                    <i className="bi bi-shield-check"></i>
                                </h2>
                                <Card.Title><h4><b><span>MILITARY-GRADE</span> SECURITY</b></h4></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow bg-light text-center h-100 w-100'>
                            <Card.Body>
                                <h2>
                                    <i className='bi bi-folder'></i>
                                </h2>
                                <Card.Title><h4><b><span>EFFORTLESS</span> DATA MANAGEMENT</b></h4></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow bg-light text-center h-100 w-100'>
                            <Card.Body>
                                <h2>
                                    <i className="bi bi-globe-americas"></i>
                                </h2>
                                <Card.Title><h4><b><span>GLOBAL</span> DATA ACCESSIBILITY</b></h4></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow bg-light text-center h-100 w-100'>
                            <Card.Body>
                                <h2>
                                    <i className='bi bi-arrow-counterclockwise'></i>
                                </h2>
                                <Card.Title><h4><b><span>AUTOMATED</span> BACKUPS</b></h4></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className='justify-content-center'>
                    <Col className='text-center'>
                        <Button href='/pricing' variant="primary" className='text-white'>
                            <b>{'GET STARTED TODAY>>'}</b>
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container className='p-5'>
                <Row>
                    <Col className='col-12 col-lg-4'>
                        <Image rounded src={Storage} alt='Image of a storage device being plugged in to a server rack' fluid></Image>
                    </Col>
                    <Col className='col-12 col-lg-8 p-3'>
                        <h2><b>STORAGE YOU CAN <span>TRUST</span></b></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia distinctio vitae assumenda expedita reprehenderit nobis incidunt accusamus doloremque atque ipsam dolores optio eaque ab fugiat, quia aspernatur quos numquam facilis. Tempore mollitia, suscipit qui cum quaerat amet modi fugiat saepe dicta. Quia pariatur delectus magni corporis amet eum est!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illum facere quam sit consequatur est voluptatem minus doloribus distinctio fugit, explicabo in unde iure aspernatur alias assumenda. Molestiae, corrupti ratione!</p>
                    </Col>
                </Row>
            </Container>

            <Container className='bg-light px-5 py-4' fluid>
                <Row className='justify-content-center'>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow text-center w-100 h-100'>
                            <Card.Body>
                                <h2>
                                    <i className='bi bi-cloud'></i>
                                </h2>
                                <Card.Title><b>CLOUD</b></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                                <Button variant="outline-primary">
                                    VIEW OPTIONS
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow text-center w-100 h-100'>
                            <Card.Body>
                                <h2>
                                    <i className='bi bi-hdd-stack'></i>
                                </h2>
                                <Card.Title><b>DETICATED SERVER</b></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                                <Button variant="outline-primary">
                                    VIEW OPTIONS
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow text-center w-100 h-100'>
                            <Card.Body>
                                <h2>
                                    <i className='bi bi-hdd-network'></i>
                                </h2>
                                <Card.Title><b>MANAGED SERVER</b></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                                <Button variant="outline-primary">
                                    VIEW OPTIONS
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow text-center w-100 h-100'>
                            <Card.Body>
                                <h2>
                                    <i className='bi bi-hdd-rack'></i>
                                </h2>
                                <Card.Title><b>COLOCATION</b></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                                <Button variant="outline-primary">
                                    VIEW OPTIONS
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow text-center w-100 h-100'>
                            <Card.Body>
                                <h2>
                                    <i className='bi bi-database'></i>
                                </h2>
                                <Card.Title><b>STORAGE BUCKET</b></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                                <Button variant="outline-primary">
                                    VIEW OPTIONS
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className='justify-content-center text-center p-5'>
                <Row >
                    <Col>
                        <h3><b>GET STARTED <span>TODAY</span></b></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dignissimos?</p>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col>
                        <Button href='/pricing' width={100} variant="outline-primary">
                            VIEW PLANS & PRICING
                        </Button></Col>
                </Row>
            </Container>
        </>
    )
}