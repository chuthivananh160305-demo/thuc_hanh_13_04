import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';

const beverages = [
  { id: '1', name: 'Diet Coke', price: '$1.99', unit: '355ml, Price', image: require('../assets/images/b1.png') },
  { id: '2', name: 'Sprite Can', price: '$1.50', unit: '325ml, Price', image: require('../assets/images/b2.png') },
  { id: '3', name: 'Apple & Grape Juice', price: '$15.99', unit: '2L, Price', image: require('../assets/images/b3.png') },
  { id: '4', name: 'Orange Juice', price: '$15.99', unit: '2L, Price', image: require('../assets/images/b4.png') },
  { id: '5', name: 'CocaCola Can', price: '$4.99', unit: '325ml, Price', image: require('../assets/images/b5.png') },
  { id: '6', name: 'Pepsi Can', price: '$4.99', unit: '325ml, Price', image: require('../assets/images/b6.png') },
];

export default function BeveragesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconBtn}>
          <Feather name="chevron-left" size={28} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Beverages</Text>
        <TouchableOpacity style={styles.iconBtn}>
          <Feather name="sliders" size={24} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={beverages}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} resizeMode="contain" />
            
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productUnit}>{item.unit}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.productPrice}>{item.price}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Feather name="plus" size={20} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    marginTop: 10, 
    marginBottom: 20 
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.black },
  iconBtn: { padding: 5 },
  listContainer: { paddingHorizontal: 10, paddingBottom: 20 },
  productCard: { 
    flex: 1, 
    margin: 10, 
    padding: 15, 
    borderRadius: 18, 
    borderWidth: 1, 
    borderColor: '#E2E2E2', 
    backgroundColor: '#fff' 
  },
  productImage: { width: '100%', height: 100, marginBottom: 15 }, // Tăng height lên 100 cho ảnh rõ hơn
  productName: { fontSize: 16, fontWeight: 'bold', color: COLORS.black, marginBottom: 5 },
  productUnit: { fontSize: 14, color: COLORS.gray, marginBottom: 15 },
  priceRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 'auto' 
  },
  productPrice: { fontSize: 18, fontWeight: 'bold', color: COLORS.black },
  addButton: { 
    backgroundColor: COLORS.primary, 
    width: 45, 
    height: 45, 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
});