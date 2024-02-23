import React from 'react';

const Avatar = ({src,width,height,children}) => {

  return (
    <div>
      <img src={src} width={width} height={height} alt="" className=''/>
      {children}
    </div>
  )
}

export default Avatar;