import { Stack, useNavigation, useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { useEffect } from 'react';

export default function Home() {
  const navigation = useNavigation();
const router = useRouter();
  useEffect(() => {
    navigation.setOptions({ headerShown: true });
  }, [navigation]);

  return (
    <View>
      <Text>Home Screen</Text>
      <Button onPress={() => router.navigate('/tabs')} title='Tabs'/>
      <Button onPress={() => router.navigate('/about')} title='About'/>
    </View>
  );
}
