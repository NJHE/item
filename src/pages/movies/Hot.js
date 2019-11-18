import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMovies } from '../actions'
import './movies.css'
import './index.scss'
// import BScroll from 'better-scroll'

class Hot extends Component {
  
  componentDidMount (){
    this.props.getMovies()
    // const wrapper = document.querySelector('.tab-content')
   
    // const scroll = new BScroll(wrapper, {
    //   scrollX: false,  //开启横向滚动
    //   click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
    //   scrollY: true, //关闭竖向滚动
    // })
  }
  
  render() {
   const { movies } = this.props;




    return (
      
      <div className="tab-content">
      <div className="page n-hot active" data-hot=".n-hot" data-cid="c_dmLad">
        <div className="list-wrap" > 
        {  movies && movies.map( item => <div key={item.id} className="item" data-id="1163219" data-bid="dp_wx_home_movie_list">
    <div className="main-block">
      <div className="avatar" sort-flag="">
        
        <div className="default-img-bg">
          <img src="{ item.img }" alt=""/>		
        </div>
      </div> 
      <div className="mb-outline-b content-wrapper">
    
        
        <div className="column content">
          <div className="box-flex movie-title">
    <div className="title line-ellipsis ">{item.nm}</div>
            
            
          </div>
    
          <div className="detail column">
            
              
                <div className="score line-ellipsis"> 
                  <span className="score-suffix">观众评</span>
    <span className="grade">{item.sc}</span>
                </div>
              
            
    
             
    <div className="actor line-ellipsis">{item.star}</div>
            
    
            
                  
             
    <div className="show-info line-ellipsis">{item.showInfo}</div>
            
          </div>
        </div>
    
        <div className="button-block" data-id="1163219">
          
            <div className="btn normal"><span className="fix" data-bid="dp_wx_home_movie_btn">购票</span></div>
          
        </div>
      
      </div>
    </div>
    </div>
  ) }
      
      </div>
      
    </div>
    </div>
   
    );
  }
}

export default connect(
  state => state.movieReducer,
  dispatch => bindActionCreators({ getMovies }, dispatch )
)( Hot )
