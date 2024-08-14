import { Container, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { blogSide, postSide } from '../data';

const SaranaPrasarana = () => {
  return (
    <div>
         <Container>
                <Row className='content-blog mb-5 mt-5'>
                    <Col>
                        <h2 className='fw-bold'>Sarana dan Prasarana Pelayanan</h2>
                        <p className='mt-4'>SARANA DAN PRASARANA TERSTANDAR DI RUANG PELAYANAN</p>
                        <p className='fw-bold'>A. Sarana</p>
                        <ul>
                            <li>Ruang tunggu layanan</li>
                            <li>Kursi tunggu layanan</li>
                            <li>Meja pengisian formulir</li>
                            <li>Alat tulis</li>
                            <li>Loket pelayanan</li>
                            <li>Ruang uji fisik</li>
                            <li>Seperangkat komputer</li>
                            <li>Alat uji fisik</li>
                            <li>Alat cetak TNKB</li>
                            <li>Sound system</li>
                        </ul>
                        <p className='fw-bold'>B. Prasarana</p>
                        <ul>
                            <li>Papan informasi</li>
                            <li>Kotak pengaduan dan saran</li>
                            <li>Fasilitas yang nyaman: AC, parkir, toilet, musholla, ATM, Kantin, TV, serta listrik dan generator</li>
                            <li>Papan nama petugas</li>
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

export default SaranaPrasarana