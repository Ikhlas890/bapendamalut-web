import { Container, Row, Col, Nav } from 'react-bootstrap'
// import React, { useRef, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// Image Header
import Slide1 from '../assets/img/slide-1.webp'
import Slide2 from '../assets/img/slide-2.webp'
import Slide3 from '../assets/img/slide-3.webp'
import Slide4 from '../assets/img/slide-4.webp'

// Video
import video1 from '../assets/img/video/video-bapenda.mp4'


// Link Data
import { Link } from 'react-router-dom';
import { blogSide, dataSwiper, postSide } from '../data';

const HomePage = () => {
  return (
    <div>
      <header className='mt-5 mb-4'>
        <Container>
          <Row>
            <Col className='swiper-header'>
              <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                
                <SwiperSlide><img src={Slide1} className='img-fluid' alt='Image Header 1'></img></SwiperSlide>
                <SwiperSlide><img src={Slide2} className='img-fluid' alt='Image Header 2'></img></SwiperSlide>
                <SwiperSlide><img src={Slide3} className='img-fluid' alt='Image Header 3'></img></SwiperSlide>
                <SwiperSlide><img src={Slide4} className='img-fluid' alt='Image Header 4'></img></SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </header>

      <Container>
        <Row className=' d-flex justify-content-between align-items-center mt-2 mb-4'>
          <Col>
            <h1 className='fw-bold'>Berita</h1>
          </Col>
          <Col className='more p-2 text-end'>
            <Link className='text-dark' to='/lihat-semua-post'>Lihat Semua Post</Link>
          </Col>
          <hr></hr>
        </Row>

        <Row className='content-blog d-flex justify-content-center'>
          <div className='swiper-blog'>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >

              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id}>
                    <Col className='img-blog m-3'>
                      <Link to={data.path}><img className='img-fluid' src={data.image} width={300} height={300} alt='Gambar Artikel' /></Link>
                    </Col>
                    <Col>
                      <p className='text-start fs-6 mb-1'>{data.post}</p>
                      <Link to={data.path}><h2 className='text-start fw-bold fs-4'>{data.title}</h2></Link>
                      <Link to={data.path}><p className='text-start fw-light fs-6'>{data.text}</p></Link>
                    </Col>
                  </SwiperSlide>
                )
              })}

            </Swiper>
          </div>

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

export default HomePage