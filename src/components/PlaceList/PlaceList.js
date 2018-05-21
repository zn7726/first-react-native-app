import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './../ListItem/ListItem';

const placeList = ({places, onItemDeleted}) => {
    const placesOutput = places.map((place, index) => {
        return (
            <ListItem 
                key={index} 
                placeName={place} 
                onItemPressed={()=>onItemDeleted(index)}
            />
        );
    });

    return (
        <FlatList 
            style={styles.listContainer} 
            data={places}
            renderItem={(info)=>(
                <ListItem 
                    placeName={info.item.name} 
                    onItemPressed={()=>onItemDeleted(info.item.key)}
                />
            )}
        />
            
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
  });
export default placeList;