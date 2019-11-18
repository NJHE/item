import React, { Component } from 'react'
import { Route,Switch,Redirect,withRouter } from 'react-router-dom'
import Cinema from '../pages/cinema'
// import Login from '../pages/login'
import Mine from '../pages/mine'
import Movies from '../pages/movies'
import Category from '../pages/category'
import NotFound from '../pages/notfound'
// import register from '../pages/register'
import Detail from '../pages/detail'

import TabBar from '../components/common/tabBar'
import Tab from '../components/common/tab'
import List from '../pages/list'


 class LayOut extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
      tabFlag: false,
      title:{
          '/movies':'猫眼电影',
          '/cinema' : '影院',
          '/mine':'猫眼电影',
          '/movies/hot': '热映',
          '/movies/comming': '上映',
        },
        arr:[ '/mine'],
        tab_bar_arr: [ '/mine' ],
        TabBarFlag:true

     }
   }
   componentDidMount () {
    this.checkTabFlag()
    this.checkTabBar()
    
 
  }

  componentWillReceiveProps ( nextProps ) {
    this.checkTabFlag( nextProps )
    this.checkTabBar( nextProps )
    
  }
   
  checkTabFlag = nextProps => {
    const { pathname } = nextProps && nextProps.location || this.props.location 
    const f = this.state.arr.some( item => item == pathname )
    if ( f ) {
      this.setState({
        tabFlag: true
      })
    } else {
      this.setState({
        tabFlag: false
      })
    }
  }
  checkTabBar = nextProps => {
    const { pathname } = nextProps && nextProps.location || this.props.location 
    const f = this.state.tab_bar_arr.some( item => item == pathname )
    if ( f ) {
      this.setState({
        tabBarFlag: false
      })
    } else {
      this.setState({
        tabBarFlag: true
      })
    }
  }
  
  
  render() {
    const { tabFlag,title,tabBarFlag } = this.state 
    const { pathname } = this.props.location 
        return (
        <div className = "layout">
      <Tab  tabFlag = { tabFlag }   title = { title[ pathname ] } { ...this.props } />
      <Switch>
        <Redirect from ="/" to="/movies/hot" exact/>
        <Route path = "/cinema" component = {Cinema}/>
        <Route path = "/category" component = { Category }/>
        <Route path = "/mine" component = {Mine}/>
        <Route path = "/movies" component = {Movies}/>
        <Route path = "/detail" component = {Detail}/>
        <Route path = "/list" component = {List}/>
        <Route  component = { NotFound }/> 
      </Switch>

        { tabBarFlag && <TabBar/>}
        </div>
        )
    }
}
export default withRouter( LayOut )