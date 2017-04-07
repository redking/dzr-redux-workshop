import React, {Component} from 'react';

class Message extends Component {

	render() {
		const {text, date, index, onMessageDelete} = this.props;

		return (
			<div className="message">
				<p>{text}</p>
				<div className="controls clearfix">
					<a href="/delete" onClick={e => onMessageDelete(e, index)} className="pull-left"><i className="fa fa-trash" /></a>
					<aside className="pull-right">{date}</aside>
				</div>
			</div>
		)
	}
}

export default Message;