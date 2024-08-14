import { Container, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { blogSide, postSide } from '../data';

// Image Blog
import ImgBlog from '../assets/img/rapat-koordinasi-bapenda-malut.jpg';

// Blog : Ini Target Bapenda Maluku Utara dalam Meraup Pendapatan Daerah Tahun 2023

const BlogPage1 = () => {
    return (
        <div>
            <Container>
                <Row className='content-blog mb-5 mt-5'>
                    <Col>
                        <picture>
                            <img src={ImgBlog} className='img-fluid rounded-2' width={750} height={750} alt='image blog'></img>
                        </picture>
                        <p className='mt-4'>Kamis, 28 September 2023</p>
                        <h2 className='fw-bold'>Ini Target Bapenda Maluku Utara dalam Meraup Pendapatan Daerah Tahun 2023</h2>
                        <p className='mt-4'>Kepala Badan Pendapatan Daerah (Bapenda) Provinsi Maluku Utara, Jainab Alting memperkirakan realisasi
                            Pendapatan Daerah hingga akhir tahun 2023 hanya sebesar Rp.3,7 Triliun. Jika dibandingkan dengan penetapan
                            target pendapatan daerah yang dianggarkan pada APBD tahun 2023 sebesar Rp 4,1 Triliun lebih, akan mengalami
                            defisit sekitar Rp.500 miliar.</p>
                        <p>Kondisi ini kata Jainab, sudah pasti akan berpengaruh pada program kegiatan yang sudah berjalan tapi
                            tidak bisa dibayarkan sehingga timbul utang.</p>
                        <p>Menurutnya, defisit pendapatan daerah ini bisa berkurang dari nilai tersebut apabila terjadi peningkatan
                            penerimaan negara dari jenis obyek DBH Pajak dan Bukan Pajak pada Dana Transfer yang sudah dianggarkan
                            pada tahun anggaran berkenan, karena adanya peningkatan produksi maupun kenaikan harga jual produksi
                            dari sektor pertambangan.
                        </p>
                        <p>"Jalan keluar yang harus ditempuh adalah melakukan penjadwalan/pemangkasan pendapatan daerah pada APBD tahun
                            2023, agar ABD bisa jalan normal sesuai dengan harapan kita bersama," ucap Jainab dalam paparannya di Rakor
                            Pendapatan Daerah di Red Corner Resto, Ternate, Rabu (27/9/2023) kemarin.</p>
                        <p>Dijelaskan pula bahwa target Pendapatan Daerah dianggarkan pada APBD 2023 sebesar Rp. 4,1 Triliun, sedangkan
                            realisasinya sampai dengan Agustus 2023 baru mencapai Rp. 1,9 Triliun atau 46,67 persen.</p>
                        <p>"Sesungguhnya perkiraan realisasi sampai dengan bulan Agustus 2023 seharusnya mencapai sama atau lebih dari
                            Rp. 2,7 Triliun atau 66,67 persen, sehingga terdapat selisih yang tidak/belum realisasi sebesar
                            Rp. 854 Miliar atau 20 persen," jelasnya.</p>
                        <p>Ia melihat beberapa tahun lalu hingga sekarang, target Pendapatan Daerah yang dianggarkan terlampau tinggi,
                            bahkan tanpa koordinasi dengan Bapenda, Untuk itu, Jainab meminta agar Bapenda difungsikan sesuai tugas
                            pokok, yaitu mengelola Pendapatan Daerah. Tetapi yang terjadi selama ini hanya pada Pajak Daerah yang
                            mereka kelola.</p>
                        <p>"Penetapan target Pendapatan Daerah pada APBD tahun 2023 terlampau tinggi jika dibandingkan dengan realisasi
                            Pendapatan Daerah tahun 2022 sebesar Rp. 3 Triliun lebih, sehingga terdapat selisih kenaikan cukup tinggi
                            sebesar Rp. 1,1 Triliun, seperti tidak mungkin realisasi akan cepat target," Pungkasnya. 
                            <span className='fw-bold'>(*)</span></p>
                        <p>Sumber: Tribun Ternate</p>
                            
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

export default BlogPage1