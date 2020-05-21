import React, {Component} from 'react';
import classNames from 'classnames';
import '../Styles/Table.css'

class Table extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
        {this.props.data.map((element, i) => {
          return (<tr key={i} className={classNames({'is-even': i % 2 === 0})}>
            <td>{i+1}</td>
            <td>{element.first}</td>
            <td>{element.last}</td>
            <td>{element.handle}</td>
          </tr>)
        })}
        </tbody>
      </table>
    )
  } 
}

export default Table