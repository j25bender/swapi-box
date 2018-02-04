import React from 'react'
import './Scroller.css'

const Scroller = (props) => {
    if(props.fetch) {
        const randoNum = Math.ceil(Math.random() * Math.ceil(7))
        const randoScroll = props.fetch[randoNum]
        const renderScroll = randoScroll
        return (
            <article className="scrollText">
                <div className="crawl">
                    <h5>{renderScroll}</h5>
                </div>
            </article>
        )

    }
}

export default Scroller