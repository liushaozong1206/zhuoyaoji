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
							
							<div className="tab-three"><img src={tabRight} alt=""/></div>
						</div>
					</div>
					
					<div className="pageNext"><img src={pageNext} alt=""/></div>
				</div>
			</div>
		)
	}
	
};



export default Three;