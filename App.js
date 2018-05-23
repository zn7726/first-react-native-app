import React from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import placeImage from './src/assets/syd-1-1_0.jpg';

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = (placeName) => {
    this.setState(prevState => {
      return { 
        places: prevState.places.concat({
          key: Math.random(), 
          name: placeName,
          image: {
            uri: "https://www.sydney.com/sites/sydney/files/styles/full_height_image/public/2018-02/syd-1-1_0.jpg?itok=UawSK9dM"
          }
        })
      };
    });
  };

  placeDeleteHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key == key;
        })
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace} 
                     onItemDeleted={this.placeDeleteHandler} 
                     onModalClosed={this.modalClosedHandler} />
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList 
          places={this.state.places} 
          onItemDeleted={this.placeDeleteHandler}
          onItemSelected={this.placeSelectedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 26,
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
