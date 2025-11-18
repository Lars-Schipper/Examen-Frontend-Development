import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router';
import "../App.scss";
import Image from 'react-bootstrap/Image';
import Logo from '../media/logo.png';

export default function Layout() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
                        <Image src={Logo} height={50} className='no-wrap' alt='Logo of ByteHorizon'></Image>
                        ByteHorizon
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/service">services</Nav.Link>
                            <Nav.Link href="/pricing">Pricing</Nav.Link>
                            <Nav.Link href="/aboutus">About Us</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <div id='App'>
                <main>
                    <Outlet></Outlet>
                </main>
                <footer className='flex-row'>
                    <Container className='bg-body-tertiary pt-5' fluid>
                        <Row className='justify-content-center'>
                            <Col className='col-12 col-md-3 justify-content-center mb-4'>
                                <Image src={Logo} height={140} alt='Logo of ByteHorizon'></Image>
                            </Col>
                            <Col className='col-12 col-md-3 text-center text-md-start mb-4'>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/service">services</Nav.Link>
                                <Nav.Link href="/pricing">Pricing</Nav.Link>
                                <Nav.Link href="/aboutus">About Us</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Col>
                            <Col className='col-12 col-md-3 text-center text-md-start mb-4'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, libero modi molestiae ex nihil incidunt, optio laudantium ea eius repellat iste. Inventore amet, perspiciatis est ipsum corrupti quo? Architecto doloremque nisi aliquam similique labore vitae eius, quas numquam sint veniam.</p>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        </>
    )
}