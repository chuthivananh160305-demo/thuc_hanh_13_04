import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native'; // Đã thêm import Image

export default function SplashScreen() {
  useEffect(() => {
    // Tự động chuyển sang onboarding sau 3 giây
    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Hiển thị ảnh logo nội bộ */}
      <Image 
        source={require('../assets/images/Group 1.png')} 
        style={styles.logo}
        resizeMode="contain" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#53B175', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  logo: {
    width: 250,   // Chiều rộng của ảnh (bạn có thể tăng/giảm tùy ý)
    height: 100,  // Chiều cao của ảnh 
  }
});