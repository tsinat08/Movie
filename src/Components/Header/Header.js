import React from 'react';
import './Header.css';
// import pic from './movieIcon.jpg'


class Header extends React.Component {
    render() {
        return(
            <div className="Header">
                <table>
                    <tbody>
                    <tr>
                        {/*<td className="pic"><img src={pic} alt='icon'/></td>*/}
                        <td className="name"><h1>Search For A Movies</h1></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Header;