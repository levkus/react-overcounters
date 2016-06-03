import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.activeBook) {
      return <div>No book selected</div>
    }

    return(
      <div>
        <h3>{this.props.activeBook.title}</h3>
        <div>{this.props.activeBook.pages} pages</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeBook: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
