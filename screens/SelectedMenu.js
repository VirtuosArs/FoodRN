import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Button, H1, Right, Text } from 'native-base';
import React, { Component } from 'react';
import { Animated, Dimensions, ImageBackground, Platform, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Colors from '../constants/Colors';
import Styles from '../styles/stylesDetails';

const { width, height } = Dimensions.get('window');

var isHidden = true;
var opacity = 1;
var backgroundColor= 'transparent';

class SelectedMenu extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            // title: navigation.state.params.name,
            title: '',
            // headerLeft: (
            //     <Left>
            //       <TouchableOpacity onPress={() => navigation.goBack(null)} style={{paddingRight: 20}}>
            //       <Ionicons name="ios-arrow-back" size={26} color='#fff' />
            //   </TouchableOpacity>
            //   </Left>
            //   ),
            headerRight: (
                <Right>
                  <TouchableOpacity onPress={() => console.log("Clicked bookmark")} style={{paddingRight: 20}}>
                  <FontAwesome name="bookmark-o" size={26} color='#fff' />
              </TouchableOpacity>
              </Right>
              ),
            headerTransparent: true,
            headerStyle: { borderBottomWidth: 0 }
        };
    };
  constructor(props) {
    super(props);
    this.state = {
        bounceValue: new Animated.Value(400),  //This is the initial position of the subview
        buttonText: "Show Subview",
        opacity: 1,
        backgroundColor: 'transparent',
    };
  }

  toggleSubview = async function () { 
    console.log("1 Clicked toggle subview....")
    await this.setState({
      buttonText: !isHidden ? "Show Subview" : "Hide Subview",
    //   opacity: isHidden ? 1 : 0.2,
    // backgroundColor: isHidden ? 'transparent' : 'black',
    });
    // opacity= !isHidden ? 1 : 0.2;
    // backgroundColor= !isHidden ? 'transparent' : 'black';

    var toValue = 400;

    if(isHidden) {
      toValue = 0;
    }

    //This will animate the transalteY of the subview between 0 & 100 depending on its current state
    //100 comes from the style below, which is the height of the subview.
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: toValue,
        velocity: 3,
        tension: 2,
        friction: 8,
      }
    ).start();

    isHidden = !isHidden;
    console.log("Clicked toggle subview....")
  }

  ntoggleView = async () => {
    //   console.log("1 new toggle");
      await this.setState({
        buttonText: !isHidden ? "Show Subview" : "Hide Subview",
        opacity: !isHidden ? 1 : 0.3,
        // backgroundColor: !isHidden ? 'transparent' : 'black',
      });
      // opacity= !isHidden ? 1 : 0.2;
      // backgroundColor= !isHidden ? 'transparent' : 'black';
  
      var toValue = 400;
  
      if(isHidden) {
        toValue = 0;
      }
  
      //This will animate the transalteY of the subview between 0 & 100 depending on its current state
      //100 comes from the style below, which is the height of the subview.
      Animated.spring(
        this.state.bounceValue,
        {
          toValue: toValue,
          velocity: 3,
          tension: 2,
          friction: 8,
        }
      ).start();
  
      isHidden = !isHidden;
    //   console.log("Clicked toggle subview....")
  }

  render() {
      const {navigation} = this.props;
      const {name, people, min} = navigation.state.params;
    return (
        <View style={{flex: 1, 
            }}>
        <View style={{flex: 1, opacity: this.state.opacity,
            backgroundColor: this.state.backgroundColor}}>
        <ImageBackground
        style={Styles.backgroundImage}
        source={require('../assets/images/recipe/2.jpg')}
    >
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
    <View style={{position: 'absolute', left: 20, right: 0, top: 150, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
      <H1 style={{color:"#fff"}}>{name}</H1></View>
    </ImageBackground>
        </View>
    <View style={{flex: 2.5, height: 100,  opacity: this.state.opacity,
            backgroundColor: this.state.backgroundColor
    // borderColor: '#000', borderWidth: 10
    }}>
    <View style={{height: '10%'}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
        <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems:'center', width: '50%'}}>
            <MaterialIcons name="restaurant" size={23} color={Colors.primaryColor}/>
            <Text style={{marginTop: 3, color: Colors.primaryColor, fontSize: 12}}>{people} people</Text>
        </View>
        <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems:'center', width: '50%'}}>
            <Ionicons name="ios-time" size={23} color={Colors.primaryColor}/>
            <Text style={{marginTop: 3, color: Colors.primaryColor, fontSize: 12}}>{min} minutes</Text>
        </View>
        </View>
    </View>
    <View style={{height: '4%'}}>
    {/* <TouchableOpacity 
    onPress={() => this.ntoggleView()}
    // onPress={this.toggleSubview.bind(this)}
    // onPress={()=> {this.toggleSubview()}}
    > */}
        <Button primary full onPress={() => this.ntoggleView()}
          style={{alignSelf: 'center', borderRadius: 10, backgroundColor: Colors.primaryColor, width: '90%'}}
          ><Text style={{textTransform: 'capitalize'}}>See Ingredients</Text></Button>
    {/* </TouchableOpacity> */}
    </View>
    <View style={{height: '86%'}}>

    </View>
    </View>
    <Animated.View
            style={[styles.subView,
              {transform: [{translateY: this.state.bounceValue}]}]}
          >
            <Text>This is a sub view</Text>
          </Animated.View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'ios' ? 60 : 80,
    },
    button: {
        padding: 8,
      },
      buttonText: {
        fontSize: 17,
        color: "#007AFF"
      },
      subView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FFFFFF",
        height: 400,
        zIndex: 100,
        borderColor: "#BDBFC7",
        borderWidth: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      }
  });

export default withNavigation(SelectedMenu);
