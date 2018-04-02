import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.onChange = this.onChange.bind(this);
    this.afterSumbit = this.afterSumbit.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  afterSumbit() {
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div>
        <label>
          <textarea 
            rows="10" 
            cols="150"
            value = { this.state.value } 
            onChange = { this.onChange } 
            placeholder = 'Enter your post here'
          />
        </label>
        <button
          onClick = {() => this.props.post(this.state.value) }
        >
          Submit
        </button>
      </div>
    )
  }
}



export default Post;