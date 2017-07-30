/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import { Tabs, Tab, Icon, Button } from 'react-native-elements';

class ChatRoomsPage extends Component {
    renderRooms() {
        const { roomViewStyle, roomDescriptionStyle, roomActiveStyle, roomTitleStyle } = styles;
        const rooms = [{
                img: "https://f4.bcbits.com/img/0006688092_10.jpg",
                description: "There's a lot of trash where there should be beautiful nature",
                active: true,
                name: "Dirty beach"
            }, {
                img: "http://cdn.texasdisposalsys.netdna-cdn.com/sites/default/files/Interior_Hero_Landfill.jpg",
                description: "Clean up all this trash yo",
                active: false,
                name: "Lots of trash here"
            }, {
                img: "http://www.homedepot.com/catalog/productImages/400_compressed/d9/d97bfbf9-cf37-40d2-8fe2-6be3958eba6d_400_compressed.jpg",
                description: "Found some trash in this",
                active: false,
                name: "Trash found"
            },
        ];
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

export default connect(mapStateToProps, null)(ChatRoomsPage);
/* eslint-enable */
