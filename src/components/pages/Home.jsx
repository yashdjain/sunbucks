import React from "react";

function Home() {
    return(
        <div className='home'>
            <section className='box box-1'>
                <div className='text-section'>
                    <h1 className='box-home-title'>Find your adventure</h1>
                    <p className='box-home-content'>Starbucks® Summer Game is here! Play for your chance to win—more than 10 million prizes are up for grabs!*</p>
                    <a className='btn btn-home-play-now' href="">Play Now</a>
                </div>
                <div className='image'>
                    <img alt="The text “Starbucks® Summer Game: Adventure Awaits” on a mint background surrounded by badges." class="block" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84026.jpg"></img>
                </div>
            </section>
        </div>
    )
}

export default Home;