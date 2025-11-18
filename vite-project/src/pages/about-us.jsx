import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Rack from '../media/rack.jpg';
import Disk from '../media/disk.jpg';
import Button from 'react-bootstrap/Button';
import '../App.scss';

export default function AboutUs() {
    return (
        <>
            <Container className='py-5'>
                <Row className='justify-content-center text-center'>
                    <Col className='col-12 col-md-8 col-lg-6'>
                        <h1><b>ABOUT <span>US</span></b></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum placeat rerum dolorem officiis, aspernatur corrupti sequi excepturi explicabo eveniet quos eum doloremque, a distinctio magnam eius assumenda consequatur alias culpa!</p>
                    </Col>
                </Row>

                <Row className='justify-content-center text-center mt-4'>
                    <Col className='col-12 col-lg-4'>
                        <h2><b>WHO WE <span>ARE</span></b></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos exercitationem nihil placeat eaque culpa unde odit vero inventore, iste libero neque sed eveniet, dolore veniam soluta, earum doloremque ipsa? Tempora quam voluptatum explicabo, pariatur voluptas nesciunt modi eaque laborum distinctio qui vitae amet possimus repudiandae officia quae odit! Nostrum.</p>
                    </Col>
                    <Col className='col-12 col-lg-4'>
                        <Image src={Rack} fluid rounded alt='image inside of a server room with multiple server reacks.'></Image>
                    </Col>
                </Row>
                <Row className='justify-content-center text-center mb-4 mt-4 mt-md-0'>
                    <Col className='col-12 col-lg-4'>
                        <Image src={Disk} fluid rounded alt='image of the inside of an Hard Drive HDD'></Image>
                    </Col>
                    <Col className='col-12 col-lg-4 mt-3'>
                        <h2><b>OUR <span>PROMISE</span></b></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos exercitationem nihil placeat eaque culpa unde odit vero inventore, iste libero neque sed eveniet, dolore veniam soluta, earum doloremque ipsa? Tempora quam voluptatum explicabo, pariatur voluptas nesciunt modi eaque laborum distinctio qui vitae amet possimus repudiandae officia quae odit! Nostrum.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='bg-light py-5'>
                <Row className='justify-content-center'>
                    <Col className='col-12 col-md-4 text-center'>
                        <h2><b><span>WHAT WE</span> DO</b></h2>
                        <p className='mb-0'>Storage Management</p>
                        <p className='mb-0'>Data Protection</p>
                        <p className='mb-0'>Storage Buckets</p>
                    </Col>
                    <Col className='col-12 col-md-4 text-center'>
                        <h2><b><span>WHY CHOOSE</span> BYTEHORIZON</b></h2>
                        <p className='mb-0'>Performance-Driven</p>
                        <p className='mb-0'>Security First</p>
                        <p className='mb-0'>24/7 Expert Support</p>
                        <p className='mb-0'>Eco-Friendly Commitment</p>
                        <p className='mb-0'>Global Reach</p>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col className=' text-center'>
                        <Button href='/services' variant="primary" className='text-white'>
                            <b>VIEW SERVICES</b>
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container className='p-5'>
                <Row className='justify-content-center text-center'>
                    <Col className='col-12 col-md-6'>
                        <h2><b>EXPAND YOUR <span>HORIZON</span></b></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga officiis, totam a molestiae impedit sequi itaque obcaecati odio neque.</p>
                        <Button href='/contact' variant="primary" className='text-white'>
                            <b>GET IN TOUCH</b>
                        </Button>
                    </Col>
                </Row>
            </Container>

        </>
    )
}