import { useEffect, useState } from "react"
import styles from "./App.module.css"
import VideoList from "./components/vodeo-list/video-list"
import SearchHeader from "./components/search_header/search_header"
function App({ youtube }) {
    const [videos, setVideos] = useState([])

    const onSearch = (query) => {
        youtube
            .search(query) //
            .then((video) => setVideos(video))
    }

    useEffect(() => {
        youtube
            .mostPopular() //
            .then((video) => setVideos(video))
    }, [])

    return (
        <div className={styles.App}>
            <SearchHeader onSearch={onSearch} />
            <VideoList videos={videos} />
        </div>
    )
}

export default App
