**项目运行**  
npm install  
npm start  
[rxbus](https://github.com/qq524787275/RxBus/blob/master/src/utils/RxBus.jsx)    
**Demo效果图**  
![image](https://github.com/qq524787275/RxBus/blob/master/doc/rxbus.gif)  
**使用方式**  
1.创建一个事件类  
```javascript
export default class OnSendEvent{
    constructor(info) {
        this.info=!info?"":info;
    }
}
```
2.在需要接受数据的组件中设置监听事件  
```javascript
componentDidMount() {
        this.setOnSendEventListener();
}

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
```
3.触发事件
```javascript
    send=()=>{
        console.debug(this.state.input);
        RxBus.getInstance().post(new OnSendEvent(this.state.input));
    }
```
4.释放监听事件。
```javascript
   componentWillUnmount() {
        this.subscription.dispose();
    }
```
[博客地址](http://zhuzichu.com/article/detail/3)
