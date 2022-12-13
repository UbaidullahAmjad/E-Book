import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ForgotPassword from './Conponents/ForgotPassword';
import Home from './Conponents/Home';
import Login from './Conponents/Login';
import LoginAgain from './Conponents/LoginAgain';
import OnBoard from './Conponents/OnBoard';
import SignUp from './Conponents/SignUp';
import SignUpOptions from './Conponents/SignUpOptions';
import bottomStack from './Conponents/Bottom/TabBar';
import Category from './Conponents/Category';
import Literature from './Conponents/Category/Literature';
import Economy from './Conponents/Category/Economy';
import Philosophy from './Conponents/Category/Philosophy';
import Entertainment from './Conponents/Category/Entertainment';
import ListPage from './Conponents/MyLibrary/ListPage';
import EpisodesList from './Conponents/MyLibrary/EpisodesList';
import UserProfile from './Conponents/Profile/UserProfile';
import Search from './Conponents/Search'
import Description from "./Conponents/Description"
import ContactUs from "./Conponents/ContactUs";
import FAQ from './Conponents/FAQ';
import AuthorList from './Conponents/AuthorList';
import Player from './Conponents/MyLibrary/Player';
import AddToChart from './Conponents/MyLibrary/AddToChart';

console.disableYellowBox = true;

const AppNavigator = createStackNavigator(
  {
    OnBoard: { screen: OnBoard },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    SignUpOptions: { screen: SignUpOptions },
    ForgotPassword: { screen: ForgotPassword },
    LoginAgain: { screen: LoginAgain },
    Home: { screen: Home },
    Category: { screen: Category },
    Literature: { screen: Literature },
    Economy: { screen: Economy },
    Philosophy: { screen: Philosophy },
    Entertainment: { screen: Entertainment },
    ListPage: { screen: ListPage },
    EpisodesList: { screen: EpisodesList },
    UserProfile: { screen: UserProfile },
    Search: { screen: Search },
    Description: { screen: Description },
    ContactUs: { screen: ContactUs },
    FAQ: { screen: FAQ },
    AuthorList: { screen: AuthorList },
    Player: { screen: Player },
    AddToChart:{screen: AddToChart}
  },
  {
    headerMode: 'none',
    mode: 'modal',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  },
);

const Appnav = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Appnav />
  );
};

export default App;
