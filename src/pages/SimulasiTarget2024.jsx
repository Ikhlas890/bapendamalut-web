import { Container, Row, Col } from 'react-bootstrap'

const SimulasiTarget2024 = () => {
  return (
    <div>
        <Container>
                <Row className='content-blog mb-5 mt-5'>
                    <Col>
                        <h2 className='fw-bold'>Simulasi Target Pendapatan | 2024</h2>
                        <iframe className='power-bi container-fluid' title="ESAMSAT_malut" width="600" height="373.5" src="https://sipdl.usadi.id/document/SimulasiTarget2024.html"
                            frameborder="0" allowFullScreen="true"></iframe>
                    </Col>
                </Row>
            </Container>
    </div>
  )
}

export default SimulasiTarget2024