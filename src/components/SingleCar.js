import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSingleCar, selectSingleCar } from "../store/singleCarSlice";

export default function SingleCar() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleCar(id));
  }, [dispatch, id]);

  const car = useSelector(selectSingleCar);

  return (
    <div>
      <div className="single-car-img">
        {car.id && <img src={car.image} alt="car" />}
      </div>
      <div className="single-car-make">{car.make}</div>
      <div className="single-car-model">{car.model}</div>
      <div className="single-car-year">{car.year}</div>

      <article className="single-car-article">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut esse
        dignissimos ducimus reprehenderit tempora ipsam voluptatum consequatur
        officia facilis amet impedit est, voluptate eveniet mollitia dolorem eos
        fugiat, commodi quidem, animi rerum? Illum, dolorem nobis ipsa porro
        facere ut eius. Quam qui accusantium mollitia quisquam culpa id, autem
        cumque ullam quos temporibus facilis a necessitatibus! At voluptatibus
        odit voluptatem corporis amet, soluta sit quibusdam quas sequi cum?
        Voluptas fugiat in consequuntur molestiae, necessitatibus nesciunt
        nostrum ratione, quo sunt sit perspiciatis expedita. Suscipit hic
        nesciunt labore consequuntur ex, dolor fuga saepe maiores voluptas
        libero corrupti, temporibus enim asperiores cumque quia! Qui alias
        soluta dolores. Ipsam explicabo facilis tempore, alias molestiae
        eligendi minus maiores totam veritatis libero laboriosam iure iusto
        expedita architecto. Quae animi voluptatum eaque aperiam, ullam officia
        et ipsum autem rerum commodi repellendus fuga ab pariatur quasi,
        consectetur alias a laudantium incidunt, distinctio dolorem odio facere
        enim! Molestias, aliquid itaque.
      </article>
    </div>
  );
}
