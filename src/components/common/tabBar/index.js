import React  from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'


const   TabBar = props => {
            
            const navs = [
            {
              id:1,
              text:'电影' , 
              iconName:'fa-home',
              path:'/movies'

             },
             {
                id:2,
                text:'影院' ,   
                iconName:'fa-film',
                path:'/cinema'

               },
               {
                id:3,
                text:'分类', 
                iconName:'fa-user',
                path:'/category'

               },
               {
                id:4,
                text:'我的' , 
                iconName:'fa-user',
                path:'/mine'
  
               },
            
            
            ]
      
        
            function renderNav () {
               return navs.map( item => (
                 <li 
                   key = { item.id }
                 >
                   <NavLink
                   to = { item.path }
                   >
                       <i className = { 'fas ' + item.iconName }></i>
                       <span> { item.text } </span>
                       </NavLink>
                   </li>
               ))
             }
           
             return (
               <footer>
                 <ul>
                   { renderNav() }
                 </ul>
               </footer>
             )
           }
           
export default TabBar   
   
    
   

