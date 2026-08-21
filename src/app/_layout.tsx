import { NativeTabs } from 'expo-router/unstable-native-tabs';
import "../../global.css";
import { Slot, Tabs } from 'expo-router';
import { Text, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name='haloworld' options={{title:'halo',header:()=>{<View><Text>halo</Text></View>}}} ></Tabs.Screen>
      <Tabs.Screen name='index' options={{title:'nohalo',headerRight:({pressColor})=>{pressColor}}}></Tabs.Screen>
    </Tabs>
  );
}