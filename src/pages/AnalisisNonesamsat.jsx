import { Container, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { blogSide, postSide } from '../data';

const AnalisisNonesamsat = () => {
    return (
        <div>
            <Container>
                <Row className='content-blog mb-5 mt-5'>
                    <Col>
                        <h2 className='fw-bold'>| Analisis Pendapatan lain (non E-SAMSAT)</h2>
                        <iframe className='power-bi container-fluid' title="ESAMSAT_malut" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiOWFlYWQ5ZGUtNmVmOC00ZmFhLWIzNDMtNGE2OGFmMzE2YzllIiwidCI6IjhiNTdjN2RjLWZlMWMtNGE3ZC1hZGU3LWYwNzIwNmQ0ODFlMSIsImMiOjEwfQ%3D%3D"
                            frameborder="0" allowFullScreen="true"></iframe>
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

export default AnalisisNonesamsat