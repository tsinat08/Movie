import React from 'react';
import './Header.css';


class Header extends React.Component {
    render() {
        return(
            <div className="Header">
                <table>
                    <tbody>
                    <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Header;