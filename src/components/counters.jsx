import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {

    console.log("Counters - Rendered");
    const { counters, onIncrement, onDelete } = this.props;

    return (
      <div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

// te trzy propsy to jest to samo co `counter={counter}`
// value={counter.value}
// id={counter.id}
// selected={counter.selected}
