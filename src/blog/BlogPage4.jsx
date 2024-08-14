import { Container, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { blogSide, postSide } from '../data';

// Image Blog
import ImgBlog from '../assets/img/sekprov-malut-landscape-01.webp';

// Blog : Sekprov Malut Luncurkan Platform Pemberdayaan Digital: Menuju Satu Data

const BlogPage4 = () => {
  return (
    <div>
          <Container>
                <Row className='content-blog mb-5 mt-5'>
                    <Col>
                        <picture>
                            <img src={ImgBlog} className='img-fluid rounded-2' width={650} height={650} alt='image blog'></img>
                        </picture>
                        <p className='mt-4'>Kamis, 19 Oktober 2023</p>
                        <h2 className='fw-bold'>Sekprov Malut Luncurkan Platform Pemberdayaan Digital: Menuju Satu Data</h2>
                        <p className='mt-4'>Mewakili Gubernur, Sekretaris Daerah Provinsi Maluku Utara, Samsudin Abdul Kadir, secara
                        resmi meluncurkan Platform Digital Strategi Pengembangan Informasi Pemberdayaan Digital Masyarakat Provinsi
                        Maluku Utara (SERAMBI Malut) dan mengukuhkan Forum Koordinasi SERAMBI Malut. Peluncuran ini berlangsung
                        di Aula Kie Raha Ballroom Muara Hotel Ternate pada Kamis (19/10/2023).</p>
                        <p>Dalam sambutannya, Samsudin Abdul Kadir mengatakan, perjalanan kita bersama dalam menerapkan kebijakan
                           Satu Data Indonesia, sebagaimana yang diamanatkan oleh Peraturan Presiden Nomor 39 Tahun 2019 di tingkat
                           daerah, termasuk Provinsi Maluku Utara, dimulai dari tahap awal sosialisasi, serta berbagai bentuk
                           kegiatan lainnya seperti Focus Group Discussion (FGD), seminar, dan workshop. Hingga saat ini, kita terus
                           berupaya mendorong percepatan peningkatan implementasi Satu Data Maluku Utara.
                        </p>
                        <p>Melalui sosialisasi dan Launching tersebut, kata Samsudin, pembangunan konsep Satu Data di Provinsi Maluku
                           Utara telah dimulai sejak tahun 2020. Dalam menghadapi berbagai tantangan dan keterbatasan, Dinas Kominfo
                           dan Persandian Provinsi Malut berperan sebagai Wali Data dan telah melakukan koordinasi serta kolaborasi 
                           dengan pihak terkait untuk merealisasikan Satu Data Maluku Utara.
                        </p>
                        <p>Kendati demikian, pelaksanaan Satu Data di Maluku Utara masih dihadapkan pada beragam kendala. Salah satunya
                           adalah permasalahan yang muncul sejak tahap awal, yaitu ketersediaan data dari Produsen Data (OPD) yang 
                           memiliki peran krusial. Dalam upaya mengatasi kendala ini, perlu juga memperhatikan aspek fasilitas, sarana
                           prasarana, serta kualifikasi Sumber Daya Manusia (SDM) yang kompeten di bidang Pengelolaan Data.
                        </p>
                        <p>Samsudin menekankan pentingnya pengembangan data dan informasi Pemberdayaan Digital Masyarakat, yang mencakup
                           aspek Pengetahuan Digital (edukasi), Ekonomi berbasis digital (UMKM dan industri kecil), serta Infrastruktur
                           digital mandiri yang dikembangkan oleh kalangan non-pemerintah.
                        </p>
                        <p>Saat ini, data-data tersebut masih tersebar di berbagai pihak yang telibar dalam program Pemberdayaan Digital,
                           seperti perbankan, dunia pendidikan dan perguruan tinggi, relawan di bidang Teknologi Informasi dan Komunikasi
                           (TIK), serta para pembina UMKM, industri kecil, dan ekonomi kreatif.
                        </p>
                        <p>Namun, data yang tersebar ini belum terhimpun secara sistematis dan terintegrasi dalam satu entitas data
                           tunggal. Oleh karena itu, dibutuhkan strategi yang terkoordinasi melalui Platform Digital Penyajian dan
                           Pengembangan Informasi dan Data Pemberdayaan Digital Masyarakat di Provinsi Maluku Utara.
                        </p>
                        <p>"Untuk itu, melalui forum ini kami menyampaikan dukungan dan apresiasi atas Proper Kadis Kominfosan Provinsi
                            Malut, Dr. Iksan R.A. Arsyad, tentang Serambi Malut," Kata Samsudin.</p>
                        <p>Ia berharap bahwa inovasi SERAMBI Malut ini dapat menyediakan Informasi dan Data Pemberdayaan Digital
                           Masyarakat di 8 Kabupaten/Kota, meningkatkan kompentensi SDM pengelola Informasi dan Data, serta mewujudkan 
                           integrasi data secara berkelanjutan.
                        </p>
                        <p>"Dengan adanya Sosialisasi sekaligus Launching ini, semoga dapat memberikan informasi dan edukasi yang lebih
                            baik, serta meningkatkan pemuktahiran data terbaru dan informasi Pemberdayaan Digital Masyarakat yang menjadi
                            pengayaan Satu Data Malut,"harapnya.</p>
                        <p>"Mari bersama melalui forum ini, kita membangun komitmen dan berkolaborasi dalam mendorong kemajuan, terutama
                            di bidang Pelayanan Informasi Masyarakat di era Digital," tutupnya.</p>
                        <p>Hadir dalam kegiatan itu, Kepala Perwakilan Bank Indonesia Provinsi Maluku Utara, Kepala Badan Pusat Statistik
                          (BPS) Maluku Utara, Rektor, Direktur, dan/atau Ketua Perguruan Tinggi Wilayah Ternate, Tidore, Pulau Morotai,
                          serta para akademisi dan praktisi yang terkait dengan Program SERAMBI Malut. (Ms/TIM).</p>
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

export default BlogPage4