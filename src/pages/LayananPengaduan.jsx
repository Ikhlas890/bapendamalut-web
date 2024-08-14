import { Container, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { blogSide, postSide } from '../data';

const LayananPengaduan = () => {
  return (
    <div>
         <Container>
                <Row className='content-blog mb-5 mt-5'>
                    <Col>
                        <h2 className='fw-bold'>Layanan Pengaduan</h2>
                        <p className='mt-4'>Layanan Pengaduan:</p>
                        <ul>
                            <li>Datang langsung ke Loket Pengaduan di Lantai 1 di Kantor Bersama Samsat Kota Ternate</li>
                            <li>Melalui Kotak Pengaduan di Kantor Bersama Samsat Kota Ternate</li>
                            <li>WhatsApp: <span className='fw-bold'>0852-9884-4708</span></li>
                            <li>Email: info@bapendamalut.id</li>
                            <li>Surat yang dialamatkan kepada:<br></br>
                            Jl. Trans Halmahera, Gosale Puncak, Sofifi, Oba Utara, Tidore Kepulauan,<br></br>
                            Maluku Utara 97852</li>
                        </ul>
                    </Col>
                    <Col className='side-news tab col-md-3'>
                        <Tabs
                            defaultActiveKey="post"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab className='tab-post' eventKey="post" title="Post">
                                {postSide.map((post) => {
                                    return (
                                        <div key={post.id}>
                                            <Link to={post.path}><h5 className='fw-bold'>{post.title}</h5></Link>
                                            <Link to={post.path}><p>{post.text}</p><hr></hr></Link>
                                        </div>
                                    )
                                })}
                            </Tab>
                            <Tab eventKey="berita" title="Berita">
                                {blogSide.map((berita) => {
                                    return (
                                        <Link to={berita.path} key={berita.id}><h5 className='fw-bold'>{berita.text}</h5><hr></hr></Link>
                                    )
                                })}
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
    </div>
  )
}

export default LayananPengaduan