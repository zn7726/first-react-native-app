import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {
  render() {
    return (
      <View style={[styles.container, { width: Dimensions.get("window") * 0.6 }]}>
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon name="ios-log-out" size={30} color='#aaa' />
            <Text style={styles.drawerItemIcon}>Sign Out</Text>
          </View>
        </TouchableOpacity>

      </View>

    );
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 50,
    flex: 1
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#eee"
  },
  drawerItemIcon: {
    marginLeft: 10
  }
})

export default SideDrawer;