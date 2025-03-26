import React, { useContext, useEffect, useState } from "react"
import defaultImage from "../../img/StarWars_Logo.png"
import { useParams } from "react-router"
import { Context } from "../store/appContext";

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


export const PeopleDetails = () => {
  const { id } = useParams()
  const { actions } = useContext(Context);
  const [people, setPeople] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      setPeople(await actions.getPeopleById(id))
    }
    fetchData()
  }, [people])

  return (
    <div className="container d-flex flex-column min-vh-100">
      <h1 className="text-bg-light p-3">{people?.result.properties.name}</h1>
      <div className="row">
        <div className="col">
          <div className="card mb-3 bg-secondary">
            <div className="row g-0">
              <div className="col-md-4">
                <img onError={(e) => e.target.src = defaultImage} src={peopleImages[id]} className="img-fluid rounded-start" alt="Planet image" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{people?.result.properties.name}</h5>
                  <p className="card-text">{people?.result.description}</p>
                </div>
              </div>
            </div>
          </div>
          <ul className="list-group list-group-horizontal w-100">
            <li className="col list-group-item list-group-item-dark text-center">
              <h3>Gender</h3>
              <p className="fs-4">{people?.result.properties.gender}</p>
            </li>
            <li className="col list-group-item list-group-item-secondary text-center">
              <h3>Height</h3>
              <p className="fs-4">{people?.result.properties.height} cm</p>
            </li>
            <li className="col list-group-item list-group-item-dark text-center">
              <h3>Skin Color</h3>
              <p className="fs-4">{people?.result.properties.skin_color}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}