import { Container, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { blogSide, postSide } from '../data';

const KewajibanLayanan = () => {
  return (
    <div>
         <Container>
                <Row className='content-blog mb-5 mt-5'>
                    <Col>
                        <h2 className='fw-bold'>Kewajiban Layanan</h2>
                        <p className='mt-4'>Kewajiban Petugas Pelayanan:</p>
                        <ul>
                            <li>Memberikan Pelayanan sebaik-baiknya;</li>
                            <li>Tidak mempersulit pelayanan;</li>
                            <li>Bersikap dan Bertingkah laku sopan santun;</li>
                            <li>Melaksanakan Pelayanan sesuai Standar Pelayanan;</li>
                            <li>Membantu masyarakat dalam memahami hak dan tanggung jawabnya sebagai penerima pelayanan publik.</li>
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

export default KewajibanLayanan