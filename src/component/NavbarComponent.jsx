import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/img/logo-01.webp';

import { Link, NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-success gap-2" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img className='img-fluid' src={Logo} width={50} height={50} alt='Logo Pemda'></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto text-center">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            
                            <NavDropdown title="Profil" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/visimisi">Visi Misi</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Layanan Informasi" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/maklumat">Maklumat Layanan</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/layanan-pengaduan">Layanan Pengaduan</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/kewajiban-layanan">Kewajiban Pelayanan</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/jenis-pelayanan">Jenis Pelayanan</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/privacy-policy">Privacy Policy</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Analisis" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/analisis-esamsat">Analisis e-SAMSAT</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/analisis-non-esamsat">Analisis non e-SAMSAT</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Simulasi Target Pendapatan" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/simulasi-target-pendapatan-2023">2023</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/simulasi-target-pendapatan-2024">2024</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/kontak">Kontak</Nav.Link>
                        </Nav>
                        <div className='d-flex justify-content-center mt-2 mb-2'><Link to="https://esamalut.sipkd.id/#/login" target='blank'>
                            <Button variant='light'>Login e-Pendapatan</Button></Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent