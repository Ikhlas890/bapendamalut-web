import { Container, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { blogSide, postSide } from '../data';

const VisimisiPage = () => {
    return (
        <div>
            <Container>
                <Row className='content-blog mb-5 mt-5'>
                    <Col>
                        <h2 className='fw-bold'>Visi dan Misi Pemerintahan Provinsi Maluku Utara</h2>
                        <p className='fw-bold fs-5 mt-4'>VISI</p>
                        <p className='fst-italic'>TERCAPAINYA PELAYANAN YANG OPTIMAL UNTUK KEPUASAAN MASYARAKAT</p>
                        <p className='fw-bold fs-5'>MISI</p>
                        <ul>
                            <li>Meningkatkan Kinerja seluruh Pegawai pada UPTB SAMSAT Kota Ternate untuk menunjang kualitas
                                layanan kepada masyarakat
                            </li>
                            <li>Meningkatkan mutu pelayanan untuk peningkatan pendapatan daerah</li>
                            <li>Meningkatkan secara terus-menerus pengetahuan, keterampilan dan sikap pegawai</li>
                            <li>Memberikan Layanan yang memuaskan bagi semua pelanggan baik internal maupun eksternal</li>
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

export default VisimisiPage