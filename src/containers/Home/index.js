import React, {Component} from 'react';
import {connect} from 'react-redux';

import SimpleForm from '../../components/SimpleForm/SimpleForm';

/* component styles */
import {styles} from './styles.scss';

class Home extends Component {
    componentDidMount() {
        console.log("15","Home","componentDidMount", this.props);

    }

    render() {

        return (
            <section className={`${styles}`}>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Home</h3>
                    </div>
                    <div className="panel-body">
                        Panel content
                    </div>
                </div>



                <SimpleForm></SimpleForm>
            </section>
        );
    }
}


export default connect(
    state => state,
)(Home);