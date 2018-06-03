import React, { Component } from 'react';
import { StyleSheet, Button } from 'react-native';
import DefaultInput from "../UI/DefaultInput/DefaultInput";

const placeInput = props => {

      return (
        <DefaultInput placeholder="An awesome place"
                      value={props.placeName}
                      onChangeText={props.onChangeText}/>

      );
};

const styles = StyleSheet.create({
    inputContainer: {
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center"
    },
    placeInput:{
      width: "70%"
    },
    placeButton: {
      width: "30%"
    }
  });

  export default placeInput;