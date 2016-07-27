import React, {Component, PropTypes} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import Header from '../../components/Header/index'
import './styles/styles.scss';

@connect( state => state )

export class App extends Component {
    componentDidMount() {
    }
   



    render() {
        return (
            <section className="app-wrapper">
                <Header></Header>
                {/*
                 <ReactCSSTransitionGroup
                 component="div"
                 ref="test"
                 transitionName="example"
                 transitionEnterTimeout={500}
                 transitionLeaveTimeout={500}
                 >
                 {React.cloneElement(this.props.children, {key:this.props.location.pathname, setAppState:this.setAppState.bind(this)})}
                 </ReactCSSTransitionGroup>
                 */}
                {React.cloneElement(this.props.children, {key:this.props.location.pathname})}

            </section>
        );
    }
}

// export default connect(
//     state => state,
//     dispatch => {
//         return {dispatch: dispatch}
//     }
// )(App);