import { Container, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { blogSide, postSide } from '../data';

const JenisPelayanan = () => {
  return (
    <div>
          <Container>
                <Row className='content-blog mb-5 mt-5'>
                    <Col>
                        <h2 className='fw-bold'>Jenis Pelayanan</h2>
                        <p className='mt-4'>Jenis-jenis layanan yang diberikan:</p>
                        <ul>
                            <li>Pelayanan Pajak Kendaraan Bermotor;</li>
                            <li>Pelayanan Bea Balik Nama (BNN) Kendaraan Bermotor;</li>
                            <li>Pelayanan Penerimaan Negara Bukan Pajak (PNBP) sesuai aturan Peraturan Pemerintah Nomor 60 Tahun 
                                2016;
                            </li>
                            <li>Pelayanan Sumbangan Wajib Dana Kecelakaan Lalu Lintas Jalan (Jasa Raharja).</li>
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

export default JenisPelayanan