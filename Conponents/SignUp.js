import React from "react";
import {
    Image,
    StatusBar,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default class SignUp extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar style="auto" backgroundColor="white" />
                <View>
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text
                            style={[
                                styles.text,
                                { marginTop: 10, fontSize: 22, fontWeight: "bold" },
                            ]}
                        >
                            Sign Up
          </Text>
                    </View>
                    <View style={{ flex: 1, marginTop: 150 }}>

                        <View>
                            <TextInput
                                placeholderTextColor='grey'
                                placeholder='email'
                                style={styles.input}
                            />
                            <View
                                style={{ borderBottomWidth: 1, borderBottomColor: "#D8D8D8" }}
                            ></View>

                            <View style={{ marginTop: 32, marginBottom: 8 }}>
                                <TextInput
                                    placeholderTextColor='grey'
                                    placeholder='password'
                                    secureTextEntry={true}
                                    style={styles.input}
                                />
                                <View
                                    style={{ borderBottomWidth: 1, borderBottomColor: "#D8D8D8" }}
                                ></View>
                            </View>

                            <View style={{ marginTop: 32, marginBottom: 8 }}>
                                <TextInput
                                    placeholderTextColor='grey'
                                    placeholder='confirm password'
                                    secureTextEntry={true}
                                    style={styles.input}
                                />
                                <View
                                    style={{ borderBottomWidth: 1, borderBottomColor: "#D8D8D8" }}
                                ></View>
                            </View>
                        </View>

                        <TouchableOpacity style={[styles.submitContainer]}>
                            <Text
                                style={[
                                    styles.text,
                                    { color: "#fff", fontWeight: "600", fontSize: 16 },
                                ]}
                            >
                                Sign Up
          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Text
                                style={[
                                    styles.text,
                                    {
                                        fontSize: 14,
                                        marginTop: 24,
                                        color: "#ABB4BD",
                                    },
                                ]}
                            >
                                already remember?
          <Text style={[styles.text, styles.link]}> Sign In</Text>
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    inputTitle: {
        color: "#ABB4BA",
        fontSize: 14,
    },
    input: {
        paddingVertical: 12,
        color: "#1D2020",
        fontSize: 14,
    },
    text: {
        color: "black",
    },
    socialButtons: {
        flexDirection: "row",
        // marginHorizontal: 12,
        marginVertical: 0,
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(171,180,189,0.65)",
        borderRadius: 50,
        backgroundColor: "#fff",
        shadowColor: "rgba(171,180,189,0.35)",
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
    },
    socialLogo: {
        marginRight: 8,
    },
    link: {
        color: "orange",
        fontSize: 14,
        fontWeight: "500",
    },
    submitContainer: {
        backgroundColor: "orange",
        fontSize: 16,
        borderRadius: 10,
        paddingVertical: 12,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "rgba(255,22,84,0.24)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 30,
    },
});
