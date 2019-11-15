import { Text } from "native-base";
import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import StarRating from 'react-native-star-rating';
import { withNavigation } from "react-navigation";

class Home extends Component {
    clickShelf = (id, name, min, people) => {
        const {navigate} = this.props.navigation;
        console.log("Shelf clicked=>", id, name, min, people);
        navigate('RestaurantDetail', {id, name, min, people});
    }
    render() {
        return (
            <TouchableOpacity onPress={() => this.clickShelf(this.props.type, this.props.name, this.props.min, this.props.people)}>
                <View style={{ width: this.props.width - 30, height: this.props.width/3 - 30, borderWidth: 1.5, borderColor: '#dddddd',
                borderRadius: 10,
                backgroundColor: '#fff',
                }}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                    <View style={{alignSelf: 'center', justifyContent: 'flex-start', alignItems: 'flex-start', width: '70%'}}>
                        <Text style={{fontWeight: 'bold'}}>Head1</Text>
                        <Text style={{color: '#74C835'}}>Sub head</Text>

                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10}}>
                            <View style={{alignSelf: 'flex-start', justifyContent: 'flex-start', alignItems: 'flex-start', width: '60%'}}>
                                <StarRating
                                disable={true}
                                maxStars={5}
                                rating={4}
                                starSize={10}
                                fullStarColor='#74C835'
                                />   
                            </View>
                            <View style={{alignSelf: 'flex-start', justifyContent: 'flex-start', alignItems: 'flex-start', width: '40%'}}>
                            <Text style={{fontSize: 14, color: '#BDBFC7'}}>129 reviews</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{alignSelf: 'center', justifyContent: 'center', alignItems:'center', width: '30%'}}>
                    <Image
                            style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'cover', 
                            borderRadius: 5 }}
                            source={require('../assets/images/recipe/2.jpg')} />
                    </View>
                    </View>
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