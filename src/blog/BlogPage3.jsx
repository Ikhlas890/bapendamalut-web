import { Container, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { blogSide, postSide } from '../data';

// Image Blog
import ImgBlog from '../assets/img/Sekprov-Malut-Tutup.webp';

// Blog : Sekprov Malut Tutup Pelatihan Kepemimpinan ASN

const BlogPage3 = () => {
  return (
    <div>
         <Container>
                <Row className='content-blog mb-5 mt-5'>
                    <Col>
                        <picture>
                            <img src={ImgBlog} className='img-fluid rounded-2' width={650} height={650} alt='image blog'></img>
                        </picture>
                        <p className='mt-4'> Jumat, 20 Oktober 2023</p>
                        <h2 className='fw-bold'>Sekprov Malut Tutup Pelatihan Kepemimpinan ASN</h2>
                        <p className='mt-4'>Sekretaris Daerah Provinsi Maluku Utara, Drs. Samsuddin Abdul Kadir, secara resmi
                        menutup Pelatihan Kepemimpinan Angkatan ke-II BPSDM Maluku Utara pada Kamis, 19 Oktober 2023, di Aula
                        Nuku, Lantai 2 Kantor Gubernur Maluku Utara.</p>
                        <p>Dalam sambutannya, Samsuddin Abdul Kadir menjelaskan bahwa pelatihan kepemimpinan menjadi sarana penting
                           untuk meningkatkan kompetensi Aparatur Sipil Negara (ASN).
                        </p>
                        <p>Menurutnya, untuk membangun Pemerintah Provinsi Maluku Utara yang profesional, inovatif, dan berintegritas,
                           diperlukan ASN yang memiliki kompetensi yang kuat.
                        </p>
                        <p>"Melalui pelatihan kepemimpinan ini diharapkan akan muncul inovasi-inovasi dalam mempermudah kinerja
                            organisasi dan pemberian pelayanan kepada masyarakat dan memunculkan pemimpin-pemimpin terbaik dalam
                            upaya membangun provinsi Maluku Utara menjadi lebih baik." Kata Samsuddin.</p>
                        <p>Ia juga menyoroti pentingnya inovasi dalam menjalankan tugas-tugas pemerintahan, terutama dalam era
                           revolusi industri 4.0 yang telah mendisrupsi segala lini aspek kehidupan.
                        </p>
                        <p>"Oleh karena itu, pola pikir dan etos kerja ASN harus berubah. Dibutuhkan fleksibilitas, kecepatan,
                            dan ketepatan dalam melaksanakan tugas, dengan teknologi sebagai prioritas. Kedisiplinan dan
                            produktivitas juga perlu ditingkatkan." tegasnya.</p>
                        <p>Sebelum mengakhiri sambutannya, Sekretaris Daerah memberikan apresiasi kepada para peserta PKA Angkatan II
                           atas pencapaian mereka dalam pelatihan kepemimpinan.
                        </p>
                        <p>"Selamat kepada para peserta yang telah mengikuti dan dinyatakan lulus pelatihan kepemimpinan ini. Semoga
                            pengetahuan dan keterampilan yang diperoleh selama mengikuti pelatihan, diimplementasikan di unit kerja
                            masing-masing dan memberikan manfaat bagi organisasi serta berdampak positif pada kinerja organisasi
                            dan pelayanan publik." tutupnya(Ms/TIM)</p>
                        <p>@MalutProv</p>
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

export default BlogPage3