import { Container, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { blogSide, postSide } from '../data';

const PrivacyPolicy = () => {
    return (
        <div>
            <Container>
                <Row className='content-blog mb-5 mt-5'>
                    <Col>
                        <p className='fw-bold'>Privacy Policy</p>
                        <p>Badan Pendapatan Daerah Provinsi Maluku Utara built the Bapenda Malut app as a Free app. This SERVICE is provided by Bapenda Malut at no cost and is intended for use as is. This page is used to inform visitors regarding out policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service.
                           We will not use or share your information with anyone except as described in this Privacy Policy.</p>
                        <p className='fw-bold'>Information Collection and Use</p>
                        <p>For better experiences while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to name. The information that we request will be retained on your device and is not collected in any way. The app does use third-party services that may collect information used to identify you. Link to the 
                           privacy policy of third-party service providers used by the app <span className='fw-bold'>: facebook</span> </p>
                        <p className='fw-bold'>Log Data</p>
                        <p>We want to inform you that whenever you use our Service, in case of error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (IP) address, device name, Operating System version, configuration of the app when utilizing our Service,
                           time and date of your use of the Service, and other statistics.</p>
                        <p className='fw-bold'>Cookies</p>
                        <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. This Service does not use these cookies explicitly. However, the app may use third-party code and libraries that use cookies to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, 
                           you may not be able to use some portions of this Service.</p>
                        <p className='fw-bold'>Service Providers</p>
                        <p>We may employ third-party companies and individuals due to the following reasons:</p>
                        <ul>
                            <li>To facilitate our Service;</li>
                            <li>To provide the Service on our behalf;</li>
                            <li>To perform Service-related serviced; or</li>
                            <li>To assist us in analyzing how our Service is used.</li>
                        </ul>
                        <p>We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information 
                           for any other purpose.</p>
                        <p className='fw-bold'>Security</p>
                        <p>I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, 
                           and we can not guarantee its absolute security.</p>
                        <p className='fw-bold'>Links to Other Sides</p>
                        <p>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, 
                           or practices of any third-party sites or services.</p>
                        <p className='fw-bold'>Children's Privacy</p>
                        <p>These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided me with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, 
                           please contact me so that we will be able to do the necessary actions.</p>
                        <p className='fw-bold'>Changes to This Privacy Policy</p>
                        <p>I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. 
                           This policy is effective as of 19th July 2022.</p>
                        <p className='fw-bold'>Contact Us</p>
                        <p>If you have any questions or suggestions about our Privacy Policy, please do not hesitate to contact us at : info@bapendamalut.id</p>
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

export default PrivacyPolicy