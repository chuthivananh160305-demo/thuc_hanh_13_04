import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/theme';

export default function SelectLocationScreen() {
  const [zone, setZone] = useState('Banasree');
  const [area, setArea] = useState('Types of your area');

  return (
    <ImageBackground source={require('../assets/images/nen.png')} style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Feather name="chevron-left" size={28} color={COLORS.black} />
        </TouchableOpacity>

        <ScrollView contentContainerStyle={styles.content}>
          {/* Đã sửa thành ảnh nội bộ illustration.png */}
          <Image 
            source={require('../assets/images/illustration.png')} 
            style={styles.mapIllustration} 
            resizeMode="contain"
          />

          <Text style={styles.title}>Select Your Location</Text>
          <Text style={styles.subtitle}>Switch on your location to stay in tune with what's happening in your area</Text>

          <View style={styles.dropdownContainer}>
            <Text style={styles.label}>Your Zone</Text>
            <TouchableOpacity style={styles.dropdownSelector}>
              <Text style={[styles.dropdownText, zone !== 'Types of your zone' && {color: COLORS.black}]}>{zone}</Text>
              <Feather name="chevron-down" size={20} color={COLORS.gray} />
            </TouchableOpacity>
          </View>

          <View style={styles.dropdownContainer}>
            <Text style={styles.label}>Your Area</Text>
            <TouchableOpacity style={styles.dropdownSelector}>
              <Text style={styles.dropdownText}>{area}</Text>
              <Feather name="chevron-down" size={20} color={COLORS.gray} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.submitBtn}
            onPress={() => router.push('/log-in')} 
          >
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent' }, 
  backButton: { marginHorizontal: 20, marginTop: 20 },
  content: { padding: 25, alignItems: 'center' },
  
  // Kích thước ảnh bản đồ (có thể chỉnh to nhỏ ở đây)
  mapIllustration: { width: 220, height: 170, marginBottom: 40 }, 
  
  title: { fontSize: 26, fontWeight: 'bold', color: COLORS.black, marginBottom: 15 },
  subtitle: { fontSize: 16, color: COLORS.gray, textAlign: 'center', marginBottom: 40, paddingHorizontal: 20 },
  dropdownContainer: { width: '100%', marginBottom: 25 },
  label: { fontSize: 16, color: COLORS.gray, marginBottom: 10 },
  dropdownSelector: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: COLORS.borderColor, paddingBottom: 10 },
  dropdownText: { fontSize: 18, color: COLORS.gray }, 
  submitBtn: { backgroundColor: COLORS.primary, width: '100%', paddingVertical: 18, borderRadius: 15, alignItems: 'center', marginTop: 20 },
  submitBtnText: { color: COLORS.white, fontSize: 18, fontWeight: '600' }
});