import React, { Component } from 'react';

export class Search extends Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  render() {
    const { value, onChange, onSubmit, children } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={value}
          onChange={onChange}
          ref={(el) => (this.input = el)}
        />
        <button type='submit'>{children}</button>
      </form>
    );
  }
}

// Functional Stateless Component for Search Component
// const Search = ({ value, onChange, onSubmit, children }) => {
//   let input; // ref point
//   return (
//     <form onSubmit={onSubmit}>
//       <input
//         type='text'
//         value={value}
//         onChange={onChange}
//         ref={(el) => (this.input = el)} // ref point
//       />
//       <button type='submit'>{children}</button>
//     </form>
//   );
// };
