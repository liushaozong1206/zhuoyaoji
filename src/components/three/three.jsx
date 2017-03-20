/**
 * 作者：刘少宗
 * 时间：2017/3/16
 * 描述：捉妖记第三屏
 */



import React,{Component} from 'react';
import './three.scss';

import pageNext from './img/z15.png';
import title from './img/three01.png';
import tabRight from './img/three03.png';
import coop from './img/three04.png';
import coopList from './img/three05.jpg';



class Three extends Component{
	constructor(){
		super();
		this.state={
			active:0
		};
		
	}
	
	componentDidMount(){
	}
	render(){
		return(
			<div id="three" >
				<div className="three-box">
					<div className="box-tab">
						<p className="title"><img src={title} alt=""/></p>
						<div className="tab-b">
							<div className="three-left">
								<div className="left-img"></div>
								<div className="left-cont">
									<div className="cont-list">
										<ul>
											<li><a href="#" >华胥引花千骨芈月传琅琊榜 2015颜值爆表</a><span>2017-01-01</span></li>
											<li><a href="#" >华胥引花千骨芈月传琅琊榜 2015颜值爆表</a><span>2017-01-01</span></li>
											<li><a href="#" >华胥引花千骨芈月传琅琊榜 2015颜值爆表</a><span>2017-01-01</span></li>
											<li><a href="#" >华胥引花千骨芈月传琅琊榜 2015颜值爆表</a><span>2017-01-01</span></li>
											<li><a href="#" >华胥引花千骨芈月传琅琊榜 2015颜值爆表</a><span>2017-01-01</span></li>
											<li><a href="#" >华胥引花千骨芈月传琅琊榜 2015颜值爆表</a><span>2017-01-01</span></li>
											<li><a href="#" >华胥引花千骨芈月传琅琊榜 2015颜值爆表</a><span>2017-01-01</span></li>
										</ul>
									</div>
									<p className="page">
										<span className="home"></span><span className="pre"></span><a href="" className="active">1</a><a href="">2</a><a href="">3</a><span className="next"></span><span className="end"></span>
									</p>
								</div>
							</div>
							<div className="coop">
								<span><img src={coop} alt=""/></span>
								<div className="coop-list">
									<ul>
										<li><img src={coopList} alt=""/></li>
										<li><img src={coopList} alt=""/></li>
										<li><img src={coopList} alt=""/></li>
										<li><img src={coopList} alt=""/></li>
										<li><img src={coopList} alt=""/></li>
										<li><img src={coopList} alt=""/></li>
										<li><img src={coopList} alt=""/></li>
										<li><img src={coopList} alt=""/></li>
										<li><img src={coopList} alt=""/></li>
										<li><img src={coopList} alt=""/></li>
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
	
};



export default Three;