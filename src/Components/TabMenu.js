import React from 'react';
import '../Styles/TabMenu.css';

function Selector (props) {
  return (
    <a href={props.instance.url} className={"option "+props.instance.status}>
      {props.instance.icon}
      <span>{props.instance.title}</span>
    </a>
  );
}

class TabMenu extends React.Component {
  constructor() {
    super();
    this.instanceElements = [
      {
        id: 1,
        title: 'HOME',
        icon: <i class="fas fa-home"></i>,
        status: 'active',
        url: '#'
      },
      {
        id: 2,
        title: 'DEALS',
        icon: <i class="fas fa-gift"></i>,
        status: 'none',
        url: '#'
      },
      {
        id: 3,
        title: 'UPLOAD',
        icon: <i class="fas fa-cloud-upload-alt"></i>,
        status: 'none',
        url: '#'
      },
      {
        id: 4,
        title: 'WORK',
        icon: <i class="fas fa-mug-hot"></i>,
        status: 'none',
        url: '#'
      },
      {
        id: 5,
        title: 'SETTINGS',
        icon: <i class="fas fa-cog"></i>,
        status: 'none',
        url: '#'
      }
    ];
  }
  render() {
    const selectors = this.instanceElements.map((element, i) => {
      return <Selector key={i} instance={element} />
    });
    return (
      <div className="tab-menu">
        {selectors}
      </div>
    );
  }
}

export default TabMenu;