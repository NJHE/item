import { Tabs} from 'antd-mobile';
import React from 'react'
import Content from './Content'
export default  class Slider extends React.Component {
  renderContent = tab =>
    (<div style={{overflow:'auto',height: '100%', backgroundColor: '#fff' }}>
     {tab.floors.map((item,index)=> <Content key={index} {...item}/>)}
    </div>);

  render() {
    const { data } = this.props
    

    return (
        console.log(data),
        <Tabs tabs={data} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={11} />}
        tabBarPosition="left"
        tabDirection="vertical"
       
        >
          {this.renderContent}
        </Tabs>
    );
  }
}