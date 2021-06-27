import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import product from '../../data/product';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/* Image corousel */}
      <ImageCarousel images={product.images} />

      {/* Option Selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

      {/* Price */}
      <Text style={styles.price}>
        from ${product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
        )}
      </Text>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Quantity Selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Button */}
      <Button
        text={'Add to Cart'}
        onPress={() => {
          console.warn('Add to cart');
        }}
        containerStyles={{backgroundColor: '#e3c905'}}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.warn('Buy Now');
        }}
      />
    </View>
  );
};

export default ProductScreen;
