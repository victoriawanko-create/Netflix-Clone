import React, { useEffect, useState } from 'react'
import "./Player.css"
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Player = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        typeof: ""
    })

    const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDk5M2RjMDYyODk5NGNkOTA2ZGVkNDhmMjQ5NTliNCIsIm5iZiI6MTc4NDA0NzM3MC4wNTksInN1YiI6IjZhNTY2NzBhMWRhNjdmZmYyYTEwNzExYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b7_0RUlBau7UhrKnnnOlZ3B3Gg4e5GIZI2FlpR2dLe4'
  }
};

useEffect(() => {
fetch(
  `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
  options
)
  .then(response => response.json())
  .then(response => {
  const trailer =
    response.results.find(
      video =>
        video.site === "YouTube" &&
        video.type === "Trailer" &&
        video.official
    ) ||
    response.results.find(
      video => video.site === "YouTube" && video.type === "Trailer"
    ) ||
    response.results.find(video => video.site === "YouTube");

  if (trailer) {
    console.log("Selected trailer:", trailer)
    setApiData(trailer);
  }
})
  .catch(err => console.error(err));
},[]) 

    return (
        <div className="player">
            <img src={back_arrow_icon} alt="" alt="Go back" onClick={() => {navigate(-1)}} />
           <iframe
  src={`https://www.youtube.com/embed/${apiData.key}`}
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
    ></iframe>
            <div className="player-info">
                <p>{apiData.published_at.slice(0,10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
}

export default Player