import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Pricing() {
    return (
        <>
            <Container className='py-5'>
                <Row className='text-center'>
                    <h1><b>PLANS AND PRICING</b></h1>
                </Row>
                <Row className='justify-content-center'>
                    <Col className='col-12 col-md-6 col-lg-4 text-center justify-content-center'>
                        <Card className='border-0 shadow bg-light py-3 my-3'>
                            <h2><i className='bi bi-cloud'></i></h2>
                            <Card.Title><h3><b><span>BASIC</span> PLAN</b></h3></Card.Title>
                            <Card.Body>
                                <h5>$5/MONTH</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis placeat assumenda, consequatur autem consequuntur magni!</p>
                                <p className='mb-0'><b>50GB Storage</b></p>
                                <p className='mb-0'><b>Basic Encryption</b></p>
                                <p><b>Email Support</b></p>
                                <Button className='btn btn-primary text-white'>
                                    <b>VIEW OPTIONS</b>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 text-center justify-content-center'>
                        <Card className='border-0 shadow bg-light py-3 my-3'>
                            <h2><i className='bi bi-hdd-network'></i></h2>
                            <Card.Title><h3><b><span>STANDARD</span> PLAN</b></h3></Card.Title>
                            <Card.Body>
                                <h5>$15/MONTH</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis placeat assumenda, consequatur autem consequuntur magni!</p>
                                <p className='mb-0'><b>500GB Storage</b></p>
                                <p className='mb-0'><b>Enhanced Security</b></p>
                                <p><b>24/7 Support</b></p>
                                <Button className='btn btn-primary text-white'>
                                    <b>VIEW OPTIONS</b>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 text-center justify-content-center'>
                        <Card className='border-0 shadow bg-light py-3 my-3'>
                            <h2><i className='bi bi-lock'></i></h2>
                            <Card.Title><h3><b><span>PRO</span> PLAN</b></h3></Card.Title>
                            <Card.Body>
                                <h5>$30/MONTH</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis placeat assumenda, consequatur autem consequuntur magni!</p>
                                <p className='mb-0'><b>2TB Storage</b></p>
                                <p className='mb-0'><b>Advanced Security</b></p>
                                <p><b>Priority/7 Support</b></p>
                                <Button className='btn btn-primary text-white'>
                                    <b>VIEW OPTIONS</b>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 text-center justify-content-center'>
                        <Card className='border-0 shadow bg-light py-3 my-3'>
                            <h2><i className='bi bi-database'></i></h2>
                            <Card.Title><h3><b><span>ENTERPRISE</span> PLAN</b></h3></Card.Title>
                            <Card.Body>
                                <h5><b>COSTUM PRICING</b></h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis placeat assumenda, consequatur autem consequuntur magni!</p>
                                <p className='mb-0'><b>Unlimited Storage</b></p>
                                <p className='mb-0'><b>Deticated Account Manager</b></p>
                                <p><b>SLA-basckend Support</b></p>
                                <Button className='btn btn-primary text-white'>
                                    <b>VIEW OPTIONS</b>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 text-center justify-content-center'>
                        <Card className='border-0 shadow bg-light py-3 my-3'>
                            <h2><i className='bi bi-rocket'></i></h2>
                            <Card.Title><h3><b><span>STARTUP</span> PLAN</b></h3></Card.Title>
                            <Card.Body>
                                <h5><b>$10/MONTH</b></h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis placeat assumenda, consequatur autem consequuntur magni!</p>
                                <p className='mb-0'><b>200GB Storage</b></p>
                                <p className='mb-0'><b>Scalability Options</b></p>
                                <p><b>API Access</b></p>
                                <Button className='btn btn-primary text-white'>
                                    <b>VIEW OPTIONS</b>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4 text-center justify-content-center'>
                        <Card className='border-0 shadow bg-light py-3 my-3'>
                            <h2><i className='bi bi-gem'></i></h2>
                            <Card.Title><h3><b><span>ULTIMATE</span> PLAN</b></h3></Card.Title>
                            <Card.Body>
                                <h5><b>$99/MONTH</b></h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis placeat assumenda, consequatur autem consequuntur magni!</p>
                                <p className='mb-0'><b>5TB Storage</b></p>
                                <p className='mb-0'><b>Full Compliance</b></p>
                                <p><b>24/7 Deticated Support</b></p>
                                <Button className='btn btn-primary text-white'>
                                    <b>VIEW OPTIONS</b>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>

    )
}