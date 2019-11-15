import React, { Component } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { AnimatedRegion } from 'react-native-maps';
import { withNavigation } from 'react-navigation';
import RestaurantCard from '../components/DisplayCard3';
import Faded from '../utils/faded';

const { width, height } = Dimensions.get('window');

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class RestaurantScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        recipe: [],
        coordinate: new AnimatedRegion({
          latitude: LATITUDE,
          longitude: LONGITUDE,
        }),
    };
  }

  animate() {
    const { coordinate } = this.state;
    const newCoordinate = {
      latitude: LATITUDE + (Math.random() - 0.5) * (LATITUDE_DELTA / 2),
      longitude: LONGITUDE + (Math.random() - 0.5) * (LONGITUDE_DELTA / 2),
    };

    if (Platform.OS === 'android') {
      if (this.marker) {
        this.marker._component.animateMarkerToCoordinate(newCoordinate, 500);
      }
    } else {
      coordinate.timing(newCoordinate).start();
    }
  }


  onMapLayout = () => {
    this.setState({ isMapReady: true });
    console.log("map is ready!!");
    // this.showPopover()
    // Uncomment this if want to show first data below map
    // this.showData(0);
  }

  componentDidMount(){
    console.log("Restaurant Component mounted");
  }
 
  async componentWillMount() {
    //  const { details,surveyId } = this.props.navigation.state.params;
    //  console.log("CWM Shelf Component mounted", this.props.navigation.state.params);
    //  console.log("Shelf Details=>", details);
    //  await this.setState({shelfDetails: this.props.navigation.state.params});
     const tempShelf = [{
       shelf_id: 1,
       people: 20,
       min: 20,
       Title: 'Morning Smoothies'
     },
     {
       shelf_id: 2,
       people: 21,
       min: 30,
       Title: 'Fruity Oatmeal'
     },
     {
       shelf_id: 3,
       people: 22,
       min: 45,
       Title: 'Belgian Waffle'
     },
     {
       shelf_id: 4,
       shelf_name: "pg_wick"
     },
     {
       shelf_id: 5,
       shelf_name: "pg_wick2"
     },
     {
       shelf_id: 6,
       shelf_name: "pg_wick3"
     }
   ]
     await this.setState({recipe: tempShelf});
    //  await this.setState({recipe: surveyId})
  }

  render() {
    const {recipe} = this.state;
    let restaurantListRender = (<View></View>);
    if(recipe && recipe.length) {
          restaurantListRender = recipe && recipe.length && recipe.map(element => 
            // console.log('Element=>', element)
            (
              <View key={element.shelf_id} style={{marginBottom: 10}}>
              <RestaurantCard width={width}
                                    type={element.shelf_id}
                                    name={element.Title}
                                    min={element.min}
                                    people={element.people}
                                    // storeName={shelfDetails.details.title}
                                    />
              </View>
            )
          )
        }
    return (
      <View style={[{flex: 1}]}>
        
          <View style={[{height: '30%', borderWidth: 10, borderColor: '#000'}]}>
          <Faded color="#000000" height={50}>
          <View>
          <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          {/* <Marker.Animated
            ref={marker => {
              this.marker = marker;
            }}
            coordinate={this.state.coordinate}
          /> */}
        </MapView>
          </View>
           </Faded>
          </View>
       
        <ScrollView style={{height: '70%'}}>
            <View style={{ paddingHorizontal: 15, marginTop: 10, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {restaurantListRender}
            </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default withNavigation(RestaurantScreen);
