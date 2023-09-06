import React, { useState } from 'react';
import { COSTUMES } from '../app/shared/COSTUMES';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === COSTUMES.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? COSTUMES.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = COSTUMES.map((costume) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={costume.id}
      >
        <img className='photo' src={costume.image} alt={costume.name} />

        <CarouselCaption
          captionText={costume.description}
          captionHeader={costume.name}
        />
        </CarouselItem>
    );
  });

  return (
    <Container>
        <Row className='d-flex justify-content-center'>
            <Col md='10'>
                <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                {...args}
                >
                <CarouselIndicators
                    items={COSTUMES}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
                </Carousel>
            </Col>
        </Row>
    </Container>
  );
}

export default Example;
