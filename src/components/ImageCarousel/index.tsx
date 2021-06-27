import React from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

const ImageCarousel = ({images}: {images: [string]}) => {
  const windowWidth = useWindowDimensions().width;
  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWidth - 40}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  image: {
    margin: 10,
    height: 250,
    resizeMode: 'contain',
  },
});

export default ImageCarousel;
