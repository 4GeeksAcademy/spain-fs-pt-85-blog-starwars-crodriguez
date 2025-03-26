import React, { useContext, useEffect, useState } from "react"
import defaultImage from "../../img/StarWars_Logo.png"
import { useParams } from "react-router"
import { Context } from "../store/appContext";

import planet1 from "../../img/planets/p1.jpeg";
import planet2 from "../../img/planets/p2.jpeg";
import planet3 from "../../img/planets/p3.jpeg";
import planet4 from "../../img/planets/p4.jpeg";
import planet5 from "../../img/planets/p5.jpeg";
import planet6 from "../../img/planets/p6.jpeg";
import planet7 from "../../img/planets/p7.jpeg";
import planet8 from "../../img/planets/p8.jpeg";
import planet9 from "../../img/planets/p9.jpeg";
import planet10 from "../../img/planets/p10.jpeg";

const planetImages = {
    1: planet1,
    2: planet2,
    3: planet3,
    4: planet4,
    5: planet5,
    6: planet6,
    7: planet7,
    8: planet8,
    9: planet9,
    10: planet10,
  };

export const PlanetDetails = () => {
  const { id } = useParams()
  const { actions } = useContext(Context);
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      setPlanet(await actions.getPlanetById(id))
    }
    fetchData()
  }, [planet])


  return (
    <div className="container d-flex flex-column min-vh-100">
      <h1 className="text-bg-light p-3">{planet?.result.properties.name}</h1>
      <div className="row">
        <div className="col">
          <div className="card mb-3 bg-secondary">
            <div className="row g-0">
              <div className="col-md-4">
                <img onError={(e) => e.target.src = defaultImage} src={planetImages[id]} className="img-fluid rounded-start" alt="Planet image" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{planet?.result.properties.name}</h5>
                  <p className="card-text">{planet?.result.description}</p>
                </div>
              </div>
            </div>
          </div>
          <ul className="list-group list-group-horizontal w-100">
            <li className="col list-group-item list-group-item-secondary text-center">
              <h3>Climate</h3>
              <p className="fs-4">{planet?.result.properties.climate}</p>
            </li>
            <li className="col list-group-item list-group-item-secondary text-center">
              <h3>Population</h3>
              <p className="fs-4">{planet?.result.properties.population} habitants</p>
            </li>
            <li className="col list-group-item list-group-item-secondary text-center">
              <h3>Terrain</h3>
              <p className="fs-4">{planet?.result.properties.terrain}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}