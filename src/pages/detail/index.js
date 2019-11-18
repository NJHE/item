import React,{ Component,Fragment } from 'react'
import{ connect } from 'react-redux'
import   './index.scss'

class Detail extends Component {
   render() {
    const { list } = this.props
     return (
      <Fragment>
       {list}
      </Fragment>
         
      
     )
   }
 }

 const mapStateFromProps =state => {
   return {
    list:state.listState.list
   }
   
 }
 export default connect( mapStateFromProps ) (Detail)
 




