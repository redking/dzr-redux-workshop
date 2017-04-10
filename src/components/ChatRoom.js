import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';

// components
import Messages from './Messages';

class ChatRoom extends Component {

	constructor(props) {
		super(props);

		this.state = {
			colorIndex: 0
		};
	}

	static defaultProps = {
		colors: ['black', 'green', 'pink']
	};

	render() {
		const {color, messages} = this.props;

		return (
			<div>
				<header className="App-header" style={{backgroundColor: color}}>
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Redux Chatroom</h2>
				</header>
				<div className="container">
					<div className="col-xs-12">
						<Messages messages={messages} onDeleteMessage={this.props.onDeleteMessage} />
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
							<i className="fa fa-circle" style={{color: color}} /> Change header color
						</button>
					</div>
				</div>
			</div>
		);
	}

	// -- Private methods --

	_addMessage() {
		this.props.onAddMessage({
			text: this.refs.message.value,
			date: new Date().toLocaleString()
		});
		this.refs.message.value = '';
	}

	_changeColor() {
		const {colors} = this.props;
		const colorIndex = ++this.state.colorIndex % colors.length;

		this.props.onChangeColor(colors[colorIndex]);
		this.setState({colorIndex});
	}
}

export default ChatRoom;
