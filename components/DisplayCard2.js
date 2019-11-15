import { Text } from 'native-base';
import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { withNavigation } from "react-navigation";
import Faded from '../utils/faded';
import ImgUtils from "../utils/helper";

class Home extends Component {
    clickShelf = (id, name, min, people, img) => {
        const {navigate} = this.props.navigation;
        console.log("Shelf clicked=>", id, name, min, people);
        navigate('SelectRecipe', {id, name, min, people, img});
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.clickShelf(this.props.type, this.props.name, this.props.min, this.props.people, this.props.img)}>
                <View style={{ width: this.props.width - 30, height: this.props.width/2 - 30, borderWidth: 1.5, borderColor: '#dddddd',
                borderRadius: 10, 
                backgroundColor: '#000', backgroundColor: 'black', opacity: 1,
                backgroundColor: 'transparent', opacity: 0.9
                }}>
                    <View style={{ flex: 2 }}>
                        <Image
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover', 
                            borderRadius: 10 }}
                            // source={require('../assets/images/recipe/1.jpg')}
                            source={ImgUtils.imageSelect(this.props.img)}
                            />
                    </View>
                        <View style={{position: 'absolute', top: 20, left: 10, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                            <Text style={{textTransform: 'capitalize', fontSize: 25, fontWeight: 'bold', color: '#fff',
                            }}>{this.props.name}</Text>
                        </View>
                    <Faded color="#000000" height={50}>
                    <View style={{position: 'absolute', bottom: 20, left: 10, justifyContent: 'flex-start', alignItems: 'flex-start',}}>
                        <Text  style={{textTransform: 'uppercase',  color: '#fff',
                        }}>{this.props.people} people  {this.props.min} minutes</Text>
                    </View>
                    </Faded>
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