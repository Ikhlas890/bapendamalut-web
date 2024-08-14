import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FooterComponent = () => {
    return (
        <div className='footer py-5 mt-4' id='footer'>
            <Container>
                <Row className='d-flex justify-content-between'>
                    <Col lg="5">
                        <h5 className='fw-bold mb-3'>Tentang Maluku Utara</h5>
                        <p>Maluku Utara adalah salah satu provinsi di Indonesia. Maluku Utara resmi terbentuk pada tanggal 4 Oktober 1999, melalui UU RI Nomor 46 Tahun 1999 dan UU RI Nomor 6 Tahun 2003. Sebelum resmi menjadi sebuah provinsi,
                            Maluku Utara merupakan bagian dari Provinsi Maluku, yaitu Kabupaten
                            Maluku Utara dan Kabupaten Halmahera Tengah.</p>
                    </Col>
                    <Col className='d-flex flex-column col-lg-2 col mt-lg-0 mt-5'>
                        <h6 className='fw-bold'>Quick Link</h6>
                        <Link to="/">Beranda</Link>
                        <Link to="/lihat-semua-post">Berita</Link>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </Col>
                    <Col lg="4" className="mt-lg-0 mt-5">
                        <h6 className='fw-bold'>Kontak:</h6>
                        <p>Alamat:<br></br>Jl. Trans Halmahera, Gosale Puncak, Sofifi, Oba Utara,<br></br>
                        Tidore Kepulauan, Maluku Utara 97852</p>
                        <p>Telepon:<br></br>
                        0852-9884-4708</p>
                        <p>Email:<br></br>
                        info@bapendamalut.id</p>
                    </Col>
                </Row>
                <Row>
                    <Col>@Copyright Bapenda Maluku Utara. All Right Reserved</Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterComponent