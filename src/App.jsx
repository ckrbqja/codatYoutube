import { useCallback, useEffect, useState } from "react"
import styles from "./App.module.css"
import SearchHeader from "./components/search_header/search_header"
import VideoDetail from "./components/video-detail/video-detail"
import VideoList from "./components/vodeo-list/video-list"
function App({ youtube }) {
    const [videos, setVideos] = useState([])
    const [selectVideo, setSelectVideo] = useState(null)

    const onSearch = useCallback(
        (query) => {
            setSelectVideo(null)
            youtube
                .search(query) //
                .then((video) => setVideos(video))
        },
        [youtube]
    )

    useEffect(() => {
        youtube
            .mostPopular() //
            .then((video) => {
                setVideos(video)
            })
    }, [youtube])

    return (
        <div className={styles.App}>
            <SearchHeader onSearch={onSearch} setSelectVideo={setSelectVideo} />
            <section className={styles.content}>
                {selectVideo && (
                    <div className={styles.detail}>
                        <VideoDetail video={selectVideo} />
                    </div>
                )}
                <div className={styles.list}>
                    <VideoList
                        videos={videos}
                        selectedVideo={setSelectVideo}
                        display={selectVideo ? "detail" : "list"}
                    />
                </div>
            </section>
        </div>
    )
}

export default App
