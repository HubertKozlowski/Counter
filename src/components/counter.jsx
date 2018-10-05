import React, { Component } from 'react';

class Counter extends Component {
	// contructor() {
	// 	super();
	// 	this.handleIncrement = his.handleIncrement.bind(this); //metoda dla 'this' kiedy nie uzywamy fat arrows
	// };

	componentDidUpdate(prevProps, prevState) {
    console.log("Previous Props", prevProps);
    console.log("Previous State", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
			//ajax call
    }
  }

  componentWillUnmount() {
    console.log("Component - Unmount");
  }

	formatCount() {
		const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
    classes +=
      this.props.counter.value === 0
        ? "warning"
        : this.props.counter.value < 0
          ? "danger"
          : this.props.counter.value > 0
            ? "primary"
            : 0;
    return classes;
	}

	handleIncrement = () => {
		this.setState({
			value: this.state.value + 1
		});
	}

	render() {
    console.log("Counter - Rendered");
    return (
      <div className="jumbotron">
        <h4>Counter# {this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm ml-2"
        >
          Delete
        </button>
      </div>
    );
  }

}

export default Counter;
