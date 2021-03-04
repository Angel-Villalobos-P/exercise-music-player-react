import React, { useState, useEffect } from 'react';
import './PlayControl.css';
import Audio from './Audio';

export const PlayControl = () => {

    const [songs, setSongs] = useState([]);
    const [play, setPlay] = useState(false);
    const [currentSong, setCurrentSong] = useState(0);
    const [currentSongUrl, setCurrentSongUrl] = useState('https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3');

    useEffect(() => {
        const audio = document.getElementById("audio");

        if (songs.length === 0) {
            fetch("https://assets.breatheco.de/apis/sound/songs")
                .then(res => res.json())
                .then(data => setSongs(data));
        };

        audio.setAttribute("src", currentSongUrl);
        play ? audio.play() : audio.pause();

    }, [play, currentSongUrl]);


    const nextSong = () => {
        const url = "https://assets.breatheco.de/apis/sound/";

        if (currentSong < songs.length) {
            let song = songs[currentSong];
            setCurrentSongUrl(url + song.url);
            setCurrentSong(currentSong + 1);
        } else {
            setCurrentSong(0);
        }
    };

    const previousSong = () => {
        const url = "https://assets.breatheco.de/apis/sound/";
        if (!(currentSong < 0)) {
            let song = songs[currentSong];
            setCurrentSongUrl(url + song.url);
            setCurrentSong(currentSong - 1);
        } else {
            setCurrentSong(songs.length - 1);
        }
    };


    return (
        <>
            <Audio songs={songs} />
            <div id="controls" className="d-flex justify-content-center fixed-bottom">
                <button type="button" className="btn btn-dark" onClick={() => previousSong()}>
                    <i className="fas fa-step-backward"></i>
                </button>
                {
                    !play ? <button type="button" className="btn btn-dark" onClick={() => setPlay(true)}>
                        <i className="fas fa-play"></i>
                    </button> : <button type="button" className="btn btn-dark" onClick={() => setPlay(false)}>
                            <i className="fas fa-pause"></i>
                        </button>
                }
                <button type="button" className="btn btn-dark" onClick={() => nextSong()}>
                    <i className="fas fa-step-forward"></i>
                </button>
            </div>
        </>
    );
}