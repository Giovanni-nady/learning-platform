import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen.tsx';
import SettingsScreen from '../screens/Settings/SettingsScreen.tsx';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, Entypo, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import ChatScreen from '../screens/Chat/ChatScreen.tsx';
import CoursesScreen from '../screens/Courses/CoursesScreen.tsx';
import DashboardScreen from '../screens/Dashboard/DashboardScreen.tsx';

const Tab = createBottomTabNavigator();

const CustomButton = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress}
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...style.shadow
    }}>
    <View style={{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: "#309"
    }}>

      {children}
    </View>
  </TouchableOpacity>

)

export default function ButtonTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false, tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 75,
        ...style.shadow
      }
    }}>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <AntDesign name="home" size={24} color={focused ? "#09c" : "#309"} />
              <Text style={{ fontSize: 12, color: focused ? "#09c" : "#309" }}>HOME</Text>
            </View>
          )
        }} />
      <Tab.Screen name="Courses" component={CoursesScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons name="settings-outline" size={24} color={focused ? "#09c" : "#309"} />
            <Text style={{ fontSize: 12, color: focused ? "#09c" : "#309" }}>SETTINGS</Text>
          </View>
        )
      }} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{
        tabBarIcon: ({ focused }) => (
          <MaterialIcons name="dashboard" size={30} color="white" />
        ),
        tabBarButton: (props) => (
          <CustomButton {...props} />
        )
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons name="settings-outline" size={24} color={focused ? "#09c" : "#309"} />
            <Text style={{ fontSize: 12, color: focused ? "#09c" : "#309" }}>SETTINGS</Text>
          </View>
        )
      }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Entypo name="chat" size={24} color={focused ? "#09c" : "#309"} />
            <Text style={{ fontSize: 12, color: focused ? "#09c" : "#309" }}>Chat</Text>
          </View>
        )
      }} />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({

  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
})