import React, { useMemo } from 'react'
import { GetHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
    //usando memo el getHeroesByPublisher solo se ejecuta cuando cambia publisher
    const heroes = useMemo(()=>GetHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {heroes.map((hero)=>
            <HeroCard key={hero.id} {...hero}/>
        )}
    </div>
  )
}
