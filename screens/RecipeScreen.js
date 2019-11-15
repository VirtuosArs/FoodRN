import React, { Component } from 'react';
import { Animated, Dimensions, SafeAreaView, ScrollView, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import RecipeCard from '../components/DisplayCard2';

const { width, height } = Dimensions.get('window');

class RecipeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.state.params.name,
          // headerRight: (
          //   <PopupMenu actions={['Log Out']} 
          //   onPress={CommonUtils.onPopupEvent} />
          // )
        };
      };
  constructor(props) {
    super(props);
    this.state = {
        recipe: [],
    };
  }

  componentDidMount(){
    console.log("Recipe Component mounted");
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
    //  {
    //    shelf_id: 4,
    //    shelf_name: "pg_wick"
    //  },
    //  {
    //    shelf_id: 5,
    //    shelf_name: "pg_wick2"
    //  },
    //  {
    //    shelf_id: 6,
    //    shelf_name: "pg_wick3"
    //  }
   ]
     await this.setState({recipe: tempShelf});
    //  await this.setState({recipe: surveyId})
  }

  render() {
    const {recipe} = this.state;
    const {navigate} = this.props.navigation;
    let recipeListRender = (<View></View>);
    if(recipe && recipe.length) {
          recipeListRender = recipe && recipe.length && recipe.map(element => 
            // console.log('Element=>', element)
            (
              <View key={element.shelf_id} style={{marginBottom: 10}}>
              <RecipeCard width={width}
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
      <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{height : height}} onScroll={ Animated.event([{nativeEvent: {contentOffset: {y: this._animatedValue}}}]) }
            scrollEventThrottle={16}>
        <View style={{ paddingHorizontal: 15, marginTop: 10, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {recipeListRender}
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default withNavigation(RecipeScreen);
