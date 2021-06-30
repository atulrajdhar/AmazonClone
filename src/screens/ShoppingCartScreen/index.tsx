import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Button from '../../components/Button';
import CartProductItem from '../../components/CartProductItem';

import products from '../../data/cart';

const ShoppingCartScreen = () => {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );

  return (
    <View style={styles.page}>
      {/* Render Product Component */}
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        keyExtractor={({id}) => id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Subtotal ({products.length} items):{' '}
              <Text style={{color: '#e47911'}}>${totalPrice.toFixed(2)}</Text>
            </Text>
            <Button
              text="Proceed to checkout"
              onPress={() => console.warn('go to checkout')}
              containerStyles={{backgroundColor: '#f7e300', borderColor: '#c7b702'}}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default ShoppingCartScreen;
