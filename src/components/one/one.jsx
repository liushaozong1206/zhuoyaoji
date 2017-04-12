/**
 * 作者：刘少宗
 * 时间：2017/3/16
 * 描述：捉妖记第一屏
 */



import React,{Component} from 'react';
import './one.scss';

import pageNext from './img/z15.png';


class One extends Component{
	constructor(){
		super();
		
	}
	componentDidMount(){
		$('#one').parallax();
	}
	render(){
		return(
			<div data-mode="cursor" id="one" >
				<div className="one-box">
					<div className="layer layer1" data-depth="0.3">
						<div className="slogan"></div>
					</div>
					<div className="layer layer2" data-depth="0.1">
						<div className="video"></div>
					</div>
					<div className="layer layer3" data-depth="0.2">
						<div className="yao1"></div>
					</div>
					<div className="layer layer4" data-depth="0.1">
						<div className="yao2"></div>
					</div>
					<div className="layer layer5" data-depth="0.3">
						<div className="yao3"></div>
					</div>
					<div className="layer layer6" data-depth="0.2">
						<div className="yao4"></div>
					</div>
					<div className="layer layer7" data-depth="0.2">
						<div className="ye"></div>
					</div>
					<div className="pageNext"><img src={pageNext} alt=""/></div>
				</div>
				
			</div>
		)
	}
	
};



export default One;