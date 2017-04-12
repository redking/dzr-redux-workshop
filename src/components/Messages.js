import React, {Component} from 'react';

// Components
import Message from './Message';

class Messages extends Component {

	render() {
		const {messages, onDeleteMessage} = this.props;

		return (
			<ol className="room list-unstyled">
				{!messages.length ? <li><i className="fa fa-exclamation-triangle" /> No messages :'(</li> : null}
				{messages.map((message, i) =>
					<li key={'message_' + i}>
						<Message {...message} index={i} onDeleteMessage={onDeleteMessage} />
					</li>
				)}
			</ol>
		)
	}
}

export default Messages;
