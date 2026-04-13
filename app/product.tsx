import { Feather, FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';

export default function ProductDetailScreen() {
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Icons */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="chevron-left" size={28} color={COLORS.black} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="share" size={24} color={COLORS.black} />
          </TouchableOpacity>
        </View>

        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image 
            source={require('../assets/images/tao.png')} 
            style={styles.mainImage} 
            resizeMode="contain" 
          />
        </View>

        <View style={styles.detailsContainer}>
          {/* Title & Favorite */}
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.title}>Naturel Red Apple</Text>
              <Text style={styles.unit}>1kg, Price</Text>
            </View>
            <TouchableOpacity>
              <Feather name="heart" size={24} color={COLORS.gray} />
            </TouchableOpacity>
          </View>

          {/* Quantity & Price */}
          <View style={styles.priceRow}>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
                <Feather name="minus" size={24} color={COLORS.gray} />
              </TouchableOpacity>
              <View style={styles.quantityBox}>
                <Text style={styles.quantityText}>{quantity}</Text>
              </View>
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <Feather name="plus" size={24} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>${(4.99 * quantity).toFixed(2)}</Text>
          </View>

          <View style={styles.divider} />

          {/* Accordions */}
          <View style={styles.accordion}>
            <Text style={styles.accordionTitle}>Product Detail</Text>
            <Feather name="chevron-down" size={24} color={COLORS.black} />
          </View>
          <Text style={styles.description}>
            Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May Be Good For Your Heart. As Part Of A Healthful And Varied Diet.
          </Text>

          <View style={styles.divider} />

          <View style={styles.accordion}>
            <Text style={styles.accordionTitle}>Nutritions</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.badge}><Text style={styles.badgeText}>100gr</Text></View>
              <Feather name="chevron-right" size={24} color={COLORS.black} />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.accordion}>
            <Text style={styles.accordionTitle}>Review</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {[1,2,3,4,5].map(i => <FontAwesome key={i} name="star" size={16} color="#F3603F" style={{marginHorizontal: 2}}/>)}
              <Feather name="chevron-right" size={24} color={COLORS.black} style={{marginLeft: 10}}/>
            </View>
          </View>

          {/* Add to Basket Button */}
          <TouchableOpacity style={styles.basketButton}>
            <Text style={styles.basketButtonText}>Add To Basket</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    paddingTop: 20,
    position: 'absolute', // Để header đè lên background của ảnh cho đẹp
    zIndex: 1,
    width: '100%'
  },
  imageContainer: { 
    alignItems: 'center', 
    height: 350, // Tăng từ 250 lên 350
    justifyContent: 'center', 
    backgroundColor: '#F2F3F2', 
    borderBottomLeftRadius: 25, 
    borderBottomRightRadius: 25 
  },
  mainImage: { 
    width: 320, // Tăng từ 250 lên 320
    height: 280  // Tăng từ 200 lên 280
  },
  detailsContainer: { padding: 25 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 25 },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.black, marginBottom: 5 },
  unit: { fontSize: 16, color: COLORS.gray },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  quantityBox: { width: 45, height: 45, borderRadius: 15, borderWidth: 1, borderColor: '#E2E2E2', justifyContent: 'center', alignItems: 'center', marginHorizontal: 15 },
  quantityText: { fontSize: 18, fontWeight: '600' },
  price: { fontSize: 24, fontWeight: 'bold', color: COLORS.black },
  divider: { height: 1, backgroundColor: '#E2E2E2', marginVertical: 15 },
  accordion: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15 },
  accordionTitle: { fontSize: 16, fontWeight: '600', color: COLORS.black },
  description: { fontSize: 13, color: COLORS.gray, lineHeight: 21, marginBottom: 15 },
  badge: { backgroundColor: '#EBEBEB', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 5, marginRight: 10 },
  badgeText: { fontSize: 10, color: COLORS.gray, fontWeight: '600' },
  basketButton: { backgroundColor: COLORS.primary, paddingVertical: 18, borderRadius: 15, alignItems: 'center', marginTop: 30, marginBottom: 20 },
  basketButtonText: { color: COLORS.white, fontSize: 18, fontWeight: '600' }
});