import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/StarWars_Logo.png"
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-secondary bg-secondary mb-3">
			<div className="container">
				<Link to="/">
					<img src={logo} height={64} />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
							<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
								{(store.favorites.people.length + store.favorites.vehicles.length + store.favorites.planets.length) || 0}
								<span className="visually-hidden">unread messages</span>
							</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-end text-center">
							<li><h6 className="dropdown-header text-danger">People</h6></li>
							{
								store.favorites.people && store.favorites.people.length > 0 ? (
									store.favorites.people.map((item) => (
										<li className="dropdown-item" key={item.result.uid}>
											<Link to={`/people-details/${item.result.uid}`}>{item.result.properties.name}</Link>
											<button className="btn-close" onClick={() => actions.toggleFavorite(item, "people")}></button>
										</li>
									))
								) : (
									<li className="dropdown-item">No favorites</li>
								)
							}
							<li><h6 className="dropdown-header text-danger">Planets</h6></li>
							{
								store.favorites.planets && store.favorites.planets.length > 0 ? (
									store.favorites.planets.map((item) => (
										<li className="dropdown-item" key={item.result.uid}>
											<Link to={`/planet-details/${item.result.uid}`}>{item.result.properties.name}</Link>
											<button className="btn-close" onClick={() => actions.toggleFavorite(item, "planets")}></button>
										</li>
									))
								) : (
									<li className="dropdown-item">No favorites</li>
								)
							}
							<li><h6 className="dropdown-header text-danger">Vehicles</h6></li>
							{
								store.favorites.vehicles && store.favorites.vehicles.length > 0 ? (
									store.favorites.vehicles.map((item) => (
										<li className="dropdown-item" key={item.result.uid}>
											<Link to={`/vehicle-details/${item.result.uid}`}>{item.result.properties.name}</Link>
											<button className="btn-close" onClick={() => actions.toggleFavorite(item, "vehicles")}></button>
										</li>
									))
								) : (
									<li className="dropdown-item">No favorites</li>
								)
							}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};