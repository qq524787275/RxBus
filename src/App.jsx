import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import ReceiveComponent from './component/ReceiveComponent';
import SendComponent from './component/SendComponent';

const styles = {
    root: {
        display:"flex"
    },
};

class App extends Component {
    state = {};

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>
                <SendComponent/>
                <ReceiveComponent/>
            </div>
        );
    }
}

export default withStyles(styles)(App);
