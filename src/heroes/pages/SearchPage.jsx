import React from "react";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  //location tiene info del path donde estoy actualmente
  //tiene un atributo search donde figuran los query params
  const location = useLocation();

  //queryString hay que instalarlo, sirve para procesar los parametros de la url, separándolos como objeto
  const queryParams = queryString.parse(location.search);

  //desestructuro el param que me interesa y le pongo un valor por defecto
  const { q = "" } = queryParams;

  const heroes = getHeroByName(q);

  //para saber si mostrar o no los alerts
  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText.trim()}`);
    //console.log(location);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {(showSearch) && (<div className="alert alert-primary">Search a hero</div>)}
          
          {(showError) && (<div className="alert alert-danger">No result for <b>{q}</b></div>)}

          {heroes.map((hero) => 
            <HeroCard key={hero.id} {...hero}/>
          )}
        </div>
      </div>
    </>
  );
};
