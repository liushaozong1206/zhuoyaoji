/**
 * 作者：刘少宗
 * 时间：2017/3/16
 * 描述：捉妖记第三屏
 */


import React, {Component} from "react";
import Superagent from "superagent";
import "./three.scss";
import {proxyUrl} from "../../public/public";

import pageNext from "./img/z15.png";
import title from "./img/three01.png";
import tabRight from "./img/three03.png";
import coop from "./img/three04.png";
import rightImg from "./img/four-02.png";
import threeR from "./img/three-r.jpg";
class Three extends Component {
	constructor() {
		super();
		this.state = {
			left: 0,
			dataTextList: [],
			coopImg: [],
			totalNum: [],
			page: 1,
			totalPage: 0
			
		};
		this.listText = this.listText.bind(this);
		this.handlePageClick = this.handlePageClick.bind(this);
		this.handleListPage = this.handleListPage.bind(this);
		this.hanleNext = this.hanleNext.bind(this);
		this.handlePre = this.handlePre.bind(this);
		this.handleEnd = this.handleEnd.bind(this);
		this.hnadleHome = this.hnadleHome.bind(this);
	}
	
	handleLeft() {
		var This = this;
		setInterval(function () {
			$('.coop-list ul').animate({
				'left': This.setState({left: This.state.left})
			}, 3000, function () {
				var first = $('.coop-list ul').children('li').first().remove();
				first.appendTo($('.coop-list ul'));
				$('.coop-list ul').css('left', 0)
			})
		}, 5000)
	}
	
	listText(e) {
		this.props.handleList(this.state.dataTextList[e.target.getAttribute('data-index')]);
	}
	
	handlePageClick(e) {
		let index = parseInt(e.target.getAttribute('data-index')) + 1;
		this.setState({page: index});
		
		let This = this;
		if (index != this.state.page) {
			setTimeout(function () {
				This.handleListPage();
			}, 10)
		}
		;
	}
	
	//上一页
	handlePre() {
		let This = this;
		if (this.state.page > 1) {
			this.setState({page: this.state.page - 1});
			setTimeout(function () {
				This.handleListPage();
			}, 10)
		}
	}
	
	//下一页
	hanleNext() {
		let This = this;
		
		if(parseInt(this.state.page - 1) == this.state.totalPage){
			return false
		}else if (this.state.page >= 1) {
			this.setState({page: this.state.page + 1});
			setTimeout(function () {
				This.handleListPage();
			}, 10)
		}
	}
	//home
	hnadleHome(){
		let This = this;
		this.setState({page:1})
		setTimeout(function () {
			This.handleListPage();
		}, 10)
	}
	//end
	handleEnd(){
		let This = this;
		this.setState({page:this.state.totalPage+1});
		setTimeout(function () {
			This.handleListPage();
		}, 10)
	}
	
	//文章列表
	handleListPage() {
		let This = this;
		Superagent
			.get(proxyUrl + '/api/website/getcolumncontentpage/')
			.query({app_code: 'N9FNPJSB8K3E60US', column_id: 401, type: 'article', page: this.state.page, pageSize: 6})
			.end(function (err, res) {
				let dataTextList = This.setState({dataTextList: JSON.parse(res.text).data.data});
				let totalPage = JSON.parse(res.text).data.totalPage;
				let newPage = [];
				for (var i = 0; i < totalPage; i++) {
					newPage.push(i);
				}
				This.setState({
					totalNum: newPage,
					totalPage: totalPage - 1
				});
				
			});
	}
	
	componentDidMount() {
		this.handleLeft();
		this.handleListPage();
		
		let This = this;
		//合作伙伴
		Superagent
			.get(proxyUrl + '/api/website/getcolumncontent/')
			.query({app_code: 'N9FNPJSB8K3E60US', column_id: 405, type: 'image'})
			.end(function (err, res) {
				This.setState({coopImg: JSON.parse(res.text).data});
			});
		
		
	}
	
	render() {
		let This = this;
		let ulW = this.state.coopImg.length * 100;
		return (
			<div id="three">
				<div className="three-box">
					<div className="box-tab">
						<p className="title"><img src={title} alt=""/></p>
						<p className="right"><img src={rightImg} alt=""/></p>
						<div className="tab-b">
							<div className="three-left">
								<div className="left-img"><img src={threeR} alt=""/></div>
								<div className="left-cont">
									<div className="cont-list">
										<ul>
											{
												this.state.dataTextList.map(function (item, index) {
													let time = item.create_time;
													let newTime = time.split(' ')[0].split('-');
													let arrTime = newTime[1] + '-' + newTime[2];
													return (
														<li key={index}><a href="javascript:void(0);" data-index={index}
														                   onClick={This.listText}>{item.title}</a><span>{arrTime}</span>
														</li>
													)
												})
											}
										</ul>
									</div>
									<p className="page">
										<span className="home" onClick={this.hnadleHome}></span>
										<span className="pre" onClick={this.handlePre}></span>
										
										{
											this.state.totalNum.map(function (item, index) {
												return (
													<a data-index={index} onClick={This.handlePageClick}
													   href="javascript:void(0)" key={index}
													   className={This.state.page ==index+1?'active':''}>{item + 1}</a>
												)
											})
										}
										
										<span className="next" onClick={this.hanleNext}></span>
										<span className="end" onClick={this.handleEnd}></span>
									</p>
								</div>
							</div>
							<div className="coop">
								<span><img src={coop} alt=""/></span>
								<div className="coop-list">
									<ul style={{'width': ulW, 'left': this.state.left}}>
										{
											this.state.coopImg.map(function (item, index) {
												return (
													<li key={index}><img
														src={'http://opm.8864.com' + item.pc_default_img} alt=""/></li>
												)
											})
										}
									</ul>
								</div>
							</div>
							<div className="three-right"><img src={tabRight} alt=""/></div>
						</div>
					</div>
					
					<div className="pageNext"><img src={pageNext} alt=""/></div>
				</div>
			</div>
		)
	}
	
}
;


export default Three;