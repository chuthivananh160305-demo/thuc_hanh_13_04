import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/theme';

// 1. Dữ liệu Exclusive Offer
const exclusiveOffers = [
  { id: '1', name: 'Organic Bananas', price: '$4.99', unit: '7pcs, Priceg', image: require('../../assets/images/chuoi.png') },
  { id: '2', name: 'Red Apple', price: '$4.99', unit: '1kg, Priceg', image: require('../../assets/images/tao.png')},
];

// 2. Dữ liệu Best Selling (Đã cập nhật theo yêu cầu của bạn)
const bestSellingProducts = [
  { id: 'bs1', name: 'Bell Pepper', price: '$4.99', unit: '1kg, Price', image: require('../../assets/images/otchuong.jpg') },
  { id: 'bs2', name: 'Ginger', price: '$2.99', unit: '250g, Price', image: require('../../assets/images/ginger.jpg') },
];

// 3. Dữ liệu Danh mục Groceries
const groceriesCategories = [
  { id: 'g1', name: 'Pulses', image: require('../../assets/images/ngucoc.png'), bg: '#FEF1E4' }, 
  { id: 'g2', name: 'Rice', image: require('../../assets/images/hugao.png'), bg: '#E5F3EA' },
];

// 4. Dữ liệu Sản phẩm Groceries
const groceriesProducts = [
  { id: '3', name: 'Beef Bone', price: '$4.99', unit: '1kg, Priceg', image: require('../../assets/images/bo.png') },
  { id: '4', name: 'Broiler Chicken', price: '$4.99', unit: '1kg, Priceg', image: require('../../assets/images/ga.png') },
];

export default function HomeScreen() {
  
  // Hàm render thẻ sản phẩm dùng chung
  const renderProductCard = (item: any) => (
    <TouchableOpacity 
      key={item.id} 
      style={styles.productCard}
      onPress={() => router.push({ pathname: '/product', params: { id: item.id } })}
    >
      <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productUnit}>{item.unit}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.productPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Feather name="plus" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        
        {/* Header: Logo & Location */}
        <View style={styles.header}>
          <Image source={require('../../assets/images/Group.png')} style={{width: 30, height: 30, marginBottom: 5}} resizeMode="contain" />
          <View style={styles.locationRow}>
            <Feather name="map-pin" size={18} color={COLORS.gray} />
            <Text style={styles.locationText}>Dhaka, Banassre</Text>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color={COLORS.gray} />
          <TextInput placeholder="Search Store" style={styles.searchInput} />
        </View>

        {/* Banner */}
        <View style={styles.bannerContainer}>
          <Image 
            source={require('../../assets/images/fresh.png')} 
            style={styles.banner} 
            resizeMode="cover" 
          />
        </View>

        {/* Exclusive Offer Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {exclusiveOffers.map(renderProductCard)}
        </ScrollView>

        {/* Best Selling Section - ĐÃ ĐỔI DỮ LIỆU SANG bestSellingProducts */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {bestSellingProducts.map(renderProductCard)}
        </ScrollView>

        {/* Groceries Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Groceries</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
        </View>

        {/* Danh mục Groceries cuộn ngang */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.horizontalScroll, { marginBottom: 15 }]}>
          {groceriesCategories.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={[styles.groceryCategoryCard, { backgroundColor: item.bg }]}
            >
              <Image source={item.image} style={styles.groceryCategoryImage} resizeMode="contain" />
              <Text style={styles.groceryCategoryName}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Sản phẩm Groceries cuộn ngang */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {groceriesProducts.map(renderProductCard)}
        </ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { alignItems: 'center', marginTop: 10, marginBottom: 20 },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  locationText: { fontSize: 16, color: COLORS.gray, marginLeft: 5, fontWeight: '600' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F2F3F2', marginHorizontal: 20, paddingHorizontal: 15, borderRadius: 15, height: 50, marginBottom: 20 },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16 },
  bannerContainer: { marginHorizontal: 20, height: 115, borderRadius: 15, overflow: 'hidden', marginBottom: 30 },
  banner: { width: '100%', height: '100%' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginBottom: 15 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.black },
  seeAll: { fontSize: 16, color: COLORS.primary, fontWeight: '600' },
  horizontalScroll: { paddingLeft: 20, marginBottom: 30 },
  
  productCard: { width: 160, padding: 15, borderRadius: 18, borderWidth: 1, borderColor: '#E2E2E2', marginRight: 15 },
  productImage: { width: '100%', height: 80, marginBottom: 10 },
  productName: { fontSize: 16, fontWeight: 'bold', color: COLORS.black, marginBottom: 5 },
  productUnit: { fontSize: 14, color: COLORS.gray, marginBottom: 15 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' },
  productPrice: { fontSize: 18, fontWeight: 'bold', color: COLORS.black },
  addButton: { backgroundColor: COLORS.primary, width: 45, height: 45, borderRadius: 15, justifyContent: 'center', alignItems: 'center' },

  groceryCategoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 18,
    marginRight: 15,
    width: 240, 
    height: 100,
  },
  groceryCategoryImage: {
    width: 70,
    height: 70,
    marginRight: 15,
  },
  groceryCategoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
  }
});