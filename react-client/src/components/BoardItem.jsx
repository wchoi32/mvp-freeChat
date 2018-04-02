import React from 'react';

const BoardItem = ({ list, ban }) => (
  <div
    onClick = { () => ban(list.username) }
  >
  <h4>
    { list.username }
  </h4>
  <p>{ list.post }</p>
  <hr />
</div>
)

export default BoardItem;