import React, { useEffect, useState } from "react"


const Audio = (props) => {

    const songs = props.songs;
    const [song, setSong] = useState('');
    const [play, setPlay] = useState(false);

    useEffect(() => {
        const audio = document.getElementById("audio");
        audio.setAttribute("src", "https://assets.breatheco.de/apis/sound/" + song);
        // setPlay(true);
        play ? audio.play() : audio.pause();

    }, [song, play]);

    const playHandler = (url) => {

        if (url === song) {
            setPlay(!play);
        } else {
            setSong(url);
            setPlay(true);
        }
    }

    return (
        <div>
            <table className="table">
                <tbody>
                    {songs.map((song, index) => {
                        return (
                            <tr key={index}>
                                <td className="d-flex justify-content-between song" onClick={() => playHandler(song.url)}>
                                    {index + 1 + ' - ' + song.name}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <audio id="audio">
                <source src=""></source>
            </audio>
        </div>
    )
}

export default Audio;
