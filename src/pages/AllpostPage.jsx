import { Container, Row, Col } from "react-bootstrap"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// Link Data
import { Link } from 'react-router-dom';
import { dataSwiper } from '../data';


const AllpostPage = () => {
  return (
    <div>
      <Container>
        <Row className="all-post d-flex justify-content-center mb-4">
          <h1 className="fs-2 fw-bold mt-4">Berita</h1>
          <div className="swiper-2 ">
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
                      <Link to={data.path}><img className='img-fluid' src={data.image} /></Link>
                    </Col>
                    <Col >
                      <p className='text-start fs-6 mb-1'>{data.post}</p>
                      <Link to={data.path}><h3 className='text-start fw-bold fs-4'>{data.title}</h3></Link>
                      <Link to={data.path}><p className='text-start fw-light fs-6'>{data.text}</p></Link>
                    </Col>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default AllpostPage