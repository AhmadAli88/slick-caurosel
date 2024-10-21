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
  const multipleItemsSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const centerModeSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: true,
  };
  const variableWidthSettings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  const customArrowsSettings = {
    ...basicSettings,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const autoplaySettings = {
    ...basicSettings,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mt-4">
      <Card>
        <CardHeader>Basic Slider</CardHeader>
        <CardBody>
          <Slider {...basicSettings}>
            <div className="centralize_image">
              <img
                src="https://images.unsplash.com/photo-1729073402241-4e37935cabe4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
                height="auto"
                width="auto"
                alt="Slide 1"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="centralize_image">
              <img
                src="https://images.unsplash.com/photo-1729073402241-4e37935cabe4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
                height="auto"
                width="auto"
                alt="Slide 1"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="centralize_image">
              <img
                src="https://images.unsplash.com/photo-1729073402241-4e37935cabe4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
                height="auto"
                width="auto"
                alt="Slide 1"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </Slider>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Multiple Items</CardHeader>
        <CardBody>
          <Slider {...multipleItemsSettings}>
            <div style={{ padding: "10px" }}>
              <div style={{ height: "300px", width: "100%" }}>
                <img
                  src="https://images.unsplash.com/photo-1702655358709-57cae9ec8c65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div style={{ padding: "10px" }}>
              <div style={{ height: "300px", width: "100%" }}>
                <img
                  src="https://images.unsplash.com/photo-1729391512126-c799d8d3f378?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div style={{ padding: "10px" }}>
              <div style={{ height: "300px", width: "100%" }}>
                <img
                  src="https://images.unsplash.com/photo-1729180801690-d7db9ea35867?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div style={{ padding: "10px" }}>
              <div style={{ height: "300px", width: "100%" }}>
                <img
                  src="https://images.unsplash.com/photo-1729180801678-4a81ace3ac78?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div style={{ padding: "10px" }}>
              <div style={{ height: "300px", width: "100%" }}>
                <img
                  src="https://images.unsplash.com/photo-1729279888412-d2637f49b0e0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </Slider>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Center Mode</CardHeader>
        <CardBody>
          <Slider {...centerModeSettings}>
            <div style={{ height: "300px", width: "100%" }}>
              <img
                src="https://images.unsplash.com/photo-1702655358709-57cae9ec8c65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ height: "300px", width: "100%" }}>
              <img
                src="https://images.unsplash.com/photo-1702655358709-57cae9ec8c65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ height: "300px", width: "100%" }}>
              <img
                src="https://images.unsplash.com/photo-1702655358709-57cae9ec8c65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </Slider>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Variable Width</CardHeader>
        <CardBody>
          <Slider {...variableWidthSettings}>
            <div className="variable-image">
              <img
                src="https://plus.unsplash.com/premium_photo-1720885652263-17b2be207129?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="variable-image">
              <img
                src="https://plus.unsplash.com/premium_photo-1720885652263-17b2be207129?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
           
          </Slider>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Custom Arrows</CardHeader>
        <CardBody>
          <Slider {...customArrowsSettings}>
            <div><h3 className="text-center bg-gray-200 p-4">Slide 1</h3></div>
            <div><h3 className="text-center bg-gray-300 p-4">Slide 2</h3></div>
            <div><h3 className="text-center bg-gray-400 p-4">Slide 3</h3></div>
          </Slider>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Autoplay</CardHeader>
        <CardBody>
          <Slider {...autoplaySettings}>
            <div><h3 className="text-center bg-red-200 p-4">Slide 1</h3></div>
            <div><h3 className="text-center bg-blue-200 p-4">Slide 2</h3></div>
            <div><h3 className="text-center bg-green-200 p-4">Slide 3</h3></div>
          </Slider>
        </CardBody>
      </Card>

    </div>
  );
};

export default SlickCarouselExamples;
