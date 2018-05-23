import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';
// import placeImage from './src/assets/syd-1-1_0.jpg';

class App extends React.Component {
  placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName);
    // this.setState(prevState => {
    //   return { 
    //     places: prevState.places.concat({
    //       key: Math.random(), 
    //       name: placeName,
    //       image: {
    //         uri: "https://www.sydney.com/sites/sydney/files/styles/full_height_image/public/2018-02/syd-1-1_0.jpg?itok=UawSK9dM"
    //       }
    //     })
    //   };
    // });
  };

  placeDeleteHandler = () => {
    this.props.onDeletePlace();
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter((place) => {
    //       return place.key !== prevState.selectedPlace.key;
    //     }),
    //     selectedPlace: null
    //   };
    // });
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
    // this.setState(prevState => {
    //   return {
    //     selectedPlace: prevState.places.find(place => {
    //       return place.key == key;
    //     })
    //   };
    // });
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
    // this.setState({
    //   selectedPlace: null
    // });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.props.selectedPlace} 
                     onItemDeleted={this.placeDeleteHandler} 
                     onModalClosed={this.modalClosedHandler} />
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList 
          places={this.props.places} 
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);