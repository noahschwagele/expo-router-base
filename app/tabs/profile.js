import { Stack, useNavigation, useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { useEffect } from 'react';

export default function Profile() {
  const navigation = useNavigation();
const router = useRouter();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}
