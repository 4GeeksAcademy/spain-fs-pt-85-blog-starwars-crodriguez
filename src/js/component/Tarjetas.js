import React, { useContext, useEffect, useState } from "react"
import defaultImage from "../../img/StarWars_Logo.png"
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


import people1 from "../../img/people/1.jpeg";
import people2 from "../../img/people/2.jpeg";
import people3 from "../../img/people/3.jpeg";
import people4 from "../../img/people/4.jpeg";
import people5 from "../../img/people/5.jpeg";
import people6 from "../../img/people/6.jpeg";
import people7 from "../../img/people/7.jpeg";
import people8 from "../../img/people/8.jpeg";
import people9 from "../../img/people/9.jpeg";
import people10 from "../../img/people/10.jpeg";
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
import vehicle4 from "../../img/vehicles/v1.jpg";
import vehicle7 from "../../img/vehicles/v2.jpg";
import vehicle6 from "../../img/vehicles/v3.jpg";
import vehicle8 from "../../img/vehicles/v4.jpg";
import vehicle14 from "../../img/vehicles/v5.jpg";
import vehicle18 from "../../img/vehicles/v6.jpg";
import vehicle16 from "../../img/vehicles/v7.jpg";
import vehicle19 from "../../img/vehicles/v8.jpg";
import vehicle20 from "../../img/vehicles/v9.jpg";
import vehicle24 from "../../img/vehicles/v10.jpg";


const peopleImages = {
  1: people1,
  2: people2,
  3: people3,
  4: people4,
  5: people5,
  6: people6,
  7: people7,
  8: people8,
  9: people9,
  10: people10,
};

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

const vehicleImages = {
  4: vehicle4,
  7: vehicle7,
  6: vehicle6,
  8: vehicle8,
  14: vehicle14,
  18: vehicle18,
  16: vehicle16,
  19: vehicle19,
  20: vehicle20,
  24: vehicle24,
};

export const Card = ({ id, type }) => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      if (type === "people") {
        setData(await actions.getPeopleById(id))
      } else if (type === "planets") {
        setData(await actions.getPlanetById(id))
      } else if (type === "vehicles") {
        setData(await actions.getVehicleById(id))
      }
    }
    fetchData();
  }, [])

  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }} data-bs-theme="dark">
        <img onError={(e) => e.target.src = defaultImage} src={type === "people" ? peopleImages[id] : type === "planets" ? planetImages[id] : vehicleImages[id]} className="card-img-top fotos" alt="image" />
        <div className="card-body d-flex flex-column justify-content-between" style={{ height: "100%", minHeight: "250px" }}>
          <h5 className="card-title">{data?.result.properties.name}</h5>
          {
            type === "people" && (
              <>
                <p className="card-text">Gender: {data?.result.properties.gender}</p>
                <p className="card-text">Hair Color: {data?.result.properties.hair_color}</p>
                <p className="card-text">Eye Color: {data?.result.properties.eye_color}</p>
                <div className="d-flex justify-content-between">
                  <Link to={`people-details/${id}`} className="btn btn-info">See details</Link>
                  <button className="btn btn-info" onClick={() => actions.toggleFavorite(data, "people")}>
                    {
                      store.favorites.people.find(favorite => favorite.result.properties.name === data?.result.properties.name) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>
                    }
                  </button>
                </div>
              </>
            )
          }
          {
            type === "planets" && (
              <>
                <p className="card-text">Population: {data?.result.properties.population}</p>
                <p className="card-text">Terrain: {data?.result.properties.terrain}</p>
                <div className="d-flex justify-content-between">
                  <Link to={`planet-details/${id}`} className="btn btn-info">See details</Link>
                  <button className="btn btn-info" onClick={() => actions.toggleFavorite(data, "planets")}>
                    {
                      store.favorites.planets.find(favorite => favorite.result.uid === data?.result.uid) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>
                    }
                  </button>
                </div>
              </>
            )
          }
          {
            type === "vehicles" && (
              <>
                <p className="card-text">Model: {data?.result.properties.model}</p>
                <p className="card-text">Manufacturer: {data?.result.properties.manufacturer}</p>
                <div className="d-flex justify-content-between">
                  <Link to={`vehicle-details/${id}`} className="btn btn-info">See details</Link>
                  <button className="btn btn-info" onClick={() => actions.toggleFavorite(data, "vehicles")}>
                    {
                      store.favorites.vehicles.find(favorite => favorite.result.properties.name === data?.result.properties.name) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>
                    }
                  </button>
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  )

}