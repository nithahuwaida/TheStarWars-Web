import React, { useState } from 'react';
import { Button, Modal, Icon } from 'antd';
import '../style/Content.css';

const ShowDetail = props => {
    function info() {
        Modal.info({
          title: props.data.title,
          content: (
            <div>
              <p>{props.data.opening_crawl}</p>
            </div>
          ),
          onOk() {},
        });
      }
  
  return (
    <div style={{display:'contents'}}>
      <Button 
        className='button-detail' 
        onClick={info}
      >
        <Icon type="ellipsis" key="ellipsis" title='Show Detail'/>
        Show detail
    </Button>
    </div>
  );
}

export default ShowDetail;