import React, {Component} from 'react';

// Components
import Messages from './Messages';

// Assets
import logo from '../logo.svg';
import '../App.css';

class ChatRoom extends Component {

	constructor(props) {
		super(props);

		this.state = {
			messages: [],
			colorIndex: 0
		};
	}

	static defaultProps = {
		colors: ['black', 'green', 'pink']
	};

	render() {
		const {colors} = this.props;
		const {colorIndex, messages} = this.state;

		return (
			<div>
				<header className="App-header" style={{backgroundColor: colors[colorIndex]}}>
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Redux Chatroom</h2>
				</header>
				<div className="container">
					<div className="col-xs-12">
						<Messages messages={messages} />
					</div>
					<div className="col-xs-12">
						<form className="form-inline">
							<input className="form-control" type="text" id="message-input" ref="message" placeholder="Your message" />
							<button type="button" className="btn btn-primary" onClick={e => this._addMessage()}>
								<i className="fa fa-comment" /> Send
							</button>
						</form>
						<hr />
						<button type="button" className="btn btn-default cycle" onClick={e => this._changeColor()}>
							<i className="fa fa-circle" style={{color: colors[colorIndex]}} /> Change header color
						</button>
					</div>
				</div>
			</div>
		);
	}

	// -- Private methods --

	_addMessage() {
		const text = this.refs.message.value;
		if (!text) {
			return;
		}

		const {messages} = this.state;
		messages.unshift({
			text: this.refs.message.value,
			date: new Date().toLocaleString()
		});
		this.refs.message.value = '';

		this.setState({messages});
	}

	_changeColor() {
		this.setState({
			colorIndex: ++this.state.colorIndex % this.props.colors.length
		});
	}
}

export default ChatRoom;
