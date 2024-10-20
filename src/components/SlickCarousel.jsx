import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardHeader, CardBody, Button } from "react-bootstrap";

// Import Slick CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ onClick }) => (
  <Button
    onClick={onClick}
    className="slick-prev"
    variant="outline"
    style={{ zIndex: 10 }}
  >
    <ChevronLeft />
  </Button>
);

const NextArrow = ({ onClick }) => (
  <Button
    onClick={onClick}
    className="slick-next"
    variant="outline"
    style={{ zIndex: 10 }}
  >
    <ChevronRight />
  </Button>
);

const SlickCarouselExamples = () => {
  const basicSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="container mt-4">
      <Card>
        <CardHeader>Basic Slider</CardHeader>
        <CardBody>
          <Slider {...basicSettings}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1729073402241-4e37935cabe4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
                height={300}
                width={300}
                alt="Slide 1"
                style={{ maxWidth: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1729073402241-4e37935cabe4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
                height={300}
                width={300}
                alt="Slide 2"
                style={{ maxWidth: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1729073402241-4e37935cabe4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
                height={300}
                width={300}
                alt="Slide 3"
                style={{ maxWidth: "100%", height: "auto", display: "block" }}
              />
            </div>
          </Slider>
        </CardBody>
      </Card>
    </div>
  );
};

export default SlickCarouselExamples;
