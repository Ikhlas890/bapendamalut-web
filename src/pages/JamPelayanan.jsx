import { Container, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { blogSide, postSide } from '../data';

const JamPelayanan = () => {
    return (
        <div>
            <Container>
                <Row className='content-blog mb-5 mt-5'>
                    <Col>
                        <h2 className='fw-bold'>Jam Pelayanan</h2>
                        <p className='mt-4'>JAM PELAYANAN UNIT PELAKSANA TEKNIK BADAN (UPTB) SAMSAT PADA BADAN PENGELOLA KEUANGAN,
                            PENDAPATAN DAN ASET DAERAH PROVINSI MALUKU UTARA</p>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Hari</th>
                                    <th>Jam Pelayanan</th>
                                    <th>Ket</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='fw-bold'>1</td>
                                    <td className='fw-bold'>Senin s/d Kamis</td>
                                    <td className='fw-bold'>Pukul 08.00 - 12.00 WIT</td>
                                    <td>Apel</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Istirahat</td>
                                    <td>Pukul 12.00 - 13.30 WIT</td>
                                    <td>Bersama</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Lanjut</td>
                                    <td>Pukul 13.00 - 16.00 WIT</td>
                                    <td>Dilaksana</td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>2</td>
                                    <td className='fw-bold'>Jumat</td>
                                    <td className='fw-bold'>Pukul 08.00 - 12.00 WIT</td>
                                    <td>Pagi dan Sore</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Istirahat</td>
                                    <td>Pukul 12.00 - 14.00 WIT</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Lanjut</td>
                                    <td>Pukul 14.00 - 16.00 WIT</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className='fw-bold'>3</td>
                                    <td className='fw-bold'>Sabtu</td>
                                    <td className='fw-bold'>Pukul 08.00 - 16.00 WIT</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
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

export default JamPelayanan