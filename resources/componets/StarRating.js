import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const STAR_IMAGE = require('../images/star-filled.png');
const EMPTY_STAR_IMAGE = require('../images/star-empty.png');

function StarRating({ initialRating }) {
  const [rating, setRating] = useState(initialRating);

  const handleStarPress = (index) => {
    setRating(index + 1);
  };

  return (
    <View style={styles.starContainer}>
      {[1, 2, 3, 4, 5].map((index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {handleStarPress(index) , console.log(index)}}
        >
          <Image
            style={styles.star}
            source={index + 1 <= rating ? STAR_IMAGE : EMPTY_STAR_IMAGE}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
    width : 300,
    justifyContent : 'space-between'
  },
  star: {
    width: 50,
    height: 50,

  },
});

export default StarRating 