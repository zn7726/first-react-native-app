import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import startMainTabs from '../MainTabs/startMaintab';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/background.jpg';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

class AuthScreen extends Component {
  state = {

  };

  constructor(props){
    super(props);

    Dimensions.addEventListener("change", (dims) => {
      console.log(dims);
    });
  }

  componentWillUnmount()
  {
    Dimensions.removeEventListener("change");
  }


    loginHandler = () => {
        startMainTabs();
    };

    render() {
        let headingText = null;

        if(Dimensions.get('window').height > 500) {
          headingText = (
            <MainText>
              <HeadingText style={styles.headingText}>Please Log in</HeadingText>
            </MainText>
          )
        }
        return (
          <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.container}>
              {headingText}
                <ButtonWithBackground color="#29aaf4" >Switch to Login</ButtonWithBackground>
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder="Your EMail Address" style={styles.input}/>
                    <View style={styles.passwordContainer}>
                      <View style={styles.passwordWrapper}>
                        <DefaultInput placeholder="Password" style={styles.input}/>
                      </View>
                      <View style={styles.passwordWrapper}>
                        <DefaultInput placeholder="Confirm Password" style={styles.input}/>
                      </View>
                    </View>
                </View>
              <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>Submit</ButtonWithBackground>
            </View>
          </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // borderColor: "red",
        // borderWidth: 1,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    headingText: {
        fontSize: 30,
        color: "black"
    },
    inputContainer: {
        width: "80%"
    },

    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    backgroundImage: {
      width: "100%",
      flex: 1
    },
  passwordContainer: {
      flexDirection: Dimensions.get('window').height > 500 ? 'column' : "row",
    justifyContent: "space-between"
  },
  passwordWrapper: {
      width: Dimensions.get('window').height > 500 ? "100%" : "45%"
  }
});

export default AuthScreen;