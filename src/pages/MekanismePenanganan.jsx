import { Container, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { blogSide, postSide } from '../data';

const MekanismePenanganan = () => {
    return (
        <div>
            <Container>
                <Row className='content-blog mb-5 mt-5'>
                    <Col>
                        <h2 className='fw-bold'>MEKANISME PENANGANAN PENGADUAN DAN SARAN</h2>
                        <ul className='mt-4'>
                            <li>Petugas Seksi Penerimaan dan Penagihan menerima saran/pengaduan dari masyarakat dan meneliti kebenarannya.</li>
                            <li>Petugas Seksi Penerimaan dan Penagihan membuat resume poin pengaduan/sarannya, kemudian diserahkan
                                kepada Kepala Seksi Penerimaan dan Penagihan.</li>
                            <li>Kepala Seksi Penerimaan dan Penagihan mempelajari dan menyiapkan draf tanggapan atas saran dan
                                pengaduan, kemudian diserahkan kepada Kepala UPTB</li>
                            <li>Kepala UPTB memverifikasi draf tanggapan dan melakukan pembahasan bersama bila diperlukan.</li>
                            <li>Kepala UPTB memerintahkan pelaksanaan saran kepada sub bagian &/ seksi yang dimaksudkan.</li>
                            <li>Kepala UPTB menindaklanjutin permasalahan dalam pengaduan dan memberikan tindakan disiplin
                                bila diperlukan.</li>
                            <li>Kepala Seksi Penerimaan dan Penagihan mengirimkan/mempublikasikan surat tanggapan pengaduan/saran
                                kepada masyarakat.</li>
                            <li>Kepala Seksi Penerimaan dan Penagihan membuat berita acara penyelesaian pengaduan &/ saran dengan
                                diketahui Kepala Sub Bagian Tata Usaha, lalu dilaporkan kepada Kepala UPTB dengan tembusan ke kantor
                                BPKPAD Provinsi.</li>
                            <li>Kepala Sub Bagian Tata Usaha mengarsipkan dokumen dan berita acara kronologis kejadian pengaduan &/
                                saran dari masyarakat.</li>
                            <li>Pemohon akan menerima tanggapan atas pengaduan &/ saran, maksimal 2 hari (kerja) sejak surat pengaduan
                                &/ saran diterima Pegawai di UPTB.</li>
                        </ul>
                        <p>Apabila terjadi gangguan sarana dan prasarana di UPTB yang mengganggu penyelenggaraan layanan maka
                           diberlakukan ketentuan sebagai berikut:
                        </p>
                        <ul>
                            <li>Jika gangguan belum tertangani dalam 15-30 menit dari SP, maka Kepala Seksi terkait bertanggung jawab
                                mengendalikan situasi pengungjung.</li>
                            <li>Jika gangguan belum tertangani dalam 31-45 menit dari SP, maka Kepala UPTB bertanggung jawab
                                mengendalikan situasi pengunjung.</li>
                            <li>Jika gangguan belum tertangani dalam 60 menit dari SP, maka Kepala UPTB mengumumkan penutupan
                                layanan hingga ada kejelasan perbaikan layanan.</li>
                        </ul>
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
                                        <Link to={berita.path} key={berita.id}><h5 className='fw-bold'>{berita.text}</h5></Link>
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

export default MekanismePenanganan