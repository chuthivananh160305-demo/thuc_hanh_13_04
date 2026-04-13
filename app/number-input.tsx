import { router } from 'expo-router';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/theme';

export default function NumberInputScreen() { 
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <ImageBackground source={require('../assets/images/nen.png')} style={{ flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backIcon}>{"<"}</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Enter your mobile number</Text>
        <Text style={styles.label}>Mobile Number</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.flag}>🇧🇩</Text>
          <Text style={styles.countryCode}>+880</Text>
          <TextInput 
            style={styles.input}
            keyboardType="numeric"
            autoFocus={true}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <View style={styles.fabContainer}>
          <TouchableOpacity 
            style={styles.fab}
            onPress={() => router.push('/verification')} 
          >
            <Text style={styles.fabIcon}>{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent', padding: 25, paddingTop: 60 }, // Đổi thành transparent
  backButton: { marginBottom: 40 },
  backIcon: { fontSize: 24, fontWeight: 'bold' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 30, color: COLORS.black },
  label: { fontSize: 16, color: COLORS.gray, marginBottom: 10 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: COLORS.borderColor, paddingBottom: 10 },
  flag: { fontSize: 24, marginRight: 10 },
  countryCode: { fontSize: 18, color: COLORS.black, marginRight: 10 },
  input: { flex: 1, fontSize: 18, color: COLORS.black },
  fabContainer: { flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', paddingBottom: 20 },
  fab: { width: 60, height: 60, borderRadius: 30, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' },
  fabIcon: { color: COLORS.white, fontSize: 24, fontWeight: 'bold' }
});