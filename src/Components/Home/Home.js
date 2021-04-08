import React from 'react';
import './Home.css';
import pic from './test.jpeg';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className='column_header'>
                    <h2>What's Popular</h2>
                    <div className='selector_wrap'>
                        <div className='selector'>
                            <div className='anchor'><h3><a href='#' >Streaming</a></h3>
                                <div className='background'></div></div>
                            <div className='anchor'><h3><a href='#' >On TV</a></h3>
                                <div className='background'></div></div>
                            <div className='anchor'><h3><a href='#' >For Rent</a></h3>
                                <div className='background'></div></div>
                            <div className='anchor'><h3><a href='#' >In Theaters</a></h3>
                                <div className='background'></div></div>
                        </div>
                    </div>
                </div>
                <div className="card" style={{width: 10 + "rem"}}>
                    <img src={pic} className="card-img-top" alt="test"></img>
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <p className="card-text"></p>
                        </div>
                </div>
            </div>
        )
    }
}

export default Home;
