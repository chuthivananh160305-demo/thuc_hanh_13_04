import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/theme';

export default function SignInScreen() { 
  return (
    <View style={styles.container}>
      {/* Cập nhật ảnh nội bộ và áp dụng style xoay */}
      <Image 
        source={require('../assets/images/tuiqua.png')} 
        style={styles.topImage} 
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>Get your groceries{"\n"}with nectar</Text>
        
        <TouchableOpacity 
          style={styles.phoneInputContainer}
          onPress={() => router.push('/number-input')} 
        >
          <Text style={styles.flag}>🇧🇩</Text>
          <Text style={styles.countryCode}>+880</Text>
          <Text style={styles.placeholder}>Enter mobile number</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or connect with social media</Text>

        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#5383EC' }]}>
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#4A66AC', marginTop: 15 }]}>
          <Text style={styles.socialButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.white,
    overflow: 'hidden', // Thêm dòng này để cắt phần ảnh bị tràn ra ngoài màn hình
  },
  topImage: { 
    width: '100%', // Phóng to ảnh để khi xoay không bị lộ góc trắng
    height: 350, 
    resizeMode: 'cover',
    alignSelf: 'center',
    transform: [{ rotate: '-4deg' }], // Xoay ảnh nghiêng sang trái 15 độ
    marginTop: -10, 
    marginLeft: 20, 
  },
  content: { padding: 25 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 30, color: COLORS.black },
  phoneInputContainer: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: COLORS.borderColor, paddingBottom: 10, marginBottom: 35 },
  flag: { fontSize: 24, marginRight: 10 },
  countryCode: { fontSize: 18, color: COLORS.black, marginRight: 15 },
  placeholder: { fontSize: 18, color: COLORS.gray },
  orText: { textAlign: 'center', color: COLORS.gray, marginBottom: 35 },
  socialButton: { paddingVertical: 18, borderRadius: 15, alignItems: 'center' },
  socialButtonText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});