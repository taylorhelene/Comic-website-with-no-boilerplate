import Footer from "../utils/Footer";
import React from "react";
import HeroSection from "./HeroSection";
import Header from "../utils/Header";
import Featured from "./Featured";
import FeaturedCharacters from "./FeaturedCharacters";
import Characters from "./Characters";
import Character from "./Character";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useQuery , gql  , useMutation} from "@apollo/client";


const HEROES = gql`
        query GetHeroes{
            heroes {
                id
                name
                xman
                snapped
                power
                image
                views
              }
        }

`
const HEROESLIST = gql`
            query GetSuperheroes{
                superheroeslist {
                    superhero
                    publisher
                    alter_ego
                    first_appearance
                    character
                    url
                  }
            }
`
const Home=()=>{

    const {loading, error ,data} = useQuery(HEROES);
    const a = loading ? 'Loading...' : '';
    const b = error ? `Error! ${error.message}`: '';

    const query2 = useQuery(HEROESLIST);

    return(
        <>
        <Header/>
        <HeroSection/>
        <Featured/>
        <div className="container">
            {a} {b}
            <div className="row">
                {data?.heroes.map((item)=>{
                    return(
                   
                    <FeaturedCharacters id={item.id} src={item.image} snapped={item.snapped} power={item.power} name={item.name} views={item.views}/>
                    
                    )
                })}
            </div>
        </div>
        <Characters/>
        <div className="container">
            {query2.error? `Error! ${error.message}`: ''}
            {query2.loading ? 'Loading...' : '' }
            <div className="row">
                {query2.data?.superheroeslist.map((item)=>{
                    return <Character url={item.url} superhero={item.superhero} publisher= {item.publisher} alter_ego={item.alter_ego} first_appearance={item.first_appearance}  character={item.character}/>
                })}
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Home;