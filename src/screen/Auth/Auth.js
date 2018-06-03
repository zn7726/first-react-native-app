import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

import startMainTabs from '../MainTabs/startMaintab';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/background.jpg';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    };

    render() {
        return (
          <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.container}>
                <MainText>
                  <HeadingText style={styles.headingText}>Please Log in</HeadingText>
                </MainText>
                <ButtonWithBackground color="#29aaf4" >Switch to Login</ButtonWithBackground>
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder="Your EMail Address" style={styles.input}/>
                    <DefaultInput placeholder="Password" style={styles.input}/>
                    <DefaultInput placeholder="Confirm Password" style={styles.input}/>
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
    }
});

export default AuthScreen;