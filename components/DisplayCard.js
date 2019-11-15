import { Text } from 'native-base';
import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { withNavigation } from "react-navigation";
import ImgUtils from "../utils/helper";

class Home extends Component {
    clickShelf = (id, name, storeName) => {
        const {navigate} = this.props.navigation;
        console.log("Shelf clicked=>", id, name);
        navigate('Recipe', {id, name, storeName});
    }


    // imageSelect = network => {
    //     if (network === null) {
    //       return Images.logos.other;
    //     }
      
    //     const networkArray = {
    //       'R1': Images.logos.r1,
    //       'R2': Images.logos.r2,
    //       'Other': Images.logos.r1,
    //     };
      
    //     return networkArray[network];
    //   };

    render() {
        // var imgPath = `../assets/images/recipe/${this.props.img}`;
        // console.log("Img path=>", imgPath);
        return (
            <TouchableOpacity onPress={() => this.clickShelf(this.props.type, this.props.name, this.props.subHead)}>
                <View style={{ width: this.props.width - 30, height: this.props.width - 90, borderWidth: 1.5, borderColor: '#dddddd',
                borderRadius: 10, 
                backgroundColor: '#000', backgroundColor: 'transparent', opacity: 0.9
                }}>
                    <View style={{ flex: 2 }}>
                        <Image
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover', 
                            borderRadius: 10 }}
                            // source={require('../assets/images/recipe/1.jpg')}
                            // source={require(this.props.img)}
                            // source={{uri : this.props.img}} 
                            source={ImgUtils.imageSelect(this.props.img)}
                            />
                    </View>
<View style={{position: 'absolute', top: 10, left: 10, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'flex-start',
// backgroundColor: 'rgba(39,62,84,0.82)', backgroundColor: 'black', opacity: 0.9
}}>
  <Text  style={{textTransform: 'uppercase',  color: '#fff',
//   backgroundColor: 'rgba(39,62,84,0.82)', backgroundColor: 'black', opacity: 0.2
  }}>{this.props.subHead}</Text>
</View>
                    <View style={{position: 'absolute', top: 30, left: 10, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'flex-start',
                    // backgroundColor: 'rgba(39,62,84,0.82)', backgroundColor: 'black', opacity: 0.9
                    }}>
  <Text style={{textTransform: 'capitalize', fontSize: 25, fontWeight: 'bold', color: '#fff',
// backgroundColor: 'rgba(39,62,84,0.82)', backgroundColor: 'black', opacity: 0.3
}}>{this.props.name}</Text>
</View>
                    {/* <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                        <Text style={{color: '#3E50B4', fontWeight: 'bold' }}>{this.props.name}</Text>
                    </View> */}
                </View>
            </TouchableOpacity>
        );
    }
}
export default withNavigation(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});