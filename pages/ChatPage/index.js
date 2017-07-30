import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';

const uid = Date.now();

const avatars = [
	'https://i.ytimg.com/vi/QsEj0CRWOFo/maxresdefault.jpg',
	'http://www.pravoslavie.ru/sas/image/102326/232647.p.jpg?mtime=1459239680',
	'https://pbs.twimg.com/profile_images/457662750244630529/zJ1pJn-3.jpeg'
];

const avatar = avatars[Math.floor(Math.random() * avatars.length)];

class ChatPage extends Component {
	constructor(props) {
		super(props);
		this.state = { messages: [] };
		this.onSend = this.onSend.bind(this);
	}

	componentDidMount() {
		const { subscription, rtm } = this.props.chat;

		/* publish a message after being subscribed to sync on subscription */
		subscription.on('enter-subscribed', () => {
			console.log('Joined the channel!');
		});

		/* set callback for PDU with specific action */
		subscription.on('rtm/subscription/data', (pdu) => {
			pdu.body.messages.forEach((msg) => {
				const messages = JSON.parse(msg);
				this.setState((previousState) => (
					{
						messages: GiftedChat.append(previousState.messages, messages)
					}
				));
			});
		});
		rtm.start();
	}

	componentWillUnmount() {
		const { rtm } = this.props.chat;
		rtm.stop();
	}

	onSend(messages = []) {
		const { rtm, channel } = this.props.chat;
		/** Send a message to the open channel via the Satori SDK */
		rtm.publish(channel, JSON.stringify(messages), (pdu) => {
			console.log('Sent new message', messages, pdu);
		});
	}

	render() {
		const { fullHeight } = styles;
		return (
			<View style={fullHeight}>
				<GiftedChat
					messages={this.state.messages}
					onSend={this.onSend}
					user={{
						_id: uid,
						avatar
					}}
					bottomOffset={50}
				/>
			</View>
		);
	}
}

const styles = {
	fullHeight: {
		flex: 1
	}
};

const mapStateToProps = (state) => (
	{
		chat: state.chat
	}
);

export default connect(mapStateToProps, null)(ChatPage);
