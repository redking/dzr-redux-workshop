import React, {Component} from 'react';

class Message extends Component {

	render() {
		const {text, date, index} = this.props;

		return (
			<div className="message">
				<p>{text}</p>
				<div className="controls clearfix">
					<button className="pull-left" type="button" onClick={() => this.props.onDeleteMessage(index)}>
						<i className="fa fa-trash" />
					</button>
					<aside className="pull-right">{date}</aside>
				</div>
			</div>
		)
	}
}

export default Message;
