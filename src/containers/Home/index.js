import React, {Component} from 'react';
import {connect} from 'react-redux';

/* component styles */
import {styles} from './styles.scss';


@connect(
    state => state
)

export class Home extends Component {
    componentDidMount() {
        console.log("15","Home","componentDidMount", this.props);

    }

    render() {


        return (
            <section className={`${styles}`}>
                home
            </section>
        );
    }
}
