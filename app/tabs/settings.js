import { Stack, useNavigation, useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { useEffect } from 'react';

export default function Settings() {
  const navigation = useNavigation();
const router = useRouter();
  useEffect(() => {
    navigation.setOptions({ headerShown: true });
  }, [navigation]);

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}
