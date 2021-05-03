import React from 'react';
import './Home.css';
import pic from './test.jpeg';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick=this.handleClick.bind  (this)
    }
    handleClick(e){
        let divs= document.querySelectorAll('.anchor');
        divs.forEach(div=>{
            if (div.classList.contains('selected')) div.classList.remove('selected')
        })
        e.target.classList.add('selected');
    }

    render() {
        return (
            <div className='content_wrapper'>
                <div className='column_header'>
                    <h2>What's Popular</h2>
                    <div className='selector_wrap'>
                        <div className='selector'>
                            <a className='anchor' onClick={this.handleClick} href='#' >Movie</a>
                            <a className='anchor' onClick={this.handleClick} href='#' >TV Shows</a>
                        </div>
                    </div>
                </div>
                <div className="card" style={{width: 10 + "rem"}}>
                    <img src={pic} className="card-img-top" alt="test"></img>
                        <div className="card-body">
                            <h5 className="card-title">BatMan</h5>
                            <p className="card-text"></p>
                        </div>
                </div>
            </div>
        )
    }
}

export default Home;
