import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = (props) => {
    const { store, actions } = useContext(Context);
	
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <span className="navbar-brand mx-3 h1">LOGO</span>
            </Link>
            <div className="dropdown">
                <button
                    className="btn btn-primary dropdown-toggle mx-5"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Favorites {store.favorites.length}
                </button>
                <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                >
                    {store.favorites.map((f) => (
                        <li>
                            <Link className="dropdown-item" to={f.type+ "/" + f.uid}>
                                {f.name}
                            </Link>
                            <i
                                onClick={() => actions.deleteFavorite(f)}
                                className="fas fa-trash"
                            ></i>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
