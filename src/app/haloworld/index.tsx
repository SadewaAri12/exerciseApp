import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function HelloScreen() {
    return (
        <View className='w-full h-full flex justify-center items-center'>
            <Text>
                Halo Dunia
            </Text>
            <Link href={'/'}>back</Link>
        </View>
    )
}
