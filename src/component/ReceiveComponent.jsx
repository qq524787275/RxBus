import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
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

class ReceiveComponent extends Component {
    state = {
        info:""
    };


    componentDidMount() {
        this.setOnSendEventListener();
    }

    //监听全局Toast事件 @see OnSendEvent
    setOnSendEventListener = () => {
        this.subscription = RxBus.getInstance()
            .to(OnSendEvent.name)
            .subscribe(data => {
                //接受到传过来的对象
                console.debug(data);
                this.setState({
                    ...this.state,
                    info:data.info,
                })
            })
    }

    componentWillUnmount() {
        this.subscription.dispose();
    }

    render() {
        const {classes} = this.props;
        //const { } = this.state;
        return (
            <div className={classes.root}>
                ReceiveComponent
                <Typography style={{margin:30}} color={"primary"} variant={"title"}>{this.state.info}</Typography>
            </div>
        );
    }
}

export default withStyles(styles)(ReceiveComponent);
