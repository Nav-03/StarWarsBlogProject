import React, { useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = (props) => {
  const { entity } = props;
  const { store, actions} = useContext(Context);

  let buttonClass = "btn btn-outline-danger";
  if(props.isFavorite) buttonClass = "btn btn-danger";

  console.log("the card for "+entity.name+" has the class "+buttonClass, props.isFavorite);

  return (
    <div className="card mx-4" style={{ width: "20rem", display: "inline-block" }}>
      <img className="card-img-top" width="200px" height="300px" src={store.images[entity.type + entity.uid] || "https://snr.unl.edu/images/portrait-large/staff/whiteblank.gif"} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{entity.name}</h5>
        <p className="card-text text-wrap">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="d-flex justify-content-around align-items-center">
        <Link to={`${entity.type}/${entity.uid}`}>
          <a href="#" className="btn btn-primary ">Learn More!</a>
         </Link>
<<<<<<< HEAD
          <button className={buttonClass} onClick={()=>props.isFavorite?actions.deleteFavorite(entity):actions.addFavorites(entity)}>            
=======
          <button className={buttonClass} onClick={()=> actions.addFavorites(entity)}>            
>>>>>>> a5108cc826a51128b1cf78ebac3de9e93cf9f97a
            <i className="fas fa-heart "></i>
          </button>
          
        </div>

      </div>
    </div>
  )
}




export default Card;