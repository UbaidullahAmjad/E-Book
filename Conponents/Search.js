import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    StatusBar,
    Dimensions,
    Text,
    TouchableOpacity
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Storage from './helper/Storage';
const screenWidth = Dimensions.get('window').width;

import configs from './constants/configs';
import axios from 'axios';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            packageList: Storage.packageList,
            Categories: [],
            DATA: [],
            Packages: [],
            images: [],
            balance: '',
        };
        this.toggle = this.toggle.bind(this);
        this.updateMenuState = this.updateMenuState.bind(this);
        this.onMenuItemSelected = this.onMenuItemSelected.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }
    updateMenuState(isOpen) {
        this.setState({ isOpen });
    }
    onMenuItemSelected = (item) =>
        this.setState({
            isOpen: false,
            selectedItem: item,
        });

    show_amount = async () => {
        axios
            .get(configs.baseURL + `wallet-view.php?user_id=${this.props.users[0].user_id}`)
            .then((response) => {
                this.setState({ DATA: response.data })
            })
            .then(() => console.log('hhhhh', this.state.DATA))
            .catch((E) => console.log(E));
    }

    componentDidMount() {
        this.show_amount();
        this.GetDataServiceAsync();
        this.GetDataPackagesAsync();
        this.GetSliderImageAsync();
    }


    GetDataServiceAsync = async () => {
        axios
            .get(configs.baseURL + 'all_category.php')
            .then((response) => {
                this.setState({ Categories: response.data })
                console.log(response.data)
            })
            .then(() =>
                this.setState({
                    Categories: [...this.state.Categories,
                    { "cat_id": "0000", "pack_name": "Personal Package", "price": "1999", "result": "package found", "validity": "2 months" }
                    ]
                })

            )
            .catch((e) => console.log(e));
    };

    GetDataPackagesAsync = async () => {
        axios
            .get(configs.baseURL + 'all_package.php')
            .then((response) => this.setState({ Packages: response.data }))
            .then(() => console.log('Packages : ', this.state.Packages))
            .catch((e) => console.log(e));
    };

    GetSliderImageAsync = async () => {
        axios
            .get(configs.baseURL + 'slider_images.php')
            .then((response) => this.setState({ images: response.data }))
            .then(() => console.log('images : ', this.state.images))
            .catch((e) => console.log(e));
    };

    render() {
        return (
            <View style={styles.parentView}>
                <StatusBar
                    barStyle="light-content"
                    translucent={false}
                    backgroundColor='white'
                />
                <View style={styles.header}>
                    <View style={styles.headerSearchBaView}>
                        <View style={styles.searchBarSearchIconView}>
                            <MaterialIcons
                                color='black'
                                name="search"
                                size={22}
                            />
                        </View>
                        <View style={styles.searchBarInputView}>
                            <TextInput style={{ fontSize: 16 }} placeholder="Search" />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.menuButton} onPress={() => this.props.navigation.goBack()}>
                        <Text style={{ fontSize: 14, color: "orange" }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parentView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    header: {
        width: '100%',
        height: 55,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    mainBody: {
        marginTop: 10,
        width: '90%',
        marginHorizontal: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    packageHeading: {
        fontSize: 18,
        color: '#777',
        paddingBottom: 15,
    },
    menuButton: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        position: 'absolute',
        right: 10,
    },

    bannerBody: {
        width: '100%',
    },
    bannerView: {
        height: 200,
        width: screenWidth,
        marginTop: 0,
    },
    headerSearchBaView: {
        marginRight: 50,
        width: '75%',
        marginTop: 0,
        backgroundColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 90,
        height: 40,
    },
    searchBarSearchIconView: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    searchBarInputView: {
        width: '85%',
        height: '100%',
        borderRadius: 90,
    },

    fbButton: {
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#0000ff',
        height: 45,
    },

    logo: {
        position: 'absolute',
        top: 10,
        left: 100,
    },
    mainText: {
        textAlign: 'center',
        fontSize: 18,
    },
    packageView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        flexDirection: 'row',
        height: 60,
    },
    packageImageView: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    packageImage: {
        width: 70,
        height: 70,
    },
    categoryParentView: {
        flex: 4,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryMainView: {
        flex: 1,
        marginHorizontal: 6,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        elevation: 4,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    categoryImageView: {
        width: 60,
        height: 60,
        borderRadius: 5,
        marginTop: 5,
        borderColor: '#777',
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryImage: {
        width: 60,
        height: 60,
    },
});
