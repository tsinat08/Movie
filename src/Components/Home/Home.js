import React from 'react';
import './Home.css';
import pic from './test.jpeg';

class Home extends React.Component {
    render() {
        return (
            <div className="card" style={{width: 10 + "rem"}}>
                <img src={pic} className="card-img-top" alt="test"></img>
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                    </div>
            </div>
        )
    }
}

export default Home;
