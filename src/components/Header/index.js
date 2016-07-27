import React, {Component} from 'react';
import {connect} from 'react-redux';
/* component styles */
import {styles} from './styles.scss';

@connect(state => state)

export default class Header extends Component {
    static contextTypes = {
        router: React.PropTypes.any
    };



    render() {
        return (

            <header className={`${styles}`}>
                header
            </header>
        );
    }
}
