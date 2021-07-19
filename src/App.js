import { useEffect, useState } from "react"
import "./App.css"
import VideoList from "./vodeo-list/video-list"

function App() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        }

        fetch(
            "https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyAVWWHKnDvdOuiq02_gzC9ptncQZjAuW6g&part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyAVWWHKnDvdOuiq02_gzC9ptncQZjAuW6g",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => setVideos(result.items))
            .catch((error) => console.log("error", error))
    }, [])

    return <VideoList videos={videos} />
}

export default App
