import React from 'react';

function ServiceMain(props) {
  return (
    <div className="main-service">
        <div className="logo">
            {props.data.imgeType==="img"?<img src={require(`../../images/${props.data.img.name}-icon.${props.data.img.type}`)} alt="" />:null}
            
            {props.data.imgeType==="i"?<i className={`${props.data.i} fa-4x`}></i>:null}
            <p className='name'>{props.data.name}</p>
        </div>
        <div className="type">
            <p>{props.data.type}</p>
        </div>
        <div className="money">
            <span className='pay'>{props.data.money} rs</span>
            {!props.data.avlability ?<span style={{color:"red"}} className="available">Not-Available <i class="fa-solid fa-circle-xmark"></i></span>:<span className="available">Available <i class="fa-solid fa-circle-check"></i></span>}
        </div>
    </div>
  )
}

export default ServiceMain;