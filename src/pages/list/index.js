import React, { Component } from "react";
import "./index.scss";
import axios from "axios";
import qs from "querystring";
import { Link } from 'react-router-dom'
export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  componentDidMount() {
    const { search } = this.props.location;
    const { cid } = qs.parse(search.slice(1));
    axios({
      url: "/index.php",
      params: {
        r: "class/cyajaxsub",
        page: 1,
        cid,
        px: "t",
        cac_id: ""
      }
    }).then(res => {
      this.setState({
        list: res.data.data.content
      });
    });
  }

  render() {
    const { list } = this.state;
    console.log(list);
    return (
      <div className="list">
        <ul>
        
          {list.map(item => (
            <li key={item.id} className="li">
               <Link
         to={{
             pathname: `/detail/`,
             search:``
             
         }}      
        
        
        >
              <div >
                <img src={item.pic} />
              </div>
              <div className="cent">
               
                <a>
                  <h3 className="product_title">
                    <span className="title_text">{item.d_title}</span>
                  </h3>
                </a>
                <div className="product_info">
                  <a>
                    <div className="price">           
                      <span>券后&nbsp;</span> <span className="RMB">¥</span>
                      <span className="price_num">{item.jiage}</span>
                    </div>
                    <div className="label_box">
                      <span >
                        <span className="label label1">旗舰店</span>
                        <span className="juan">
                          <span>劵</span>{item.quan_jine}
                        </span>
                      </span>
                    </div>
                    <div className="salse">
                      <span>已售{item.xiaoliang}</span>
                      <span>评论{item.comment}</span>
                    </div>
                  </a>
                </div>
              </div>
              </Link> 
            </li>
          ))}
      
        </ul>
      </div>
    );
  }
}
