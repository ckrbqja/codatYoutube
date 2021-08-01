class Youtube {
    constructor(key) {
        this.key = key
        this.getRequestOptions = {
            method: "GET",
            redirect: "follow",
        }
    }

    async mostPopular() {
        try {
            const response = await fetch(
                `https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyAVWWHKnDvdOuiq02_gzC9ptncQZjAuW6g&part=snippet&chart=mostPopular&maxResult=25&key=${this.key}`,
                this.getRequestOptions
            )
            const result_1 = await response.json()
            return result_1.items
        } catch (error) {
            return console.log("error", error)
        }
    }

    async search(query) {
        try {
            const response = await fetch(
                `https://youtube.googleapis.com/youtube/v3/search?type=video&key=AIzaSyAVWWHKnDvdOuiq02_gzC9ptncQZjAuW6g&key=${this.key}&part=snippet&q=${query}&maxResult=25&key=AIzaSyAVWWHKnDvdOuiq02_gzC9ptncQZjAuW6g`,
                this.getRequestOptions
            )
            const result_1 = await response.json()
            return result_1.items.map((item) => ({ ...item, id: item.id.videoId }))
        } catch (error) {
            return console.log("error", error)
        }
    }
}

export default Youtube
