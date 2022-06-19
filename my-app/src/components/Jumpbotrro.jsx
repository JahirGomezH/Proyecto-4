import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import '../index.css'

const Jumpbotrro = () => {
  return (
    <div>
        <Container className='align-items-center'>
        <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="https://i1.wp.com/irecetasfaciles.com/wp-content/uploads/2020/10/Ratatouille.jpg?resize=1021%2C580&ssl=1"
      alt="Ratatouille"
      id='Carous'
    />
    <Carousel.Caption>
      <h5 className="text-white display-3"> <em>First slide label</em></h5>
      <p className="text-white display-6">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="https://soyvinicola.com/wp-content/uploads/2019/05/vino.jpg"
      alt="FriesHamburger"
      id='Carous'
    />
    <Carousel.Caption>
      <h5 className="text-white">Second slide label</h5>
      <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.embutidosgarcializana.com/blog/wp-content/uploads/2014/07/maridaje-de-vino-con-queso-e1610703683593.jpg"
      alt="CheeseWine"
      id='Carous'
    />
    <Carousel.Caption>
      <h5 className="text-white">Third slide label</h5>
      <p className="text-white">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
    </div>
  )
}

export default Jumpbotrro