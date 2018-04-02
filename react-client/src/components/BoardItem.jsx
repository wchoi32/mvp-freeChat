import React from 'react';

const BoardItem = (props) => (
  <div>
    <h4>{props.list.username}</h4>
    <p>{props.list.post}</p>
    <hr />
  </div>
)

export default BoardItem;