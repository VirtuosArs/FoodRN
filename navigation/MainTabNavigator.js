import { Foundation, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors';
// import HomeScreen from '../screens/HomeScreen';
import HomeScreen from '../screens/NewHomeScreen';
import RecipeScreen from '../screens/RecipeScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetail';
import RestaurantScreen from '../screens/RestaurantScreen';
import SelectedRecipeScreen from '../screens/SelectedMenu';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Recipe: RecipeScreen,
    SelectRecipe: SelectedRecipeScreen,
  },
  // config,
  {defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }},
);

HomeStack.navigationOptions = {
  tabBarLabel: null,
  tabBarIcon: ({ tintColor }) => (
    <Foundation name="clipboard-notes" size={26} color={tintColor}/>
  ),
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
  // ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Restaurant: RestaurantScreen,
    RestaurantDetail: RestaurantDetailScreen,
  },
  // config,
  {defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }},
);

LinksStack.navigationOptions = {
  tabBarLabel: null,
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  // ),
  tabBarIcon: ({ tintColor }) => (
    <MaterialIcons name="restaurant" size={26} color={tintColor}/>
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  // SettingsStack,
  },{
    tabBarLabel: '',
    tabBarOptions: {
        activeTintColor: Colors.primaryColor,
        showLabel: false,
        inactiveTintColor: 'grey',
  }      
});

tabNavigator.path = '';

export default tabNavigator;
