/**
 * 作者：刘少宗
 * 时间：2017/3/16
 * 描述：捉妖记第二屏
 */


import React, {Component} from "react";
import Superagent from "superagent";
import {proxyUrl} from "../../public/public";
import "./four.scss";


import pageNext from "./img/z15.png";
import fourTitle from "./img/f-t1.png";
import fourTitleR from "./img/four-02.png";
import video from "./img/video.png";
var pictureJson = [
	{
		tab:'游戏原画'
	},
	{
		tab:'游戏截图'
	},
	{
		tab:'游戏视频'
	},
	{
		tab:'电影花絮'
	},
]

class Four extends Component {
	constructor() {
		super();
		this.state = {
			active:0,
			page:1,
			page2:1,
			imgNum1:[],
			imgNum2:[],
			totalPage1:0,
			totalPage2:0,
			handlePicture01:[],//原画
			handlePicture02:[],//截图
			handlePicture03:[],//游戏
			handlePicture04:[]//电影
		};
		this.handlePicture01 = this.handlePicture01.bind(this);
		this.pictureTab = this.pictureTab.bind(this);
		this.hanldePictureClick = this.hanldePictureClick.bind(this);
		this.handlePageClick = this.handlePageClick.bind(this);
		this.handlePageClick2 = this.handlePageClick2.bind(this);
		this.handleRight = this.handleRight.bind(this);
		this.handleLeft = this.handleLeft.bind(this);
		this.hanldeVideoClick = this.hanldeVideoClick.bind(this);
		this.hnadleHome1 = this.hnadleHome1.bind(this);
		this.hnadleHome2 = this.hnadleHome2.bind(this);
		this.handleEnd1 = this.handleEnd1.bind(this);
		this.handleEnd2 = this.handleEnd2.bind(this);
		this.handlePre1 = this.handlePre1.bind(this);
		this.hanleNext1 = this.hanleNext1.bind(this);
		this.handlePre2 = this.handlePre2.bind(this);
		this.hanleNext2 = this.hanleNext2.bind(this);
	}
	//原画
	handlePicture01() {
		let This = this;
		Superagent
			.get(proxyUrl + '/api/website/getcolumncontentpage/')
			.query({app_code: 'N9FNPJSB8K3E60US', column_id: 403, type: 'image', page: this.state.page, pageSize: 6})
			.end(function (err, res) {
				let handlePicture01 = This.setState({handlePicture01: JSON.parse(res.text).data.data});
				let Img1Page = parseInt(JSON.parse(res.text).data.totalPage);
				let arrImg1 = [];
				for(var i = 0;i<Img1Page;i++){
					arrImg1.push(i);
				};
				This.setState({
					imgNum1: arrImg1,
					totalPage1: Img1Page,
				});
			});
	}
	//截图
	handlePicture02() {
		let This = this;
		Superagent
			.get(proxyUrl + '/api/website/getcolumncontentpage/')
			.query({app_code: 'N9FNPJSB8K3E60US', column_id: 433, type: 'image',page: this.state.page2, pageSize: 6})
			.end(function (err, res) {
				let handlePicture02 = This.setState({handlePicture02: JSON.parse(res.text).data.data});
				let Img2Page = parseInt(JSON.parse(res.text).data.totalPage);
				let arrImg2 = [];
				for(var i = 0;i<Img2Page;i++){
					arrImg2.push(i);
				};
				This.setState({
					imgNum2: arrImg2,
					totalPage2: Img2Page,
				});
			});
	}
	//视频
	handlePicture03() {
		let This = this;
		Superagent
			.get(proxyUrl + '/api/website/getcolumncontent/')
			.query({app_code: 'N9FNPJSB8K3E60US', column_id: 435, type: 'image',})
			.end(function (err, res) {
				let handlePicture03 = This.setState({handlePicture03: JSON.parse(res.text).data});
				
			});
	}
	//电影
	handlePicture04() {
		let This = this;
		Superagent
			.get(proxyUrl + '/api/website/getcolumncontent/')
			.query({app_code: 'N9FNPJSB8K3E60US', column_id: 437, type: 'video',})
			.end(function (err, res) {
				let handlePicture04 = This.setState({handlePicture04: JSON.parse(res.text).data});
				
			});
	}
	
	
	
	//切换
	pictureTab(e){
		this.setState({active:e.target.getAttribute('data-index')})
	}
	//原画
	hanldePictureClick(e){
		let bigImg = e.target.getAttribute('data-img');
		this.props.handlePicture(bigImg);
	}
	//视频
	hanldeVideoClick(e){
		let video = e.target.getAttribute('data-video');
		this.props.handleVideo(video);
	}
	//分页
	handlePageClick(e) {
		let index = parseInt(e.target.getAttribute('data-index')) + 1;
		this.setState({page: index});
		
		let This = this;
		if (index != this.state.page) {
			setTimeout(function () {
				This.handlePicture01();
			}, 10)
		}
		;
	}
	handlePageClick2(e) {
		let index = parseInt(e.target.getAttribute('data-index')) + 1;
		this.setState({page2: index});
		let This = this;
		if (index != this.state.page2) {
			setTimeout(function () {
				This.handlePicture02();
			}, 10)
		}
		;
	}
	
