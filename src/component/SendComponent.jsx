import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import RxBus from "../utils/RxBus";
import OnSendEvent from "../event/OnSendEvent";
const styles = {
    root: {
        width:200,
        height:200,
        boxShadow:"0px 0px 5px 5px #888888",
        margin:50
    },
};

class SendComponent extends Component {
    state = {
        input:"info",
    };

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

    change=(event)=>{
        this.setState({
            ...this.state,
            input:event.target.value,
        })
    }

    send=()=>{
        console.debug(this.state.input);
        RxBus.getInstance().post(new OnSendEvent(this.state.input));
    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>
                SendComponent
                <Input value={this.state.input} onChange={this.change} style={{margin:10}}></Input>
                <Button onClick={this.send} style={{margin:10}} color={"primary"} variant={"raised"}>发送</Button>
            </div>
        );
    }
}

export default withStyles(styles)(SendComponent);
