import { Carousel } from "react-bootstrap";
import img01 from "./../img/atleta.jpg";
import img02 from "./../img/corrida.jpg";
import img03 from "./../img/mulher.jpg";


function CarouselAnuncios() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img01} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img02} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img03} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselAnuncios;
