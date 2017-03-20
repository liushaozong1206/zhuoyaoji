import React, {Component} from "react";
import ReactDOM from "react-dom";

import "./public/fullPage.min.css";
import "./public/fullPage.min.js";
import "./public/jquery.parallax.js";
import "./public/public.scss";

import One from "./components/one/one";
import Two from "./components/two/two";
import Three from "./components/three/three";

import logo1 from './public/img/logo.png';
import logo2 from './public/img/logo2.png';
import zLogo from './public/img/z-logo.png';
import wxT from './public/img/z10.jpg';
import rLogo from './public/img/z9.png';
import rEwm from './public/img/z10.jpg';


import {proxyUrl,isMobile} from "./public/public";


class App extends Component {
    constructor() {
        super();
        this.state = {
            off: '',
	        pop: ''
        };
		this.handleClose = this.handleClose.bind(this);
	    this.handlePopShow = this.handlePopShow.bind(this);
	    this.handlePopHide = this.handlePopHide.bind(this);
    }
	handleClose(){
		this.setState({off:'off'})
	}
	handlePopShow(){
		this.setState({
			pop:'on',
			shade:'on'
		})
	}
	handlePopHide(){
		this.setState({
			pop:'',
			shade:''
		})
	}
    componentDidMount() {
        //判断是否手机
        isMobile();
	    
	    $('#fullpage').fullpage(
		    {
			    sectionsColor    :            // 背景色
				    [
					    '#fff', '#fff', '#fff', '#fff'
				    ],
			    //navigation: true,        // 显示导航
			    loopBottom: true,        // 顶部轮滚
			    loopTop: true,        // 顶部轮滚
			    css3: true,        // 开启CSS3动画
			    paddingTop:60,
			    anchors: ['page1', 'page2', 'page3'],
			    menu: '#menu',
			    onLeave: function( index, nextIndex, direction )
			    {
				    var box = $("#box");
				
				    // 顶部
				    /*if ( index===1 && nextIndex===4 )
				    {
					    box.addClass("top");
					    $('.zxt_headerbox').css('zIndex',10);
					    return false;
				    }
				    if ( index===1 && nextIndex===2 && box.hasClass("top") )
				    {
					
					    box.removeClass("top");
					    $('.zxt_headerbox').css('zIndex',-1);
					    return false;
				    }
				    console.log(index)*/
				    // 底部
				    if ( index===3 && nextIndex===1 )
				    {
					    box.addClass("bottom");
					    $('#footer').css('zIndex',10);
					    return false;
				    }
				    if ( index===3 && nextIndex===2 && box.hasClass("bottom") )
				    {
					
					    box.removeClass("bottom");
					    $('#footer').css('zIndex',-1);
					    return false;
				    }
				
				    // 返回事件阻塞
				    //return flag
			    }
		    }
	    );
	    
	    shareHove()
	    function shareHove(){
		    var timerWx = 0;
		    $('.box-nav .wx').mousemove(function(){
			    clearTimeout(timerWx);
			    $('.bob-wx').show();
		    })
		
		    $('.box-nav .wx').mouseout(function(){
			    timerWx = setTimeout(function(){
				    $('.bob-wx').hide();
			    },300)
		    })
	    }
	    
	    
	    
    }
    render() {
        return (
	
	        <div id="box">
		
		        <div className={"shade"+' '+this.state.shade}></div>
		        <div className={"yuyue-pop"+' '+this.state.pop}>
			        <div className="close" onClick={this.handlePopHide}></div>
			        <div className="iphone">
				        <p className="iph-text">请输入手机号</p>
				        <p className="ihp-input"><input type="text" defaultValue={''}/></p>
				        <p className="iph-btn"><a href="javascript:0"></a></p>
			        </div>
			        <div className="success">
				        <p className="cu-text">预约已成功</p>
				        <p className="cu-btext">感谢您的参与！</p>
			        </div>
		        </div>
		        <div className="index-box">
			        <div className="index-logo">
				        <p className="p1"><img src={logo1} alt=""/></p>
				        <p className="p2"><img src={logo2} alt=""/></p>
				        <div className="box-nav">
					        <p className="yuyue" onClick={this.handlePopShow}><a href="javascript:0;">立即预约</a></p>
					        <p className="wx">
						        <a href="javascript:0;">关注微信</a>
						        <span className="bob-wx"><img src={wxT} alt=""/></span>
					        </p>
					        <p className="wb"><a href="javascript:0;">关注微博</a></p>
					        
				        </div>
			        </div>
			        <div className="index-right">
				        <p className="z-logo"><img src={zLogo} alt=""/></p>
				        <ul id="menu">
					        <li data-menuanchor="page1" className="page1"><a href="#page1"></a></li>
					        <li data-menuanchor="page2" className="page2"><a href="#page2"></a></li>
					        <li data-menuanchor="page3" className="page3"><a href="#page3"></a></li>
				        </ul>
			        </div>
		        </div>
		        <div className={"tab-right"+' '+this.state.off}>
					<p className="logo"><img src={rLogo} alt=""/></p>
			        <p className="close" onClick={this.handleClose}></p>
			        <p className="ewm">
				        <img src={rEwm} alt=""/>
				        <span>扫一扫关注微信<br/>了解游戏新动态</span>
			        </p>
			        <p className="btn">
				        <a href="##"></a>
			        </p>
		        </div>
		        <div className="index-bottom">
			        <div className="bottom-box">
				        <div className="n-01">
					        <p className="btn" onClick={this.handlePopShow}></p>
					        <p className="number">已预约人数: <span>1234567</span></p>
				        </div>
				        <div className="n-box1">
					        <p className="a-box1 on"></p>
					        <p className="b-box1">
						        <span></span>
					        </p>
				        </div>
				        <div className="n-box2">
					        <p className="a-box2"></p>
					        <p className="b-box2">
						        <span></span>
					        </p>
				        </div>
				        <div className="n-box3">
					        <p className="a-box3"></p>
					        <p className="b-box3">
						        <span></span>
					        </p>
				        </div>
				        <div className="n-box4">
					        <p className="a-box4"></p>
					        <p className="b-box4">
						        <span></span>
					        </p>
				        </div>
				        <div className="n-box5">
					        <p className="a-box5"></p>
					        <p className="b-box5">
						        <span></span>
					        </p>
				        </div>
				        <div className="n-box6">
					        <p className="a-box6"></p>
					        <p className="b-box6">
						        <span></span>
					        </p>
				        </div>
			        </div>
		        </div>
		        <div id="fullpage">
			        <div>
				        <div className="section"><One/></div>
				        <div className="section"><Two/></div>
				        <div className="section"><Three/></div>
	  		        </div>
			        <div></div>
		        </div>
	        </div>
        )
    }
}
;

ReactDOM.render(<App/>, document.getElementById('root'));

