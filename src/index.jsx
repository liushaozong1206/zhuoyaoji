import React, {Component} from "react";
import ReactDOM from "react-dom";

import "./public/fullPage.min.css";
import "./public/fullPage.min.js";
import "./public/jquery.parallax.js";
import "./public/public.scss";

import One from "./components/one/one";
import Two from "./components/two/two";
import Three from "./components/three/three";
import Four from "./components/four/four";

import logo1 from "./public/img/logo.png";
import logo2 from "./public/img/logo2.png";
import zLogo from "./public/img/z-logo.png";
import wxT from "./public/img/z10.jpg";
import rEwm from "./public/img/z10.jpg";
import rLogo from "./public/img/z9.png";


import {isMobile} from "./public/public";


class App extends Component {
	constructor() {
		super();
		this.handleClose = this.handleClose.bind(this);
		this.handlePopShow = this.handlePopShow.bind(this);
		this.handlePopHide = this.handlePopHide.bind(this);
		this.handleList = this.handleList.bind(this);
		this.phoneNum = this.phoneNum.bind(this);
		this.handleTakeList = this.handleTakeList.bind(this);
		this.handlePicture = this.handlePicture.bind(this);
		this.handleVideo = this.handleVideo.bind(this);
		this.state = {
			off: '',
			pop: '',
			popText: '',
			phone: 'on',
			success: '',
			takeText: '',
			num: 0,
			aBox: [false, false, false, false, false, false],//打开箱子
			dataTextList: {},
			dataTakeList: {},
			dataPicture: '',
			pictureHide:'',
			videoHide:'',
			videoUrl:''
		};
	}
	
	handleClose() {
		this.setState({off: 'off'})
	}
	
	handlePopShow() {
		this.setState({
			pop: 'on',
			shade: 'on',
			success: '',
			phone: 'on'
		});
		this.refs.myInput.value = '';
	}
	
	handlePopHide() {
		this.setState({
			pop: '',
			shade: '',
			popText: '',
			takeText: '',
			shade: '',
			pictureHide:'',
			videoHide:'',
			videoUrl:''
		});
		$.fn.fullpage.setAllowScrolling(true);
	}
	
	handleList(obj) {
		this.setState({
			dataTextList: obj,
			shade: 'on',
			popText: 'on'
		});
		$.fn.fullpage.setAllowScrolling(false);
		
	}
	
	handleTakeList(obj) {
		this.setState({
			dataTakeList: obj,
			shade: 'on',
			takeText: 'on'
		});
		$.fn.fullpage.setAllowScrolling(false);
	}
	
	handlePicture(obj) {
		this.setState({
			dataPicture:obj,
			shade: 'on',
			pictureHide:'on'
		})
	};
	handleVideo(obj){
		this.setState({
			videoUrl:obj,
			shade: 'on',
			videoHide:'on'
		})
	}
	
	phoneNum() {
		//立即预约
		/*手机号验证*/
		let This = this;
		vailPhone()
		function vailPhone() {
			let phone = $(".ihp-input input").val();
			let flag = false;
			let message = '';
			let myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
			if (phone == '') {
				message = "手机号码不能为空！";
			} else if (phone.length != 11) {
				message = "请输入有效的手机号码！";
			} else if (!myreg.test(phone)) {
				message = "请输入有效的手机号码！";
			} else {
				flag = true;
			}
			if (!flag) {
				//提示错误效果
				var onOff = true;
				$('.point').html(message);
				setTimeout(function () {
					$('.point').html('');
				}, 2000)
				
			} else {
				
				$.ajax({
					type: 'GET',
					dataType: 'jsonp',
					url: 'http://test.zyj.8864.com/getyyphone',
					data: {phone: $(".ihp-input input").val()},
					success: function (data) {
						//预约成功
						if (parseInt(data.msg) == -1) {
							$('.point').html('该手机号已经注册过，请换别手号码！！！');
							setTimeout(function () {
								$('.point').html('');
							}, 2000)
						} else {
							This.setState({
								success: 'on',
								phone: ''
							})
						}
						return false;
					},
					error: function (err) {
					}
				})
			}
			;
			return false;
		}
		
	}
	
