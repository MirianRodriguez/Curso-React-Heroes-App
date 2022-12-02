import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { GetHeroById } from '../helpers';

export const HeroPage = () => {
  //hook para recuperar los parámetros pasados por url
  const arg = useParams();

  const navigate = useNavigate();

  const {id} = arg;
  //usando memo el getHeroById sólo se ejecuta cuando cambia el id
  const hero = useMemo(() => GetHeroById(id), [id]);

  const onBack = () => {
    navigate(-1);
  }

  if(!hero){
    return (<Navigate to='/marvel'/>);
  }

  return (
    <div className="row mt-5 container">
      <div className="col-4">
        <img src={`/assets/heroes/${id}.jpg`}
        alt={hero.superhero}
        className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
          <li className="list-group-item"><b>First appearance: </b>{hero.first_appearance}</li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary"
        onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  )
}
