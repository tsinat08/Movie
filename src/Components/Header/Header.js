import React from 'react';
import './Header.css';
import pic from './movieIcon.jpg'


class Header extends React.Component {
    render() {
        return(
            <div className="Header">
                {/*<nav className="navbar navbar-dark">*/}
                {/*    <a className="name navbar-brand" href="#">Find Me The Movie</a>*/}
                {/*</nav>*/}
                <table>
                    <tbody>
                    <tr >
                        <td className="pic" ><a href=' '><img src={pic} alt='icon' width="100" height="100" /></a></td>
                        <td className="name"><h1>TV & MOVIE SEARCH</h1></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Header;