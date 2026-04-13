import { router } from 'expo-router';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/theme';

export default function VerificationScreen() { 
  const [code, setCode] = useState('');

  return (
    <ImageBackground source={require('../assets/images/nen.png')} style={{ flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backIcon}>{"<"}</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Enter your 4-digit code</Text>
        <Text style={styles.label}>Code</Text>

        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          maxLength={4}
          placeholder="- - - -"
          value={code}
          onChangeText={setCode}
          autoFocus={true}
        />

        <View style={styles.bottomSection}>
          <TouchableOpacity>
            <Text style={styles.resendText}>Resend Code</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.fab}
            onPress={() => router.push('/select-location')} 
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
  input: { fontSize: 24, color: COLORS.black, borderBottomWidth: 1, borderBottomColor: COLORS.borderColor, paddingBottom: 10, letterSpacing: 5 },
  bottomSection: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: 20 },
  resendText: { color: COLORS.primary, fontSize: 16, fontWeight: 'bold', marginBottom: 20 },
  fab: { width: 60, height: 60, borderRadius: 30, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' },
  fabIcon: { color: COLORS.white, fontSize: 24, fontWeight: 'bold' }
});