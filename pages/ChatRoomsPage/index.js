/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import { Tabs, Tab, Icon, Button } from 'react-native-elements';

class ChatRoomsPage extends Component {
    renderRooms() {
        const { roomViewStyle, roomDescriptionStyle, roomActiveStyle, roomTitleStyle } = styles;
        const rooms = [
            {
                img: "http://cdn.texasdisposalsys.netdna-cdn.com/sites/default/files/Interior_Hero_Landfill.jpg",
                description: "Clean up all this trash yo",
                active: true,
                name: "Lots of trash here"
            },
        ];
        return rooms.map((room, index) => {
            const { key, img,  description, active, name } = room;
            return (
                <TouchableOpacity onPress={() => Actions.chat()} key={index}>
                    <View style={roomViewStyle}>
                        <Image
                            style={{ width:64, height:64 }}
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
        return (
            <View>
                <Text style={styles.titleStyle}>Rooms</Text>
                <ScrollView>
                    {this.renderRooms()}
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    roomViewStyle: {
        borderRadius: 2,
        borderBottomColor: '#eeeeee',
        margin: 8,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    roomTitleStyle: {
        fontSize: 20
    },
    roomDescriptionStyle: {
        fontSize: 15
    },
    roomActiveStyle: {
        fontSize: 10
    },
    // Have some kind of consistent styling for the title bar
    titleStyle: {
        fontSize: 20,
        textAlign: 'center'
    }
}

const mapStateToProps = (state) => (
    {
        rooms: state.rooms
    }
);

export default connect(mapStateToProps, null)(ChatRoomsPage);
/* eslint-enable */
