import { Container, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { blogSide, postSide } from '../data';

// Image Blog
import ImgBlog from '../assets/img/forum-rkpd-2024-malut.webp';

// Blog : Forum RKPD Malut Tahun 2024 Telah Digelar

const BlogPage2 = () => {
    return (
        <div>
            <Container>
                <Row className='content-blog mb-5 mt-5'>
                    <Col>
                        <picture>
                            <img src={ImgBlog} className='img-fluid rounded-2' width={750} height={750} alt='image blog'></img>
                        </picture>
                        <p className='mt-4'>Kamis, 27 April 2023</p>
                        <h2 className='fw-bold'>Forum RKPD Malut Tahun 2024 Telah Digelar</h2>
                        <p className='mt-4'>Pemerintah Provinsi Maluku Utara menggelar Forum Perangkat Daerah tentang Penyusunan
                            Rencana Kerja Perangkat Daerah (RKPD), pada hari pertama kerja setelah libur panjang Hari Raya Idul Fitri,
                            Rabu (26/04/2023) di Sahid Bella Hotel, Ternate.</p>
                        <p>Sekretaris Daerah Pemprov Maluku Utara, Samsuddin A. Kadir pada kesempatan itu membuka secara resmi forum
                            yang diikuti oleh para pimpinan SKPD lingkup Pemprov Malut, serta sejumlah Pimpinan SKPD terkait,
                            perwakilan kabupaten/kota se-provinsi Maluku Utara.</p>
                        <p>"Forum ini merupakan hal penting dalam proses perencanaan tahunan, dalam forum ini tahapan pembahasan,
                            yang dapat menghasilkan Rancangan Rencana Kerja Perangkat Daerah, yang lahir dari pembahasan dan masukan
                            pihak-pihak terkait," jelas Sekprov Samsuddin.</p>
                        <p>Menurutnya, dari sisi pengawasan, tahapan ini menjadi bahan audit baik KPK, BPK atau Pengawasan Daerah,
                            bahwa sejauh mana rencana kegiatan pemerintah, telah dibahas dalam tahapan yang prosedural.</p>
                        <p>"Rencana Kerja Pemerintah 2024 merupakan tahun terakhir Periode Perencanaan, maka tentu saja kita perlu
                            melihat beberapa aspek yang berpengaruh dalam pengambilan keputusan." Lanjut mantan Pejabat Bupati Pulau
                            Morotai itu.</p>
                        <p>Sekprov lebih jauh mengurai terkait aspek yang dimaksud antara lain, pertama Aspek Evaluasi atas target dan
                            capaian, baik target makro maupun kinerja daerah. Aspek kedua, Prediksi tahun depan baik dari Aspek
                            Kesejahteraan dan Aspek Pelayanan Umum.</p>
                        <p>Dari segi Makro Pembangunan, terdapat 6 indikator makro yang digunakan, sesuai Permendagi No.18 Tahun 2020
                            untuk mengevaluasi Kinerja Pembangunan suatu daerah, pada capaian makro menunjukkan Maluku Utara berada
                            pada tataran capaian yang Cukup Positif.</p>
                        <p>Selain itu, terdapat Makro Sumber Daya Manusia (SDM), dan juga Pertumbuhan Ekonomi, keduanya mengalami 
                            kenaikan. Hal ini diikuti dengan kenaikan Produk Domestik Regional Bruto (PDRB) per kapita tingkat 
                            pengangguran dan tingkat kemiskinan mengalami penurunan.</p>
                        <p>"Meskipun secara makro memperlihatkan suatu keberhasilan, akan tetapi kita masih terus diperhadapkan pada 
                            tantangan pembangunan, yang perlu diperhatikan," ungkapnya.</p>
                        <p>Bahkan ada beberapa hal penting, yang harus menjadi perhatian yakni dari segi ekonomi, sisi ketenagakerjaan 
                            dan aspek kemiskinan, di mana kita diperhadapkan dengan tantangan, sehingga bagaimana mengefektifkan 
                            kinerja penanggulangan kemiskinan, yang lebih baik dan terarah.</p>
                        <p>“Hal penting yang harus disoroti adalah Indikator Kinerja Daerah yang telah ditetapkan dalam rangka Rencana 
                            Pencapaian Visi dan Misi Daerah” tegas Sekprov.</p>
                        <p>Dari 17 poin Kinerja Pemerintah Daerah, ada 10 poin yang dicapai dengan Cukup Baik, terdapat 3 poin yang 
                            memerlukan kerja keras, dan yang paling berpengaruh dari itu adalah bagaimana meningkatkan sektor-sektor 
                            basic potensial, seperti di sektor Pertanian, Perikanan dan Kelautan yang merupakan sektor andalan yang 
                            dapat berpengaruh dalam meningkatkan pendapatan Ekonomi masyarakat Maluku Utara. (jay/Redni)</p>
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

export default BlogPage2