import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" /> 
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="sign-in" />
        <Stack.Screen name="log-in" />
        <Stack.Screen name="sign-up" />
        <Stack.Screen name="number-input" />
        <Stack.Screen name="verification" />
        <Stack.Screen name="select-location" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="product" />
        <Stack.Screen name="beverages" />
      </Stack>
    </SafeAreaProvider>
  );
}