import { router } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/theme';

export default function OnboardingScreen() {
  return (
    <ImageBackground 
      source={require('../assets/images/anh.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          {/* Thay thế Text biểu tượng bằng Image */}
          <Image 
            source={require('../assets/images/carottr.png')} 
            style={styles.logoImage}
            resizeMode="contain"
          /> 
          
          <Text style={styles.title}>Welcome{"\n"}to our store</Text>
          <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/sign-in')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    paddingHorizontal: 30,
    paddingBottom: 60,
    alignItems: 'center',
  },
  // Style mới cho hình ảnh logo củ cà rốt
  logoImage: {
    width: 60,
    height: 60,
    marginBottom: 15,
  },
  title: {
    fontSize: 40,
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 40,
  },
  button: {
    backgroundColor: COLORS.primary,
    width: '100%',
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
  },
});