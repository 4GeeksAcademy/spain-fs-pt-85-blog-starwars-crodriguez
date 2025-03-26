import React, { useContext, useEffect, useState } from "react"
import defaultImage from "../../img/StarWars_Logo.png"
import { useParams } from "react-router"
import { Context } from "../store/appContext";

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


export const VehicleDetails = () => {
  const { id } = useParams()
  const { actions } = useContext(Context);
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      setVehicle(await actions.getVehicleById(id))
    }
    fetchData()
  }, [vehicle])

  return (
    <div className="container d-flex flex-column min-vh-100">
      <h1 className="text-bg-light p-3">{vehicle?.result.properties.name}</h1>
      <div className="row">
        <div className="col">
          <div className="card mb-3 bg-secondary">
            <div className="row g-0">
              <div className="col-md-4">
                <img onError={(e) => e.target.src = defaultImage} src={vehicleImages[id]} className="img-fluid rounded-start" alt="vehicle image" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{vehicle?.result.properties.name}</h5>
                  <p className="card-text">{vehicle?.result.description}</p>
                </div>
              </div>
            </div>
          </div>
          <ul className="list-group list-group-horizontal w-100 ">
            <li className="col list-group-item list-group-item-secondary text-center">
              <h3>Manufacturer</h3>
              <p className="fs-4">{vehicle?.result.properties.manufacturer}</p>
            </li>
            <li className="col list-group-item list-group-item-secondary text-center">
              <h3>Model</h3>
              <p className="fs-4">{vehicle?.result.properties.model} cm</p>
            </li>
            <li className="col list-group-item list-group-item-secondary text-center">
              <h3>Passengers</h3>
              <p className="fs-4">{vehicle?.result.properties.passengers}</p>
            </li>
            <li className="col list-group-item list-group-item-secondary text-center">
              <h3>Cost in credits</h3>
              <p className="fs-4">{vehicle?.result.properties.cost_in_credits}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}