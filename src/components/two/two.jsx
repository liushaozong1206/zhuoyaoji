/**
 * 作者：刘少宗
 * 时间：2017/3/16
 * 描述：捉妖记第二屏
 */


import React, {Component} from "react";
import Superagent from "superagent";
import {proxyUrl} from "../../public/public";
import "./two.scss";


import pageNext from "./img/z15.png";
import twoSlogan from "./img/two02.png";
import tLeft01 from "./img/t-left01.png";
import animal from "./img/two01.png";
import take from "./img/take.png";
import ba from "./img/ba.png";
import wu from "./img/wu.png";


var occupationJson = [
	{
		list: '武天师',
		h6: '武天师',
		content: '<p class="fontT">江山天下，仗剑难平，<br/>我有一计，君相随否？</p><p>我轻易不和别人说话。<br>如若请我喝酒，还是位倾城美人，我唯有满腔牢骚相扰</p><p>我会跟你说，我是周游万里河山的行者，此间山河湖海，行迹斑斑；是记录八荒天下的画者，因为我踏遍天下，胸中自有沟壑；是恍惚人间的酒客，无处不醉，不醉不归。</p>',
		img:wu
	},
	{
		list: '霸天师',
		h6: '霸天师',
		content: '<p class="fontT">杀意凭谁敛，独孤余恨穷。<br/>遗斧语萧瑟，枯冢葬青骨。</p><p>日月交替，白昼来了又去，寒寂走了又来，一无所有者终于在悲痛中醒来，他终于意识到那一直在伤口上萦绕的不详是什么。一切美好，梦想，生活，家园，都不复存在了，他一无所有。</p><p>不……并不是一无所有，他还有恨，还有复仇，还有满腔的怒火！他向苍天立誓，今日丧门之痛，他日定要将凶手拆骨拔皮以慰逝者在天之灵！</p>',
		img:ba
	}
]

var tabJson = [
	{t: 0},
	{t: 2},
	{t: 1}
]

class Two extends Component {
	constructor() {
		super();
		this.state = {
			innerActive: 0,
			outActive: 0,
			handleTake: []
		};
		this.handleInnerTab = this.handleInnerTab.bind(this);
		this.handleInnerLeft = this.handleInnerLeft.bind(this);
		this.handleInnerRight = this.handleInnerRight.bind(this);
		this.handleOutTab = this.handleOutTab.bind(this);
		this.handleTake = this.handleTake.bind(this);
		this.handleTakeClick = this.handleTakeClick.bind(this);
	}
	
	handleInnerTab(e) {
		this.setState({innerActive: e.target.getAttribute('data-id')});
	}
	
	handleInnerLeft() {
		this.setState({
			innerActive: this.state.innerActive == 0 ? 1 : Number(this.state.innerActive) - 1
		})
	}
	
	handleInnerRight() {
		this.setState({
			innerActive: this.state.innerActive == 1 ? 0 : Number(this.state.innerActive) + 1
		})
	}
	
	handleOutTab(e) {
		let takeList = this.setState({outActive: e.target.getAttribute('data-id')});
	}
	handleTakeClick(e){console.log(0)
		this.props.handleTakeList(this.state.handleTake[e.target.getAttribute('data-id')]);
	}
	
	// 特色玩法
	handleTake() {
		let This = this;
		Superagent
			.get(proxyUrl + '/api/website/getcolumncontent/')
			.query({app_code: 'N9FNPJSB8K3E60US', column_id: 439, type: 'article',})
			.end(function (err, res) {
				let handleTake = This.setState({handleTake: JSON.parse(res.text).data});
				
			});
	}
	
	componentDidMount() {
		//$('#one').parallax();
		this.handleTake()
	}
	
	render() {
		var This = this;
		return (
			<div id="two">
				<div className="two-box">
					<div className="zhou">
						<div className="slogan"><img src={twoSlogan} alt=""/></div>
						<div className="zhou-tab">
							<div className="tab">
								<div className="tab-cont">
									{
										tabJson.map(function (item, index) {
											let num = parseInt(This.state.outActive);
											var active = index == This.state.outActive ? 'active' : '';
											
											if (num == 0) {
												return (
													<div className={"cont-01 cont-b" + ' ' + active} key={index + '1'}>
														<div className="left-btn" onClick={This.handleInnerLeft}></div>
														<div className="right-btn"
														     onClick={This.handleInnerRight}></div>
														<div className="tab-occupation">
															{
																occupationJson.map(function (item, i) {
																	var active = i == This.state.innerActive ? 'active' : '';
																	return (
																		<p className={"occupation" + ' ' + active}
																		   data-id={i} key={i}
																		   onClick={This.handleInnerTab}>{item.list}</p>
																	)
																})
															}
														</div>
														{
															occupationJson.map(function (item, i) {
																var active = i == This.state.innerActive ? 'active' : '';
																return (
																	<div className={"occupation-cont" + ' ' + active}
																	     key={i}>
																		<h6>{item.h6}</h6>
																		<div className="cont-tab"
																		     dangerouslySetInnerHTML={{__html: item.content}}></div>
																		<div className="cont-tab-img"><img src={item.img}
																		                                   alt=""/></div>
																	</div>
																)
															})
														}
													</div>
												)
											} else if (num == 1) {
												return (
													<div className={"cont-02 cont-b" + ' ' + active} key={index + '0'}>
														<ul>
															{
																This.state.handleTake.map(function (item, i) {
																	return (
																		<li key={i} onClick={This.handleTakeClick} data-id={i}>
																			<p><img src={'http://opm.8864.com' + item.img_url} data-id={i} alt=""/></p>
																			<p dangerouslySetInnerHTML={{__html: item.title}} data-id={i}></p>
																		</li>
																	)
																})
															}
														</ul>
													</div>
												)
											} else if (num == 2) {
												return (
													<div className={"cont-03 cont-b" + ' ' + active} key={index + '2'}>
														<div className="left"><img src={tLeft01} alt=""/></div>
														<div className="cont">
															<p>传说中，有山海界，群妖居之<br/>捉妖天师居之人界<br/>两个世界的悲欢离合从不相通<br/>又有人道：若能相通，必为圣贤</p>
															<p>人界捉妖门派“天师堂”堂主去世后<br/>竟无一人能统一“天师堂”，内部纷争也愈演愈烈<br/>天师门分为捉妖者、护妖者、御妖者三个分支</p>
															<p>与人亲和的老妖王离世，其子胡巴年幼<br/>新妖王篡位，意图杀害胡巴<br/>众妖分为两派，一派力保老妖王之子胡巴<br/>一派以新妖王为首，企图杀害胡巴，并一统人界<br/>众妖纷纷逃逸至中原世界</p>
															<p>自此天下大乱<br/>人？妖？纷争？<br/>相爱？相杀？相守？相濡以沫？<br/>2017年，这个夏天<br/>我们欢乐捉妖</p>
														</div>
													</div>
												)
											}
										})
									}
								
								
								</div>
							
							</div>
							<div className="tab-btn">{
								tabJson.map(function (item, index) {
									var active = index == This.state.outActive ? 'active' : '';
									return (
										<p className={"list-" + index + ' ' + active} data-id={index} key={index}
										   onClick={This.handleOutTab}></p>
									)
									
								})
							}
							</div>
						</div>
					</div>
					<div className="zoo">
						<div className="animal"><img src={animal} alt=""/></div>
					</div>
					
					
					<div className="pageNext"><img src={pageNext} alt=""/></div>
				</div>
			</div>
		)
	}
	
}
;


export default Two;