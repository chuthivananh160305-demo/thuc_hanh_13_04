import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';

export default function LogInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ImageBackground source={require('../assets/images/nen.png')} style={{ flex: 1, backgroundColor: '#FFFFFF'}}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Thay thế củ cà rốt bằng ảnh Group.png */}
          <Image 
            source={require('../assets/images/Group.png')} 
            style={styles.logoImage}
            resizeMode="contain"
          /> 
          
          <View style={styles.header}>
            <Text style={styles.title}>Loging</Text>
            <Text style={styles.subtitle}>Enter your emails and password</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="imshuvo97@gmail.com"
              placeholderTextColor={COLORS.gray}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordWrapper}>
              <TextInput
                style={[styles.input, { flex: 1, borderBottomWidth: 0 }]}
                placeholder="••••••••"
                placeholderTextColor={COLORS.gray}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Feather name={showPassword ? "eye" : "eye-off"} size={20} color={COLORS.gray} />
              </TouchableOpacity>
            </View>
            <View style={styles.bottomBorder} />
          </View>

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => router.replace('/(tabs)')}
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/sign-up')}>
              <Text style={styles.signupLink}>Singup</Text>
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
    width: 150, 
    height: 60, 
    alignSelf: 'center', 
    marginTop: 30, 
    marginBottom: 50 
  },
  header: { marginBottom: 40 },
  title: { fontSize: 26, fontWeight: 'bold', color: COLORS.black, marginBottom: 10 },
  subtitle: { fontSize: 16, color: COLORS.gray },
  inputContainer: { marginBottom: 25 },
  label: { fontSize: 16, color: COLORS.gray, marginBottom: 10, fontWeight: '600' },
  input: { fontSize: 18, color: COLORS.black, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: COLORS.borderColor },
  passwordWrapper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  bottomBorder: { height: 1, backgroundColor: COLORS.borderColor, marginTop: 5 },
  forgotPassword: { alignItems: 'flex-end', marginBottom: 30 },
  forgotText: { fontSize: 14, color: COLORS.black },
  loginButton: { backgroundColor: COLORS.primary, paddingVertical: 18, borderRadius: 15, alignItems: 'center', marginBottom: 25 },
  loginButtonText: { color: COLORS.white, fontSize: 18, fontWeight: '600' },
  signupContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 30 },
  signupText: { fontSize: 14, color: COLORS.black },
  signupLink: { fontSize: 14, color: COLORS.primary, fontWeight: 'bold' },
});