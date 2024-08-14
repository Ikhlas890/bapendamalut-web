import { Container, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { blogSide, postSide } from '../data';

const MaklumatPage = () => {
  return (
    <div>
          <Container>
                <Row className='content-blog mb-5 mt-5'>
                    <Col>
                        <h2 className='fw-bold'>Maklumat Layanan</h2>
                        <p className='mt-4'>Pimpinan dan staff pelaksana layanan UPTB SAMSAT Kota Ternate menyatakan sanggup</p>
                        <ul>
                            <li>Bekerja Ikhlas dengan Senyum, Sapa dan Salam;</li>
                            <li>Melayani dengan Mudah, Cepat, Transparan dan Akuntable;</li>
                            <li>Tidak Diskriminatif terhadap Pengguna Layanan;</li>
                            <li>Tidak Menerima Pungutan dalam Pelayanan yang Bertentangan dengan Ketentuan yang Berlaku;</li>
                            <li>Kepuasan Pengguna Layanan adalah Kebanggan Kami.</li>
                        </ul>
                        <p>Apabila dalam penyelenggaraan pelayanan kami tidak sesuai dengan standar pelayanan yang ditetapkan, Kami
                           bersedia menerima sanksi sesuai ketentuan yang berlaku.
                        </p>
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

export default MaklumatPage