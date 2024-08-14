import { Container, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { blogSide, postSide } from '../data';

// Gambar Table
import ImgTable1 from '../assets/img/item-esamsat/item-1.png';
import ImgTable2 from '../assets/img/item-esamsat/menu-symbol-02.png';
import ImgTable3 from '../assets/img/item-esamsat/menu-symbol-01.png';
import ImgTable4 from '../assets/img/item-esamsat/img-halaman-utama.png';
import ImgTable5 from '../assets/img/item-esamsat/img-penerimaan-denda.png';
import ImgTable6 from '../assets/img/item-esamsat/img-penerimaan-berdasar-plat.png';
import ImgTable7 from '../assets/img/item-esamsat/img-grafik-peta.png';
import ImgTable8 from '../assets/img/item-esamsat/img-menu-nmr.png';
import ImgTable9 from '../assets/img/item-esamsat/img-daftar-menu.png';
import ImgTable10 from '../assets/img/item-esamsat/img-dashboard-pkb.png';
import ImgTable11 from '../assets/img/item-esamsat/img-dashboard-setoran.png';
import ImgTable12 from '../assets/img/item-esamsat/img-dashboard-upt.png';
import ImgTable13 from '../assets/img/item-esamsat/img-dashboard-transaksi.png';
import ImgTable14 from '../assets/img/item-esamsat/img-dashboard-apbd.png';
import ImgTable15 from '../assets/img/item-esamsat/img-dashboard-kendaraan.png';
import ImgTable16 from '../assets/img/item-esamsat/img-dashboard-tahun-kendaraan.png';
import ImgTable17 from '../assets/img/item-esamsat/img-dashboard-pemilik.png';
import ImgTable18 from '../assets/img/item-esamsat/img-dashboard-progress.png';
import ImgTable19 from '../assets/img/item-esamsat/img-dashboard-jenis-pungutan.png';

// Gambar Symbol Table
import ImgSymbol1 from '../assets/img/item-esamsat/symbol-02.png';
import ImgSymbol2 from '../assets/img/item-esamsat/symbol-03.png';
import ImgSymbol3 from '../assets/img/item-esamsat/symbol-04.png';
import ImgSymbol4 from '../assets/img/item-esamsat/symbol-05.png';
import ImgSymbol5 from '../assets/img/item-esamsat/symbol-06.png';



function AnalisisEsamsat() {
  return (
    <div>
      <Container>
        <Row className='content-blog mb-5 mt-5'>
          <Col>
            <h2 className='fw-bold'>| Dashboard e-SAMSAT</h2>
            <iframe className='power-bi container-fluid' title="ESAMSAT_malut" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiN2MyZGJiMTAtM2M2YS00OWMxLThkODctMTY3ZmNiZDBmYzI0IiwidCI6IjhiNTdjN2RjLWZlMWMtNGE3ZC1hZGU3LWYwNzIwNmQ0ODFlMSIsImMiOjEwfQ%3D%3D"
              frameborder="0" allowFullScreen="true"></iframe>
            <div className='mt-4'>
              <h2 className='fw-bold'>| Penggunaan dashboard e-SAMSAT</h2>
              <Table className='table table-success table-striped table-bordered text-right mt-4' striped bordered hover>
                <thead>
                  <tr className='table-dark'>
                    <th>Nama Item</th>
                    <th>Isi item dan penjelasan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='fw-bold'>Daftar</td>
                    <td>Simbol saat kursor mouse diarahkan pada suatu grafik (hover)</td>
                  </tr>
                  <tr>
                    <td className='fw-bold'>Notasi/Simbol</td>
                    <td>Contoh: simbol terlihat pada lingkaran merah<br></br>
                      <img className='img-fluid' src={ImgTable1} width={140} height={140}></img><br></br>Penjelasan:<br></br>
                      <img className='img-fluid' src={ImgSymbol1} width={25} height={30}></img> Ketika grafik dalam level terbawah dan menekan klik kanan mouse pada grafik, maka akan muncul menu Drill up yang berfungsi menaikan level data yang ditampilkan, misal data berada pada level kecamatan,
                      ketika button ini dipilih maka data menjadi level kabupaten.<br></br><br></br>
                      <img className='img-fluid' src={ImgSymbol2} width={25} height={30}></img> drill down on/off, status on ketika diklik terlihat background bulat hitam dan status off tidak ada background. Ketika status on maka data akan menampilkan anak level sesuai induk yang dipilih. Misal jika sebuah kabupaten diklik,
                      maka data turun level pada tingkat kecamatan atas kabupaten yang diklik.<br></br><br></br>
                      <img className='img-fluid' src={ImgSymbol3} width={25} height={30}></img> atau <img className='img-fluid' src={ImgSymbol4} width={25} height={30}></img>
                      dipilih, maka akan menampilkan informasi yang lebih detail. Contoh jika kondisi grafik menampilkan level kabupaten maka setelah diklik show next level akan menampilkan data level kecamatan. Ketika grafik dalam level terbawah dan menekan klik kanan mouse pada grafik,
                      maka akan muncul menu Drill up yang berfungsi menaikan level data yang ditampilkan, misal data kecamatan menjadi data kabupaten.
                      <br></br><br></br>
                      <img className='img-fluid' src={ImgSymbol5} width={25} height={30}></img> menampilkan filter yang sedang dipilih.<br></br>
                      <img className='img-fluid' src={ImgSymbol5} width={25} height={30}></img> memperbesar [full screen] dan fokus pada grafik terpilih.<br></br><br></br>
                      <p>Menu ketika sebuah grafik di klik kanan.</p>
                      <img className='img-fluid' src={ImgTable2} width={400} height={150}></img>
                      <p>Show as a Table → dipilih, maka akan menampilkan data dalam bentuk tabel Show next level/Expand to next level → dipilih, maka akan menampilkan informasi yang lebih detail. Contoh jika kondisi grafik menampilkan level
                        kabupaten maka setelah diklik show next level akan menampilkan data level kecamatan.</p>
                      <p>Ketika grafik dalam level terbawah dan menekan klik kanan mouse pada grafik, maka akan muncul menu Drill up yang berfungsi menaikan level data yang ditampilkan, misal data kecamatan menjadi data kabupaten, seperti gambar di bawah</p>
                      <img className='img-fluid' src={ImgTable3} width={400} height={150}></img>
                    </td>
                  </tr>
                  <tr>
                    <td className='fw-bold'>Halaman Utama</td>
                    <td><a href={ImgTable4} target='blank'><img className='img-fluid rounded-2' src={ImgTable4} width={400} height={150}></img></a>
                      <p className='mt-2'>Halaman utama menginformasikan tentang pendapatan E-SAMSAT berdasarkan wilayah (menu wilayah)</p>
                      <p>Daftar grafik pada dashboard wilayah terdiri dari:
                        <ul>
                          <li>Grafik Donat Penerimaan Denda</li>
                          <li>Grafik Donat Penerimaan berdasar plat</li>
                          <li>Grafik Peta (GIS) tentang Nilai Penetapan, Nilai Denda, dan Nilai Pembayaran menurut Tahun Anggaran</li>
                          <li>Grafik Donat Penerimaan berdasar wilayah</li>
                        </ul>
                      </p>
                      <p>Masing-masing grafik dan fungsinya dapat dijelaskan seperti di bawah ini.</p>
                      <p className='mb-1'>Grafik Donat Penerimaan Denda berdasar Plat.</p>
                      <img className='img-fluid rounded-2' src={ImgTable5} width={200} height={150}></img>
                      <p className='mt-2'>Menyajikan informasi nilai penerimaan/pembayaran yang diterima berdasarkan warna plat nomor kendaraan</p>
                      <p className='mb-1'>Grafik Donat Penerimaan berdasar Plat</p>
                      <img className='img-fluid rounded-2' src={ImgTable6} width={200} height={150}></img>
                      <p className='mt-1'>Menyajikan informasi nilai penerimaan/pembayaran yang diterima
                        berdasarkan warna plat nomor kendaraan</p>
                      <p className='mb-1'>Grafik Peta (GIS) tentang Nilai Penetapan, Nilai Denda, dan Nilai Pembayaran menurut Tahun Anggaran</p>
                      <img className='img-fluid rounded-2' src={ImgTable7} width={400} height={150}></img>
                      <p className='mt-1'>Menyajikan informasi nilai penetapan, nilai denda, dan nilai pembayaran, yang diterima berdasarkan wilayah, dengan tool tips grafik bar</p>
                      <p>Grafik Donat Penerimaan berdasar Wilayah Menyajikan informasi nilai penetapan, nilai denda, dan nilai pembayaran,
                        yang diterima berdasarkan wilayah, beserta persentase dari nilai total</p>
                    </td>
                  </tr>
                  <tr>
                    <td className='fw-bold'>Menu</td>
                    <td>Menu dashboard terdapat pada baris paling bawah halaman utama<br></br>
                      <img className='img-fluid rounded-2' src={ImgTable8} width={100} height={100}></img><br></br>
                      Klik pada kata of untuk menampilkan daftar menu, dan akan terlihat sebagai berikut.<br></br>
                      <a href={ImgTable9} target='blank'><img className='img-fluid rounded-2' src={ImgTable9} width={200} height={150}></img></a><br></br>
                      Gulung ke bawah untuk melihat menu lebih lengkap Pilih menu dashboard yang ingin dilihat
                    </td>
                  </tr>
                  <tr>
                    <td className='fw-bold'>Dashboard Pajak Kendaraan Bermotor (PKB)</td>
                    <td><a href={ImgTable10} target='blank'><img className='img-fluid rounded-2' src={ImgTable10} width={400} height={150}></img></a>
                      <br></br>Menyajikan informasi nilai penetapan, nilai denda, dan nilai pembayaran, yang diterima berdasarkan Transaksi</td>
                  </tr>
                  <tr>
                    <td className='fw-bold'>Dashboard Setoran</td>
                    <td><a href={ImgTable11} target='blank'><img className='img-fluid rounded-2' src={ImgTable11} width={400} height={150}></img></a>
                      <br></br>Menyajikan informasi nilai setoran yang diterima berdasarkan UPT</td>
                  </tr>
                  <tr>
                    <td className='fw-bold'>Dashboard Unit Pelaksana Teknis (UPT) Samsat</td>
                    <td><a href={ImgTable12} target='blank'><img className='img-fluid rounded-2' src={ImgTable12} width={400} height={150}></img></a>
                      <br></br>Menyajikan informasi jumlah unit kendaraan berdasarkan UPT tempat mendaftar</td>
                  </tr>
                  <tr>
                    <td className='fw-bold'>Dashboard Transaksi</td>
                    <td><a href={ImgTable13} target='blank'><img className='img-fluid rounded-2' src={ImgTable13} width={400} height={150}>
                    </img></a><br></br>Menyajikan informasi jumlah kendaraan berdasarkan jenis transaksi Dan nilai penetapan per transaksi</td>
                  </tr>
                  <tr>
                    <td className='fw-bold'>Dashboard Rekening APBD</td>
                    <td><a href={ImgTable14} target='blank'><img className='img-fluid rounded-2' src={ImgTable14} width={400} height={150}></img></a>
                      <br></br>Menyajikan informasi nilai penerimaan Pajak Kendaraan Bermotor yang diterima berdasarkan tahun anggaran dan berdasarkan UPT
                    </td>
                  </tr>
                  <tr>
                    <td className='fw-bold'>Dashboard Kendaraan</td>
                    <td><a href={ImgTable15} target='blank'><img className='img-fluid rounded-2' src={ImgTable15} width={400} height={150}></img></a>
                      <br></br>Menyajikan informasi jumlah kendaraan berdasarkan: Merk; Kepemilikan; Kegunaan; Jenis BBM; Model; Jenis Kendaraan; Warna Plot Nomor
                    </td>
                  </tr>
                  <tr>
                    <td className='fw-bold'>Dashboard Tahun Kendaraan</td>
                    <td><a href={ImgTable16} target='blank'><img className='img-fluid rounded-2' src={ImgTable16} width={400} height={150}></img></a>
                      <br></br>Menyajikan informasi jumlah kendaraan berdasarkan umur dan jenis tarif
                    </td>
                  </tr>
                  <tr>
                    <td className='fw-bold'>Dashboard Pemilik</td>
                    <td><a href={ImgTable17} target='blank'><img className='img-fluid rounded-2' src={ImgTable17} width={400} height={150}></img></a>
                      <br></br>Menyajikan informasi Pemilik Kendaraan terbanyak beserta jenis kendaraan serta pembayaran dan penetapannya
                    </td>
                  </tr>
                  <tr>
                    <td className='fw-bold'>Dashboard Progress</td>
                    <td><a href={ImgTable18} target='blank'><img className='img-fluid rounded-2' src={ImgTable18} width={400} height={150}></img></a>
                      <br></br>Menyajikan informasi Pemilik Kendaraan terbanyak beserta jenis kendaraan serta pembayaran dan penetapannya
                    </td>
                  </tr>
                  <tr>
                    <td className='fw-bold'>Dashboard Jenis Pungutan</td>
                    <td><a href={ImgTable19} target='blank'><img className='img-fluid rounded-2' src={ImgTable19} width={400} height={150}></img></a>
                      <br></br>Menyajikan informasi pelunasan, tunggakan berdasarkan transaksi dan tahun anggaran.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
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

export default AnalisisEsamsat