	componentDidMount() {
		let This = this;
		//判断是否手机
		
		$('#fullpage').fullpage(
			{
				sectionsColor:            // 背景色
					[
						'#fff', '#fff', '#fff', '#fff'
					],
				//navigation: true,        // 显示导航
				loopBottom: true,        // 顶部轮滚
				loopTop: true,        // 顶部轮滚
				css3: true,        // 开启CSS3动画
				paddingTop: 60,
				anchors: ['page1', 'page2', 'page3', 'page4'],
				menu: '#menu',
				onLeave: function (index, nextIndex, direction) {
					var box = $("#box");
					// 底部
					if (index == 0 && nextIndex == 1 && direction == 'down' || index == 2 && nextIndex == 1 && direction == 'up') {
						$('.index-bottom').css('display', 'block')
					} else {
						$('.index-bottom').css('display', 'none')
					}
					if (index === 4 && nextIndex === 1) {
						box.addClass("bottom");
						$('#footer').css('zIndex', 10);
						return false;
					}
					if (index === 4 && nextIndex === 3 && box.hasClass("bottom")) {
						
						box.removeClass("bottom");
						$('#footer').css('zIndex', -1);
						return false;
					}
					
					// 返回事件阻塞
					//return flag
				}
			}
		);
		shareHove()
		function shareHove() {
			var timerWx = 0;
			$('.box-nav .wx').mousemove(function () {
				clearTimeout(timerWx);
				$('.bob-wx').show();
			})
			
			$('.box-nav .wx').mouseout(function () {
				timerWx = setTimeout(function () {
					$('.bob-wx').hide();
				}, 300)
			})
		};
		
		//已预约人数
		$.ajax({
			type: 'get',
			dataType: 'jsonp',
			url: 'http://test.zyj.8864.com/getyycount',
			success: function (data) {
				if (data.msg == 1) {
					This.setState({
						num: data.code
					});
					let num = -1;
					
					if (This.state.num >= 20000 && This.state.num < 80000) {
						$('.min-monster0').css('display', 'block');
					} else if (This.state.num >= 80000 && This.state.num < 150000) {
						$('.min-monster1').css('display', 'block')
					} else if (This.state.num >= 150000 && This.state.num < 300000) {
						$('.min-monster2').css('display', 'block')
					} else if (This.state.num >= 300000 && This.state.num < 500000) {
						$('.min-monster3').css('display', 'block')
					} else if (This.state.num >= 500000 && This.state.num < 1000000) {
						$('.min-monster4').css('display', 'block')
					} else if (This.state.num >= 1000000) {
						$('.min-monster5').css('display', 'block')
					}
					
					
					let arr = [20000, 80000, 150000, 300000, 500000, 1000000];
					
					for (var i = 0; i < arr.length; i++) {
						if (data.code >= arr[i] && data.code < arr[i + 1]) {
							num = i;
							break;
						} else if (data.code >= arr[arr.length - 1]) {
							num = arr.length - 1;
							break;
						}
					}
					
					if (num != -1) {
						let Now = This.state.aBox;
						for (let i = 0; i <= num; i++) {
							Now[i] = true
						}
						This.setState({aBox: Now});
					}
				}
			},
			error: function (err) {
			}
		})
		
		
	}
	
	render() {console.log(this.state.videoUrl)
		let This = this;
		return (
			
			<div id="box">
				
				<div className={"shade" + ' ' + this.state.shade}></div>
				{/*文章列表内容*/}
				<div className={"text-detailed" + ' ' + this.state.popText }>
					<div className="close" onClick={this.handlePopHide}></div>
					<div className="titlt-time">
						<h6>{this.state.dataTextList.title}</h6>
						<span>发表时间：{this.state.dataTextList.update_time}</span>
					</div>
					<div className="content-box">
						<div className="content-p"
						     dangerouslySetInnerHTML={{__html: this.state.dataTextList.content}}></div>
					</div>
				</div>
				{/*手机预约*/}
				<div className={"yuyue-pop" + ' ' + this.state.pop}>
					<div className="close" onClick={this.handlePopHide}></div>
					<div className={"iphone" + ' ' + this.state.phone}>
						<p className="iph-text">请输入手机号</p>
						<p className="ihp-input"><input type="text" ref='myInput' defaultValue={''}/></p>
						<p className="point"></p>
						<p className="iph-btn"><a href="javascript:void(0);" onClick={this.phoneNum}></a></p>
					</div>
					<div className={"success" + ' ' + this.state.success}>
						<p className="cu-text">预约已成功</p>
						<p className="cu-btext">感谢您的参与！</p>
					</div>
				</div>
				{/*特色玩法*/}
				<div className={"take-cont" + ' ' + this.state.takeText}>
					<div className="clons" onClick={this.handlePopHide}></div>
					<h6 dangerouslySetInnerHTML={{__html: this.state.dataTakeList.title}}></h6>
					<div className="take-box">
						<div className="take-text"
						     dangerouslySetInnerHTML={{__html: this.state.dataTakeList.content}}></div>
					</div>
				</div>
				{/*原画*/}
				<div className={"picture-cont"+' '+this.state.pictureHide}>
					<div className="close" onClick={this.handlePopHide}></div>
					<img src={'http://opm.8864.com' + this.state.dataPicture} alt=""/>
				</div>
				{/*视频*/}
				<div className={"picture-video"+' '+this.state.videoHide}>
					<div className="close" onClick={this.handlePopHide}></div>
					<video className="video" src={this.state.videoUrl} controls="controls" ></video>
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
						<p className="deng"></p>
						<ul id="menu">
							<li data-menuanchor="page1" className="page1"><a href="#page1"></a></li>
							<li data-menuanchor="page2" className="page2"><a href="#page2"></a></li>
							<li data-menuanchor="page3" className="page3"><a href="#page3"></a></li>
							<li data-menuanchor="page4" className="page4"><a href="#page4"></a></li>
						</ul>
					</div>
				</div>
				<div className={"tab-right" + ' ' + this.state.off}>
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
							<p className="number">已预约人数: <span>{this.state.num}</span></p>
						</div>
						{
							This.state.aBox.map(function (item, index) {
								return (
									<div className={'n-box' + index} key={index}>
										<p className={ This.state.aBox[index] == true ? 'a-box' + index + ' ' + 'on' : 'a-box' + index }></p>
										<p className={"min-monster" + index}></p>
										<p className={'b-box' + index}>
											<span></span>
										</p>
									</div>
								)
							})
						}
					
					</div>
				</div>
				<div id="fullpage">
					<div>
						<div className="section"><One/></div>
						<div className="section"><Two handleTakeList={this.handleTakeList}/></div>
						<div className="section"><Four  handlePicture={this.handlePicture} handleVideo={this.handleVideo}/></div>
						<div className="section"><Three handleList={this.handleList}/></div>
					</div>
					<div></div>
				</div>
			</div>
		)
	}
}
;

ReactDOM.render(<App/>, document.getElementById('root'));

