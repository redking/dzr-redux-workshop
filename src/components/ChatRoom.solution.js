import React, {Component} from 'react';
import {connect} from 'react-redux';

// Assets
import logo from '../logo.svg';
import '../App.css';

// Components
import Messages from './Messages.solution';

// Actions
import {addMessage, deleteMessage, undoMessage, getDeezerCount} from '../reducers/messages';
import {changeColor} from '../reducers/color';
import {fetchStatus} from '../reducers/user';

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

	componentWillMount() {
		this.props.fetchStatus();
	}

	render() {
		const {color, messages, user, deezerCount} = this.props;

		return (
			<div>
				<header className="App-header" style={{backgroundColor: color}}>
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Redux Chatroom</h2>
					<span className="badge">{user.loggedIn ? 'Logged in' : 'Logged out'}</span>
					<span className="badge">{deezerCount} Deezer references</span>
				</header>
				<div className="container">
					<div className="col-xs-12">
						<Messages messages={messages} onDeleteMessage={this.props.deleteMessage} />
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
						<button type="button" className="btn btn-default cycle" onClick={e => this.props.undoMessage()}>
							<i className="fa fa-undo" /> Undo
						</button>
					</div>
				</div>
			</div>
		);
	}

	// -- Private methods --

	_addMessage() {
		this.props.addMessage({
			text: this.refs.message.value,
			date: new Date().toString()
		});
		this.refs.message.value = '';
	}

	_changeColor() {
		const {colors} = this.props;
		const colorIndex = ++this.state.colorIndex % colors.length;

		this.props.changeColor(colors[colorIndex]);
		this.setState({colorIndex});
	}
}

const mapStateToProps = state => ({
	color: state.color,
	messages: state.messages,
	user: state.user,
	deezerCount: getDeezerCount(state)
});

export default connect(mapStateToProps, {addMessage, deleteMessage, undoMessage, changeColor, fetchStatus})(ChatRoom);
