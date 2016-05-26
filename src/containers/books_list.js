import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class BookList extends Component {
  renderList() {
    return (
      _.map(this.props.books, book => {
        return <li key={book.title} className="list-group-item">{book.title}</li>
      })
    );
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList);
