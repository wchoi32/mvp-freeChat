import React from 'react';
import BoardItem from './BoardItem.jsx';

const Board = ({lists, ban}) => (
  <div>
    <h3> Board </h3>
    { lists.map(list => 
      <BoardItem 
        key = { list.postid } 
        list = { list }
        ban = { ban }
      />
    )}
  </div>
);

export default Board;