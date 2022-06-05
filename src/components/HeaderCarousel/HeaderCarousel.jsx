import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './HeaderCarousel.css';
import {Carousel} from 'react-bootstrap';

function HeaderCarousel() {
    useEffect(() => {
        dispatch({ type: 'FETCH_COVERS' });
    }, []);

    const dispatch = useDispatch();
    const covers = useSelector((store) => store.covers);

    const carouselStyle = {
        controls: false,
        indicators: false
    }

    return (
        <div id="header-carousel">
            <Carousel
                controls={false}
                indicators={false}
            >
                {covers &&
                covers.map((cover) => {
                    return (
                        <Carousel.Item
                            style={carouselStyle}
                        >
                            <img
                                id="carousel-image"
                                src={cover.src}
                                key={cover.id}
                            />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default HeaderCarousel;