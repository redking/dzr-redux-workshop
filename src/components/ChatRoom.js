import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';

// components
import Messages from './Messages';

class ChatRoom extends Component {

	constructor(props) {
		super(props);

		this.state = {
			messages: [],
			loggedIn: false,
			colorIndex: 0
		};
	}

	componentWillMount() {
		this._fetchAuthStatus();
	}

	static defaultProps = {
		colors: ['black', 'green', 'pink']
	};

	render() {
		const {colors} = this.props;
		const {colorIndex, messages, loggedIn} = this.state;

		console.info('STATE', this.state);

		return (
			<div>
				<header className="App-header" style={{backgroundColor: colors[colorIndex]}}>
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Redux Chatroom {loggedIn ? <span className="badge">Logged in</span> : null}</h2>
				</header>
				<div className="container">
					<div className="col-xs-12">
						<Messages messages={messages} onMessageDelete={index => this._deleteMessage(index)} />
					</div>
					<div className="col-xs-12">
						<form className="form-inline">
							<input className="form-control" type="text" id="message-input" ref="message" placeholder="Message" />
							<button type="button" className="btn btn-default" onClick={e => this._addMessage()}>Submit</button>
						</form>
						<hr />
						<button type="button" className="btn btn-default cycle" onClick={e => this._changeColor()}>
							Change header color
						</button>
					</div>
				</div>
			</div>
		);
	}

	// -- Private methods --

	_addMessage() {
		const {messages} = this.state;
		messages.unshift({
			text: this.refs.message.value,
			date: new Date().toLocaleString()
		});
		this.refs.message.value = '';

		this.setState({messages});
	}

	_deleteMessage(e, index) {
		e.preventDefault();

		let {messages} = this.state;
		messages.splice(index, 1);

		this.setState({
			messages
		});
	}

	_changeColor() {
		this.setState({
			colorIndex: ++this.state.colorIndex % this.props.colors.length
		});
	}

	_fetchAuthStatus() {
		setTimeout(() => {
			this.setState({
				loggedIn: true
			});
		}, 2000);
	}
}

export default ChatRoom;