	//右切换
	handleRight(){
		this.setState({active :this.state.active == 3 ? 0 : Number(this.state.active)+1})
	}
	//左切换
	handleLeft(){
		this.setState({active :this.state.active == 0 ? 3 : Number(this.state.active)-1})
	}
	//home
	hnadleHome1(){
		let This = this;
		this.setState({page:1})
		setTimeout(function () {
			This.handlePicture01();
		}, 10)
	}
	hnadleHome2(){
		let This = this;
		this.setState({page2:1})
		setTimeout(function () {
			This.handlePicture02();
		}, 10)
	}
	//end
	handleEnd1(){
		let This = this;
		this.setState({page:this.state.totalPage1});
		setTimeout(function () {
			This.handlePicture01();
		}, 10)
	}
	handleEnd2(){
		let This = this;
		this.setState({page2:this.state.totalPage2});
		setTimeout(function () {
			This.handlePicture02();
		}, 10)
	}
	//上一页
	handlePre1() {
		let This = this;
		if (this.state.page > 1) {
			this.setState({page: this.state.page - 1});
			setTimeout(function () {
				This.handlePicture01();
			}, 10)
		}
	}
	handlePre2() {
		let This = this;
		if (this.state.page2 > 1) {
			this.setState({page2: this.state.page2 - 1});
			setTimeout(function () {
				This.handlePicture02();
			}, 10)
		}
	}
	
	//下一页
	hanleNext1() {
		let This = this;
		if(this.state.page == this.state.totalPage1){
			return false
		}else if (this.state.page >= 1) {
			this.setState({page: this.state.page + 1});
			setTimeout(function () {
				This.handlePicture01();
			}, 10)
		}
	}
	hanleNext2() {
		let This = this;
		if(this.state.page2 == this.state.totalPage2){
			return false
		}else if (this.state.page2 >= 1) {
			this.setState({page2: this.state.page2 + 1});
			setTimeout(function () {
				This.handlePicture02();
			}, 10)
		}
	}
	
	componentDidMount() {
		this.handlePicture01();
		this.handlePicture02();
		this.handlePicture03();
		this.handlePicture04();
	}
	
	render() {
		var This = this;
		return (
			<div id="two">
				<div className="two-box">
					<div className="four-bg">
						<div className="four-title"><img src={fourTitle} alt=""/></div>
						<div className="four-titleR"><img src={fourTitleR} alt=""/></div>
						<div className="fourTab">
							<div className="fourTab-nav">
								<ul>
									{
										pictureJson.map(function(item,index){
											var active = index == This.state.active ?'active':'';
											return(
												<li className={active} key={index} data-index={index} onClick={This.pictureTab}>{item.tab}</li>
											)
										})
									}
								</ul>
							</div>
							<div className="fourTab-cont">
								<div className="fourBtnL" onClick={this.handleLeft}></div>
								<div className="fourBtnR" onClick={this.handleRight}></div>
								<div className="fourTab-text">
									<ul className={this.state.active == 0 ? 'active':''}>
										{
											This.state.handlePicture01.map(function(item,index){
												return(
													<li key={index} onClick={This.hanldePictureClick}><img src={'http://opm.8864.com' +item.pc_default_img} alt="" data-img={item.pc_big_img}/><span>{item.title}</span></li>
												)
											})
										}
										<p className="page">
											<span className="home" onClick={this.hnadleHome1}></span>
											<span className="pre" onClick={this.handlePre1}></span>
											
											{
												This.state.imgNum1.map(function(item,index){
													return(
														<a key={index} data-index={index} href="javascript:void(0)" onClick={This.handlePageClick} className={This.state.page ==index+1?'active':''} >{(item+1)}</a>
													)
												})
											}
												
											
											<span className="next" onClick={this.hanleNext1}></span>
											<span className="end" onClick={this.handleEnd1}></span>
										</p>
									</ul>
									<ul className={this.state.active == 1 ? 'active':''}>
										{
											This.state.handlePicture02.map(function(item,index){
												return(
													<li key={index} onClick={This.hanldePictureClick}><img src={'http://opm.8864.com' +item.pc_big_img} alt="" data-img={item.pc_big_img}/><span>{item.title}</span></li>
												)
											})
										}
										<p className="page">
											<span className="home" onClick={this.hnadleHome2}></span>
											<span className="pre"  onClick={this.handlePre2}></span>
											
											{
												This.state.imgNum2.map(function(item,index){
													return(
														<a key={index} data-index={index} href="javascript:void(0)" onClick={This.handlePageClick2} className={This.state.page2 ==index+1?'active':''} >{(item+1)}</a>
													)
												})
											}
											
											
											<span className="next" onClick={this.hanleNext2}></span>
											<span className="end" onClick={this.handleEnd2}></span>
										</p>
									</ul>
									<ul className={this.state.active == 2 ? 'active':''}>
										{
											This.state.handlePicture03.map(function(item,index){
												return(
													<li key={index} onClick={This.hanldeVideoClick}><img src={'http://opm.8864.com' +item.pc_img} alt=""  data-video={item.video_url}/><span>{item.title}</span><font><img src={video} alt=""/></font></li>
												)
											})
										}
									</ul>
									<ul className={this.state.active == 3 ? 'active':''}>
										{
											This.state.handlePicture04.map(function(item,index){
												return(
													<li key={index} onClick={This.hanldeVideoClick}><img src={'http://opm.8864.com' +item.pc_img} alt="" data-video={item.video_url}/><span  data-video={item.video_url}>{item.title}</span><font><img src={video} alt=""  data-video={item.video_url}/></font></li>
												)
											})
										}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="pageNext"><img src={pageNext} alt=""/></div>
				</div>
			</div>
		)
	}
	
}
;


export default Four;