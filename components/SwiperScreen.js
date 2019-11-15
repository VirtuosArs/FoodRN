import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { DOWNLOAD_IMAGE } from "../../config/config";
// let ScreenHeight = Dimensions.get("window").height/3;
const { width, height } = Dimensions.get('window');

export default class ReactSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auterScrollEnable: true,
    }
  }
 componentDidMount(){
   console.log("Swipe Component mounted");
   console.log(this.props.capturedImages);
 }

  changedIndex = (index) => {
    this.props.activatedIndex(index);
 }

  render() {
    const {capturedImages} = this.props;
    return (
      <View style={{height: height/3}}>
          <Swiper onIndexChanged={(index) => this.changedIndex(index)} key={capturedImages.length} showsButtons={true}>
            {
                capturedImages != undefined && capturedImages.length > 0 && capturedImages.map((y) => {
                    return (<View style={styles.slideDefault} key={y}>
                      {/* {console.log("In Swipe Component")} */}
                      {/* {console.log(DOWNLOAD_IMAGE+ y.result.output_file)} */}
                      <Image resizeMode="contain" source={{uri : DOWNLOAD_IMAGE + y.result.output_file}} style={{width, height: 400}}/>
                    </View>);
                })
            }
          </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  slideDefault: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  }
});