import React from 'react';
import BoardItem from './BoardItem.jsx';

const Board = (props) => (
  <div>
    <h4> Board Component </h4>
    { props.lists.map(list => 
      <BoardItem 
        list={list}
        key={list.postid}
      />
    )}
  </div>
);

export default Board;