/**
 * 作者：刘少宗
 * 时间：2017/3/16
 * 描述：捉妖记第二屏
 */



import React,{Component} from 'react';
import './two.scss';


import pageNext from './img/z15.png';
import twoSlogan from './img/two02.png';
import tLeft01 from './img/t-left01.png';
import animal from './img/two01.png';



var tabJson = [
	{
		left:tLeft01,content:'<p>1传说中，有山海界，群妖居之，捉妖天师居之人界，山海界，两个世界的悲欢离合从不相通又有人道：若能相通，必为圣贤</p><p>人界捉妖门派“天师堂”堂主去世后竟无一人能统一“天师堂”内部纷争也愈演愈烈天师门分为捉妖者、护妖者、御妖者三个分支</p><p>与人亲和的老妖王离世，其子胡巴年幼<br>新妖王篡位，意图杀害胡巴<br>众妖分为两派，一派力保老妖王之子胡巴<br>一派以新妖王为首，企图杀害胡巴，并一统人界众妖纷纷逃逸至中原世界</p><p>自此天下大乱<br>人？妖？纷争？<br>相爱？相杀？相守？相濡以沫？<br>2017年，这个夏天<br>我们欢乐捉妖</p>'
	},
	{
		left:tLeft01,content:'<p>2传说中，有山海界，群妖居之，捉妖天师居之人界，山海界，两个世界的悲欢离合从不相通又有人道：若能相通，必为圣贤</p><p>人界捉妖门派“天师堂”堂主去世后竟无一人能统一“天师堂”内部纷争也愈演愈烈天师门分为捉妖者、护妖者、御妖者三个分支</p><p>与人亲和的老妖王离世，其子胡巴年幼<br>新妖王篡位，意图杀害胡巴<br>众妖分为两派，一派力保老妖王之子胡巴<br>一派以新妖王为首，企图杀害胡巴，并一统人界众妖纷纷逃逸至中原世界</p><p>自此天下大乱<br>人？妖？纷争？<br>相爱？相杀？相守？相濡以沫？<br>2017年，这个夏天<br>我们欢乐捉妖</p>'
	},
	{
		left:tLeft01,content:'<p>3传说中，有山海界，群妖居之，捉妖天师居之人界，山海界，两个世界的悲欢离合从不相通又有人道：若能相通，必为圣贤</p><p>人界捉妖门派“天师堂”堂主去世后竟无一人能统一“天师堂”内部纷争也愈演愈烈天师门分为捉妖者、护妖者、御妖者三个分支</p><p>与人亲和的老妖王离世，其子胡巴年幼<br>新妖王篡位，意图杀害胡巴<br>众妖分为两派，一派力保老妖王之子胡巴<br>一派以新妖王为首，企图杀害胡巴，并一统人界众妖纷纷逃逸至中原世界</p><p>自此天下大乱<br>人？妖？纷争？<br>相爱？相杀？相守？相濡以沫？<br>2017年，这个夏天<br>我们欢乐捉妖</p>'
	}
]





class Two extends Component{
	constructor(){
		super();
		this.state={
			active:0
		};
		this.handleTab = this.handleTab.bind(this);
		this.handleLeft = this.handleLeft.bind(this);
		this.handleRight = this.handleRight.bind(this);
	}
	handleTab(e){
		this.setState({active:e.target.getAttribute('data-id')});
	}
	handleLeft(){
		this.setState({
			active:this.state.active == 0 ? 2 : Number(this.state.active) - 1
		})
	}
	handleRight(){
		this.setState({
			active:this.state.active == 2 ? 0 : Number(this.state.active) + 1
		})
	}
	
	componentDidMount(){
		//$('#one').parallax();
	}
	render(){
		var This = this;
		return(
			<div id="two" >
				<div className="two-box">
					<div className="zhou">
						<div className="slogan"><img src={twoSlogan} alt=""/></div>
						<div className="zhou-tab">
							<div className="tab">
								<div className="left-btn" onClick={this.handleLeft}></div>
								<div className="right-btn" onClick={this.handleRight}></div>
								{
									tabJson.map(function(e,i){
										var active = i==This.state.active ? 'active':'';
										return(
											<div className={"tab-list tab"+(i+1)+' '+active } key={i}>
												<div className="left"><img src={e.left} alt=""/></div>
												<div className="cont"  dangerouslySetInnerHTML={{__html: e.content}} ></div>
											</div>
										)
									})
								}
							</div>
							<div className="tab-btn">
								{
									tabJson.map(function(e,i){
										var active = i == This.state.active ? 'active':'';
										return(
											<p className={"list-"+i+' '+active} data-id={i} key={i}
											   onClick={This.handleTab}></p>
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
	
};



export default Two;