import { Container, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { blogSide, postSide } from '../data';

// Image Blog
import ImgBlog from '../assets/img/rapat-koordinasi-bapenda-malut.jpg';

// Blog : Bapenda Maluku Utara Akan Garap Dua Objek Sektor Pajak Baru

const BlogPage5 = () => {
  return (
    <div>
         <Container>
                <Row className='content-blog mb-5 mt-5'>
                    <Col>
                        <picture>
                            <img src={ImgBlog} className='img-fluid rounded-2' width={650} height={650} alt='image blog'></img>
                        </picture>
                        <p className='mt-4'>Kamis, 28 September 2023</p>
                        <h2 className='fw-bold'>Bapenda Maluku Utara Akan Garap Dua Objek Sektor Pajak Baru</h2>
                        <p className='mt-4'>Pemerintah Provinsi Maluku Utara, melalui Badan Pendapatan Daerah (Bapenda) akan menggarap
                        dua sektor objek pajak baru di tahun 2024 mendatang.</p>
                        <p>Hal ini disampaikan Kepala Bapenda Maluku Utara, jainab Alting dalam Rapat Koordinasi Pendapatan Daerah
                           dengan seluruh SKPD lingkup Pemprov Maluku Utara, Rabu (27/9/2023), Red Corner Resto Ternate kemarin.</p>
                        <p>Kedua objek pajak tersebut yakni pajak alat berat dan pajak mineral bukan logam dan buatan (MLBB),
                           berdasarkan pada UU nomor 1 tahun 2022 tentang Hubungan Keuangan Pusat dan Daerah (HKPD), serta turunannya
                           PP nomor 35 tahun 2022.
                        </p>
                        <p>Bahkan tidak hanya itu, saat ini Rancangan Peraturan Daerah juga sudah memasuki tahapan evaluasi oleh
                           Kementerian Dalam Negeri (Kemendagri).
                        </p>
                        <p>"Nanti kalau Perda sudah disahkan, maka mulai diberlakukan mulai Januari 2024," ujar dia.</p>
                        <p>Dengan begitu, objek pajak yang menjadi tanggungjawab Bapenda Malut menjadi bertambah dari sebelumnya
                           yakni Pajak Kendaraan Bermotor, Pajak Bea Balik Nama Kendaraan Bermotor, Pajak Air Permukaan, Pajak 
                           Bahan Bakar, dan Pajak Rokok.
                        </p>
                        <p>Yang menarik dari UU nomor 1 tahun 2022 ini menurut Hj. Zainab adalah opsen, yang tidak seperti Dana
                           Bagi Hasil (DBH) yang perhitungannya per jenis pajak, misalnya PKB, BBNKB dengan pembagian Provinsi 70 persen
                           kabupaten/kota 30, Pajak air permukaan Provinsi 50 persen kabupaten 50 persen, Pajak Bahan Bakar Provinsi 
                           30 persen kabupaten 70 persen.
                        </p>
                        <p>Jadi, setelah rekon Bapenda kirim ke masing-masing kabupaten/kota sebagai haknya mereka, dan yang mentransfer
                           adalah Badan Pengelola Keuangan dan Aset Daerah (BPKAD), karena proses keuangan ini masuk di RKUD.
                        </p>
                        <p>"Implementasi ke depan, opsen ini akan dibagi langsung sudah tidak ada lagi pembagian, penetapan, kemudian
                            dikirim oleh Pemprov, sekarang ini tidak lagi seperti itu, dia otomatis dananya langsung masuk," jelasnya.</p>
                        <p>Bahkan dengan skema opsen ini pemerintah provinsi dan kabupaten/kota makin bersinergi dalam upaya pemungutan
                           pajak kendaraan bermotor maupun upaya penyelesaian tunggakan pajak kendaraan bermotor.
                        </p>
                        <p>Ia menambahkan, opsen ini hanya berlaku bagi tiga sektor objek pajak yakni Pajak Kendaraan Bermotor (PKB),
                           Bea Balik Nama Kendaraan Bermotor (BBNKB), dan Mineral Bukan Logam dan Batuan (MBLB). 
                        </p>
                        <p>Dengan tambahan dua objek pajak ini, diharapkan terus mendongkrak Pendapatan Daerah untuk pembangunan dan 
                           kesejahteraan masyarakat.
                        </p>
                        <p>Pajak alat berat memiliki potensi yang cukup besar bila digarap secara maksimal, mengingat wilayah ini memiliki
                           tambang yang cukup besar di sejumlah kabupaten. Sebut saja PT. IWIP di Halteng, Harita di Halsel, NHM di Halut,
                           serta ANTAM di Halmahera Timur.<span className='fw-bold'>(*)</span>
                        </p>
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

export default BlogPage5