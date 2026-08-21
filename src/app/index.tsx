import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function HomeScreen() {
  const navigation = useRouter();
  return (
    <View className='w-full h-full bg-blue-200 flex-1 justify-center items-center'>
      <Text className=''>
        halo
      </Text>
      <Button title='heloworld' onPress={() => navigation.push({pathname:'/haloworld'})}>
      </Button>
    </View>
  );
}