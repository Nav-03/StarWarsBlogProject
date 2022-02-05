import React, { useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = (props) => {
  const { entity } = props;
  const { store, actions} = useContext(Context);

  let buttonClass = "btn btn-outline-danger";
  if(props.isFavorite) buttonClass = "btn btn-danger";

  // console.log("the card for "+entity.name+" has the class "+buttonClass, props.isFavorite);

  return (
    <div className="card mx-4" style={{ width: "20rem", display: "inline-block" }}>
      <img className="card-img-top" width="200px" height="300px" src={store.images[entity.type + entity.uid] || "https://snr.unl.edu/images/portrait-large/staff/whiteblank.gif"} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{entity.name}</h5>
        <p className="card-text text-wrap">{entity.climate})</p>
        <div className="d-flex justify-content-around align-items-center">
        <Link to={`${entity.type}/${entity.uid}`}>
          <a href="#" className="btn btn-primary ">Learn More!</a>
         </Link>
          <button className={buttonClass} onClick={()=>props.isFavorite?actions.deleteFavorite(entity):actions.addFavorites(entity)}>            
            <i className="fas fa-heart "></i>
          </button>
          
        </div>

      </div>
    </div>
  )
}




export default Card;