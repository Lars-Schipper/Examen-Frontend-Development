import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Infra from '../media/infra.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Service() {
    return (
        <>
            <Container className='p-5'>
                <Row className='text-center'>
                    <h1><b>SERVICES</b></h1>
                </Row>
                <Row>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow bg-light text-center justify-content-center h-100 w-100'>
                            <Card.Body>
                                <h2>
                                    <i className="bi bi-cloud"></i>
                                </h2>
                                <Card.Title><h4><b><span>RELIABLE</span> CLOUD STORAGE</b></h4></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                                <Button className='btn btn-primary text-white'>
                                    <b>VIEW OPTIONS</b>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow bg-light text-center justify-content-center h-100 w-100'>
                            <Card.Body>
                                <h2>
                                    <i className="bi bi-hdd-stack"></i>
                                </h2>
                                <Card.Title><h4><b><span>INSTANT</span> SCALABILITY</b></h4></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                                <Button className='btn btn-primary text-white'>
                                    <b>VIEW OPTIONS</b>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow bg-light text-center justify-content-center h-100 w-100'>
                            <Card.Body>
                                <h2>
                                    <i className="bi bi-shield-check"></i>
                                </h2>
                                <Card.Title><h4><b><span>MILITARY-GRADE</span> SECURITY</b></h4></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                                <Button className='btn btn-primary text-white'>
                                    <b>VIEW OPTIONS</b>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow bg-light text-center justify-content-center h-100 w-100'>
                            <Card.Body>
                                <h2>
                                    <i className='bi bi-folder'></i>
                                </h2>
                                <Card.Title><h4><b><span>EFFORTLESS</span> DATA MANAGEMENT</b></h4></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                                <Button className='btn btn-primary text-white'>
                                    <b>VIEW OPTIONS</b>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow bg-light text-center justify-content-center h-100 w-100'>
                            <Card.Body>
                                <h2>
                                    <i className="bi bi-globe-americas"></i>
                                </h2>
                                <Card.Title><h4><b><span>GLOBAL</span> DATA ACCESSIBILITY</b></h4></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                                <Button className='btn btn-primary text-white'>
                                    <b>VIEW OPTIONS</b>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 my-3'>
                        <Card className='border-0 shadow bg-light text-center justify-content-center h-100 w-100'>
                            <Card.Body>
                                <h2>
                                    <i className='bi bi-arrow-counterclockwise'></i>
                                </h2>
                                <Card.Title><h4><b><span>AUTOMATED</span> BACKUPS</b></h4></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                                <Button className='btn btn-primary text-white'>
                                    <b>VIEW OPTIONS</b>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className='bg-light p-5' fluid>
                <Row className='justify-content-center'>
                    <Col className='col-12 col-lg-8 text-center text-lg-start'>
                        <h2>WHY CHOOSE <span>BYTE</span>HORIZON?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia distinctio vitae assumenda expedita reprehenderit nobis incidunt accusamus doloremque atque ipsam dolores optio eaque ab fugiat, quia aspernatur quos numquam facilis. Tempore mollitia, suscipit qui cum quaerat amet modi fugiat saepe dicta. Quia pariatur delectus magni corporis amet eum est!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illum facere quam sit consequatur est voluptatem minus doloribus distinctio fugit, explicabo in unde iure aspernatur alias assumenda. Molestiae, corrupti ratione!</p>
                    </Col>
                    <Col className='col-12 col-lg-4 text-center text-lg-start'>
                        <p className='mb-0 mt-5'><span className='text-success'>✓</span> 99.9% uptime</p>
                        <p className='mb-0'><span className='text-success'>✓</span> Top Tier Security</p>
                        <p className='mb-0'><span className='text-success'>✓</span> 24/7 support</p>
                        <p className='mb-0'><span className='text-success'>✓</span> 100% scalable</p>
                    </Col>
                </Row>
            </Container>

            <Container className='p-5'>
                <Row className='justify-content-center'>
                    <Col className='col-12 col-lg-4'>
                        <Image src={Infra} fluid alt='image showing the back of a server rack with a lot of plugged in cables'></Image>
                    </Col>
                    <Col className='col-12 col-lg-8 d-flex align-items-center flex-column justify-content-center text-center text-lg-sta'>
                        <h2><b><span>COSTUM STORAGE</span> SOLUTIONS FOR UNIQUE REQUIREMENTS</b></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia distinctio vitae assumenda expedita reprehenderit nobis incidunt accusamus doloremque atque ipsam dolores optio eaque ab fugiat, quia aspernatur quos numquam facilis. Tempore mollitia, suscipit qui cum quaerat amet modi fugiat saepe dicta. Quia pariatur delectus magni corporis amet eum est!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illum facere quam sit consequatur est voluptatem minus doloribus distinctio fugit, explicabo in unde iure aspernatur alias assumenda. Molestiae, corrupti ratione!</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}