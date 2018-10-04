import React, { Component } from 'react';

class Counter extends Component {
	// contructor() {
	// 	super();
	// 	this.handleIncrement = his.handleIncrement.bind(this); //metoda dla 'this' kiedy nie uzywamy fat arrows
	// };

	state = {
		value: this.props.counter.value
	};

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += (this.props.counter.count === 0) ? "warning" : "primary";
		return classes;
	}

	handleIncrement = () => {
		this.setState({
			value: this.state.value + 1
		});
	}

	render() {

		return (
			<div>
				<span className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button	onClick={() => this.props.onIncrement(this.props.counter)}
								className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
				<button
					className="btn btn-danger btn-sm m-2"
					onClick={() => this.props.onDelete(this.props.counter.id)}
				>
					Delete
				</button>
			</div>
		);
	}

}

export default Counter;
