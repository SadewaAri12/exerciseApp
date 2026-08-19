import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function HelloScreen() {
    return (
        <View>
            <Text>
                Halo Dunia
            </Text>
            <Link href={'/'}>back</Link>
        </View>
    )
}
