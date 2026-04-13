import { router } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';

export default function SignUpScreen() {
  return (
    <ImageBackground source={require('../assets/images/nen.png')} style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Thay thế củ cà rốt bằng ảnh Group.png */}
          <Image 
            source={require('../assets/images/Group.png')} 
            style={styles.logoImage}
            resizeMode="contain"
          /> 
          
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>Enter your credentials to continue</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.input} placeholder="Afsar Hossen Shuvo" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="imshuvo97@gmail.com" keyboardType="email-address" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="••••••••" secureTextEntry={true} />
          </View>

          <Text style={styles.termsText}>
            By continuing you agree to our <Text style={styles.linkText}>Terms of Service</Text> and <Text style={styles.linkText}>Privacy Policy</Text>.
          </Text>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => alert('Đăng ký thành công!')}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/log-in')}>
              <Text style={styles.linkText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent', paddingHorizontal: 25 },
  logoImage: { 
    width: 120, 
    height: 50, 
    alignSelf: 'center', 
    marginTop: 30, 
    marginBottom: 40 
  },
  title: { fontSize: 26, fontWeight: 'bold', color: COLORS.black, marginBottom: 10 },
  subtitle: { fontSize: 16, color: COLORS.gray, marginBottom: 40 },
  inputGroup: { marginBottom: 25 },
  label: { fontSize: 16, color: COLORS.gray, marginBottom: 5 },
  input: { fontSize: 18, color: COLORS.black, borderBottomWidth: 1, borderBottomColor: COLORS.borderColor, paddingBottom: 10 },
  termsText: { fontSize: 14, color: COLORS.gray, lineHeight: 22, marginBottom: 30 },
  linkText: { color: COLORS.primary, fontWeight: 'bold' },
  button: { backgroundColor: COLORS.primary, paddingVertical: 18, borderRadius: 15, alignItems: 'center', marginBottom: 25 },
  buttonText: { color: COLORS.white, fontSize: 18, fontWeight: '600' },
  footer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 30 },
  footerText: { fontSize: 14, color: COLORS.black }
});