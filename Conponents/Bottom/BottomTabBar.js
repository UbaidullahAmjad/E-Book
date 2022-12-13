import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';

export default class BottomTabBar extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "white" }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: 'space-around',
                    backgroundColor: "silver",
                    margin: 10,
                    paddingVertical: 10,
                    borderRadius: 30
                }}>
                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }} onPress={() => this.props.navigation.navigate('Home')}>
                        <Fontisto
                            name='home'
                            size={20}
                            style={{ color: this.props.status ? 'orange' : 'white' }}
                        />
                        <Text style={{ color: this.props.status ? 'orange' : "white", marginTop: 5, fontSize: 10 }}> Home </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }} onPress={() => this.props.navigation.navigate('Category')}>
                        <Fontisto
                            name='list-2'
                            size={20}
                            style={{ color: this.props.category ? 'orange' : "white" }}
                        />
                        <Text style={{ color: this.props.category ? 'orange' : "white", marginTop: 5, fontSize: 10 }}> Category </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }} onPress={() => this.props.navigation.navigate('ListPage')}>
                        <Fontisto
                            name='star'
                            size={20}
                            style={{ color: this.props.Library ? 'orange' : "white" }}
                        />
                        <Text style={{ color: this.props.Library ? 'orange' : "white", marginTop: 5, fontSize: 10 }}> My Library </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }} onPress={() => this.props.navigation.navigate('UserProfile')}>
                        <Fontisto
                            name='male'
                            size={20}
                            style={{ color: this.props.Profile ? 'orange' : "white" }}
                        />
                        <Text style={{ color: this.props.Profile ? 'orange' : "white", marginTop: 5, fontSize: 10 }}> Profile </Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({})
