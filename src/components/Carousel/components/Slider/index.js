import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
import { GrPrevious, GrNext } from 'react-icons/gr';

const Container = styled.ul`
  padding: 0;
  margin-bottom: 30px;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    background-color: var(--white);
    border-radius: 30%;
    &:before {
      font-size: 30px;
    }
  }

  .slick-prev {
    left: 16px;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

function ButtonPrev(props) {
  const { className, style, onClick } = props;
  return (
    <GrPrevious className="slick-prev"
    style={style}
    onClick={onClick}/>
  );
}

function ButtonNext(props) {
  const { className, style, onClick } = props;
  return (
    <GrNext className={className}
    style={style}
    onClick={onClick}/>
  );
}

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: true,
      infinite: true,
      speed: 350,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow: <ButtonPrev />,
      nextArrow: <ButtonNext />,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;