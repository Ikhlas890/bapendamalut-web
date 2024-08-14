import { Container, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { blogSide, postSide } from '../data';

const ProfilSamsat = () => {
    return (
        <div>
            <Container>
                <Row className='content-blog mb-5 mt-5'>
                    <Col>
                        <h2 className='fw-bold'>Profil SAMSAT Kota Ternate</h2>
                        <p className='mt-4'>Lahirnya Sistem Manunggal Satu Atap (SAMSAT) diawali oleh sebuah gagasan yang disampaikan
                        pada forum Rapat para pimpinan dinas Pendapatan Daerah tingkat I se-Indonesia pada bulan April 1976
                        di Jakarta hasil Rapat menghasilkan suatu Rekomendasi berupa usulan kepada pemerintah, khususnya pimpinan
                        Departemen Dalam Negeri agar Samsat dijadikan system pemungutan Pajak Kendaraan Bermotor (PKB) dan Bea
                        Balik Nama Kendaraan Bermotor (BBNKB) untuk seluruh Indonesia. Terbentuknya Samsat ditandai dengan
                        dikeluarkannya Surat Keputusan Bersama Tiga Menteri, yaitu Menteri Pertahanan dan Keamanan/Panglima ABRI
                        Nomor POL.KEP/13/XXI/76, Menteri Keuangan Nomor KEP-1693/MK/IV/12/1976, dan Menteri Dalam Negeri Nomor
                        311 Tahun 1976, tentang peningkatan kerja sama antara Pemerintah Daerah tingkat I, Komando Daerah Kepolisian
                        dan Aparat Departemen Keuangan dalam rangka Peningkatan pelayanan kepada masyarakat serta peningkatan 
                        pendapatan daerah khususnya PKB dan BBNKB.</p>

                        <p>Dasar Hukum Pembetukan Samsat di Seluruh Indonesia adalah Intruksi Bersama Menteri Pertahanan Keamanan,
                           Menteri Dalam Negeri dan Menteri Keuangan Nomor INS/03/M/1999, Nomor 29 Tahun 1999, Nomor 6/IMK.014/1999
                           tentang Pelaksanaan Sistem Administrasi Manunggal di bawah Satu Atap dalam penerbitan Surat Tanda Nomor
                           Kendaraan Bermotor dan Pemungutan Pajak Kendaraan Bermotor, Bea Balik Nama Kendaraan Bermotor serta 
                           Sumbangan Wajib Dana Kecelakaan Lalu Lintas Jalan.
                        </p>
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

export default ProfilSamsat