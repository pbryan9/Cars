import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCars, selectAllCars } from '../store/carSlice';
import { Link } from 'react-router-dom';

export default function Cars() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const cars = useSelector(selectAllCars);

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="car-card">
        <img src="" alt="imgUrl" />
        <Link to={`/cars/${car.id}`} className="car-card-info">
          See car info
        </Link>
      </div>
    );
  });

  return (
    <div>
      <div className="main-container">
        {cars.length > 0 && renderedCars}
        <article className="article">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            cumque sunt vitae, aut molestias officia harum esse facilis modi
            omnis tenetur ducimus mollitia blanditiis sit voluptates repellendus
            ratione recusandae. Facilis nam quae pariatur cupiditate! Voluptatem
            inventore nam vel facilis labore odio cumque quisquam qui quia cum,
            tempora quasi? Beatae numquam omnis natus quae, recusandae possimus,
            fuga sit vero quia tempore officiis eum architecto ullam, placeat
            consequatur laboriosam? Non minima tempore, ex fugit laborum minus
            ad natus veniam nihil iure facere ea obcaecati quasi quibusdam
            beatae iste voluptatum? Molestiae facere, incidunt voluptatum a iure
            quia, reprehenderit adipisci fugiat placeat quos consectetur maiores
            pariatur excepturi error eum autem possimus illum velit voluptas
            iste modi in. Beatae labore eligendi assumenda praesentium quasi
            dicta dolorum. Vitae quia molestias aspernatur facilis unde. Nostrum
            nam quod sed dolorem hic voluptatem ullam non et porro tempora atque
            quidem, minus delectus distinctio nisi ea esse omnis nemo possimus
            molestiae quo commodi vitae magni illo. Ipsam, itaque! Eius iste
            itaque velit odio, nostrum quo tempore obcaecati vero tempora
            voluptatibus et eaque dolore adipisci fugit aspernatur corporis.
            Nulla ducimus autem, nihil quis eligendi asperiores doloremque
            temporibus. Officia optio ullam error nisi tempore! Voluptatem,
            assumenda. Aut laborum corporis sed necessitatibus distinctio?
          </p>
        </article>
      </div>
    </div>
  );
}
