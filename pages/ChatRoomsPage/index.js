/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import { Tabs, Tab, Icon, Button } from 'react-native-elements';
import * as actions from '../../actions';
import { BottomBar } from '../../components';

class ChatRoomsPage extends Component {

    componentDidMount() {
        this.props.getRoomsAction();
    }

    renderRooms() {
        const { roomViewStyle, roomDescriptionStyle, roomActiveStyle, roomTitleStyle } = styles;
        const rooms = this.props.rooms;
        return rooms.map((room, index) => {
            const { key, img,  description, active, name } = room;
            return (
                <TouchableOpacity onPress={() => Actions.chat()} key={index}>
                    <View style={roomViewStyle}>
                        <Image
                            style={{ width: 64, height: 64, borderRadius: 32, }}
                            source={{ uri:img }}
                        />

                        <View style={{
                            alignItems: 'flex-start',
                            paddingLeft: 16,
                            padding: 8,
                            justifyContent: 'center'
                        }}>
                            <Text style={roomTitleStyle}>
                                { name }
                            </Text>
                            <Text style={roomDescriptionStyle}>
                                { description }
                            </Text>
                            <Text style={roomActiveStyle}>
                                { active }
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

            );
        });
    }

    render() {
        const buttons = [{
            id: 1,
            icon: 'account-circle',
            onPress: () => Actions.profile(),
            size: 34,
            color: '#59D988',
            iconColor: 'white'
        }, {
            id: 2,
            icon: 'map',
            onPress: () => Actions.map(),
            size: 34,
            color: '#59D988',
            iconColor: 'white'
        }, {
            id: 3,
            icon: 'chat',
            onPress: () => Actions.chatRooms(),
            size: 34,
            color: '#acecc3',
            iconColor: 'white'
        }];

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 8 }}>
                    <Text style={styles.titleStyle}>Rooms</Text>
                    <ScrollView>
                        {this.renderRooms()}
                    </ScrollView>
                </View>
                <BottomBar 
                    style={{ flex: 1 }}
                    buttons={buttons}
                />
            </View>
        );
    }
}

const styles = {
    roomViewStyle: {
        borderRadius: 2,
        margin: 8,
        paddingRight: 64,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    roomTitleStyle: {
        fontSize: 20
    },
    roomDescriptionStyle: {
        fontSize: 15,
    },
    roomActiveStyle: {
        fontSize: 10
    },
    // Have some kind of consistent styling for the title bar
    titleStyle: {
        marginTop:24,
        padding:8,
        fontSize: 20,
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#eeeeee',
    }
}

const mapStateToProps = (state) => (
    {
        rooms: state.rooms
    }
);

export default connect(mapStateToProps, actions)(ChatRoomsPage);
/* eslint-enable */
