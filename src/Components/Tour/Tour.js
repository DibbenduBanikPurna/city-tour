import React, { useState } from 'react';
import { tourData } from '../Data/Data';
import TourDetail from './TourDetail';

const Tour = () => {
    const [tour, setTour] = useState(tourData)
    const handleDelete = (id) => {

        const remaining = tour.filter((tour) => tour.id !== id)
        setTour(remaining);
    }

    return (
        <div className="container">
            <div className="row mt-5">
                {
                    tour.map((tour) => {
                        return <TourDetail handleDelete={handleDelete} key={tour.id} tour={tour} />
                    })
                }
            </div>

        </div>
    );
};

export default Tour;