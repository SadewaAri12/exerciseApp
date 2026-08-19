import { Slot, Stack } from 'expo-router';
import { View } from 'react-native';

export default function HaloWorldLayout() {
    return (
        <View className='flex w-full bg-slate-500 h-full items-center justify-center'>
            <Slot />
        </View>
    )
}