import React, {useRef, useEffect, useState} from 'react'
import "./TitleCards.css"
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title, category}) => {

    const [apiData, setApiData] = useState([]);
    const cardsRef = useRef();

    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDk5M2RjMDYyODk5NGNkOTA2ZGVkNDhmMjQ5NTliNCIsIm5iZiI6MTc4NDA0NzM3MC4wNTksInN1YiI6IjZhNTY2NzBhMWRhNjdmZmYyYTEwNzExYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b7_0RUlBau7UhrKnnnOlZ3B3Gg4e5GIZI2FlpR2dLe4'
  }
};

    const handleWheel = (event) => {
        event.preventDefault;
        cardsRef.current.scrollLeft += event/deltaY;
    }

    useEffect(() => {

        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setApiData(response.results))
        .catch(err => console.error(err));

        cardsRef.current.addEventListener('wheel', handleWheel)
    }, [])

    return (
        <div className="title-cards">
            <h2>{title?title:'Popular on Netflix'}</h2>
            <div className="card-list" ref={cardsRef}>
                {apiData.map((card, index) => {
                    return <div className="card" key={index}>
                       <img src={`https://image.tmdb.org/t/p/w500` +card.background_path} alt="" />
                       <p>{card.original_title}</p>
                        </div>
                })}
            </div>
        </div>
    )
}

export default TitleCards