import {Subject} from "rx";

export default class RxBus{
    constructor() {
        this.mSubject=new Subject();
    }
    //发送一个对象
    post=(o)=>{
        this.mSubject.onNext(o);
    }
    //过滤事件
    to=(t)=>{
        //__proto__.constructor.name 获取类名,过滤出指定类名的事件
        return this.mSubject.filter(a=>a.__proto__.constructor.name===t);
    }
    //获取一个单例Rxbus
    static getInstance() {
        if(!this.instance) {
            this.instance = new RxBus();
        }
        return this.instance;
    }
}
