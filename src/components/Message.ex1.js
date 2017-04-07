import React, {Component} from 'react';

class Message extends Component {

	render() {
		const {text, date} = this.props;

		return (
			<div className="message">
				<p>{text}</p>
				<div className="controls clearfix">
					<aside className="pull-right">{date}</aside>
				</div>
			</div>
		)
	}
}

export default Message;
