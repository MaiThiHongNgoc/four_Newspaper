import React from 'react';
import './Bill.scss'

class BillPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      total: 0
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(title, price) {
    const newItem = { title, price };
    this.setState(prevState => ({
      items: [...prevState.items, newItem],
      total: prevState.total + price
    }));
  }

  render() {
    return (
      <div className='Bill'>
        <h1>Bill</h1>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item.title}: ${item.price}</li>
          ))}
        </ul>
        <p>Total: ${this.state.total}</p>
        <button onClick={() => this.addItem('Item 1', 10)}>Add Item 1</button>
        <button onClick={() => this.addItem('Item 2', 20)}>Add Item 2</button>
        {/* Add more buttons for additional items */}
      </div>
    );
  }
}

export default BillPage;


