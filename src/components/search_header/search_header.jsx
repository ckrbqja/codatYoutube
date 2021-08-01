import React, { useRef } from "react"
import styles from "./search_header.module.css"

const SearchHeader = ({ onSearch, setSelectVideo }) => {
    const inputRef = useRef()
    const handleSearch = () => {
        const value = inputRef.current.value
        onSearch(value)
    }
    const onkeypress = (event) => {
        if (event.key === "Enter") handleSearch()
    }

    const onClick = () => {
        handleSearch()
    }
    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={() => setSelectVideo(null)}>
                <img className={styles.img} src="/images/logo.png" alt="log" />
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input
                ref={inputRef}
                className={styles.buttonImg}
                type="search"
                placeholder="search..."
                onKeyPress={onkeypress}
            />
            <button className={styles.button} type="submit" onClick={onClick}>
                <img src="/images/search.png" alt="search" />
            </button>
        </header>
    )
}

export default SearchHeader
