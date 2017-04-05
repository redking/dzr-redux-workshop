import React, {Component} from 'react';
import classnames from 'classnames';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			total: 0,
			colorIndex: 0
		};
	}

	static defaultProps = {
		exercise: 1,
		colors: ['black', 'green', 'pink']
	};

	render() {
		const {total, colorIndex} = this.state;
		const {colors, exercise} = this.props;

		const totalClasses = classnames({
			'form-control total': true,
			positive: total > 0,
			negative: total < 0
		});

		return (
			<div>
				<header className="App-header" style={{backgroundColor: colors[colorIndex]}}>
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Redux - Exercise <span>{exercise}</span></h2>
				</header>
				<form>
					<div className="form-group">
						<label htmlFor="num1">Number 1</label>
						<input className="form-control" type="text" id="num1" ref="num1" />
					</div>
					<div className="form-group">
						<label htmlFor="num2">Number 2</label>
						<input className="form-control" type="text" id="num2" ref="num2" />
					</div>
					<div className="form-group">
						<label htmlFor="total">Result</label>
						<input type="text" disabled="disabled" className={totalClasses} value={total} />
					</div>
					<div className="form-group">
						<button type="button" className="btn btn-default" onClick={e => this._add(e)}>Add</button>
					</div>
				</form>
				<hr />
				<button type="button" className="btn btn-default cycle" onClick={e => this._changeColor()}>
					Change header color
				</button>
			</div>
		);
	}

	// -- Private methods --

	_add() {
		const {num1, num2} = this.refs;
		this.setState({
			total: Number(num1.value) + Number(num2.value)
		});
	}

	_changeColor() {
		this.setState({
			colorIndex: ++this.state.colorIndex % this.props.colors.length
		});
	}
}

export default App;
