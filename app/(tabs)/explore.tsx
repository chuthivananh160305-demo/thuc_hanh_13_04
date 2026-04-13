import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/theme';

const categories = [
  { id: '1', name: 'Fresh Fruits\n& Vegetable', image: require('../../assets/images/fp1.png'), bg: '#EEF8F2', border: '#53B175' },
  { id: '2', name: 'Cooking Oil\n& Ghee', image: require('../../assets/images/fp2.png'), bg: '#FFF6EE', border: '#F8A44C' },
  { id: '3', name: 'Meat & Fish', image: require('../../assets/images/fp3.png'), bg: '#FDE8E4', border: '#F7A593' },
  { id: '4', name: 'Bakery & Snacks', image: require('../../assets/images/fp5.png'), bg: '#F4EBF7', border: '#D3B0E0' },
  { id: '5', name: 'Dairy & Eggs', image: require('../../assets/images/fp6.png'), bg: '#FFF8E5', border: '#FDE598' },
  { id: '6', name: 'Beverages', image: require('../../assets/images/fp7.png'), bg: '#EDF7FC', border: '#B7DFF5' },
];

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Find Products</Text>
      
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color={COLORS.gray} />
        <TextInput placeholder="Search Store" style={styles.searchInput} />
      </View>

      <FlatList
        data={categories}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.gridContainer}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[styles.card, { backgroundColor: item.bg, borderColor: item.border }]}
            onPress={() => item.name.includes('Beverages') ? router.push('/beverages') : null}
          >
            {/* Đã sửa từ {{ uri: item.image }} thành item.image */}
            <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
            <Text style={styles.cardTitle}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 30, marginBottom: 30, color: COLORS.black },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F2F3F2', marginHorizontal: 20, paddingHorizontal: 15, borderRadius: 15, height: 50, marginBottom: 20 },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16 },
  gridContainer: { paddingHorizontal: 10, paddingBottom: 20 },
  card: { flex: 1, margin: 10, height: 190, borderRadius: 18, borderWidth: 1, alignItems: 'center', justifyContent: 'center', padding: 15 },
  cardImage: { width: 100, height: 100, marginBottom: 15 }, // Đã chỉnh kích thước to hơn một chút
  cardTitle: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: COLORS.black }
});