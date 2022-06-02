import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Carousel} from 'react-bootstrap';

function HeaderCarousel() {
    const dispatch = useDispatch();
    const covers = useSelector((store) => store.covers);

    useEffect(() => {
        dispatch({ type: 'FETCH_COVERS' });
    }, []);

    return (
        <>
            <Carousel>
                {covers &&
                covers.map((cover) => {
                    console.log('*************************************************************************', cover);
                    return (
                        <Carousel.Item>
                            <img src={cover.src} key={cover.id} />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </>
    )
}

export default HeaderCarousel;