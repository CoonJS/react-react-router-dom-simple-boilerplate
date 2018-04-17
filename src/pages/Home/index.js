import React, { Component } from 'react';

import './index.css';

export default class HomePage extends Component {
  render() {
    return (
      <div className="flex-container">
      <div className="flex-element">1</div>
      <div className="flex-element">
        <div className="flex-element-ch">1</div>
        <div className="flex-element-ch">2</div>
        <div className="flex-element-ch">3</div> 
        <div className="flex-element-ch">4</div>
      </div>
      <div className="flex-element">
        <div className="flex-element-ch">1</div>
        <div className="flex-element-ch">2</div>
      </div>      
    </div> 
    );
  }
};
