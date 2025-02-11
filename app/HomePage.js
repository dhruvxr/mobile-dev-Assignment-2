import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import City from './Cities'; 

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator screenOptions={{ tabBarStyle: styles.tabBar }}>
    <Tab.Screen 
      name="Calgary"
      options={{ tabBarLabelStyle: styles.tabLabel }}
    >
      {() => (
        <City
          city="Calgary" 
          imageUri="https://www.toniagara.com/blog/wp-content/uploads/2023/12/Calgary-Skyline-at-Dusk.jpg" 
          link="https://www.calgary.ca/home.html" 
        />
      )}
    </Tab.Screen>
    <Tab.Screen 
      name="Edmonton"
      options={{ tabBarLabelStyle: styles.tabLabel }}
    >
      {() => (
        <City
          city="Edmonton" 
          imageUri= "https://cdn.sanity.io/images/st5jjmvx/production/61553e4908bda45a17fd117003b010274f12b263-2400x1800.jpg?w=1920&q=77&fit=max&auto=format"
          link="https://www.edmonton.ca/" 
          />
      )}
    </Tab.Screen>
  </Tab.Navigator>
);

const Welcome = () => {
  return (
      <View style={styles.bottomTabContainer}>
        <BottomTabs />
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff', 
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  bottomTabContainer: {
    flex: 1,
    width: '100%',
  },
  tabBar: { 
    height: 80,
  },
  tabLabel: {
    fontSize: 20, 
  },
});

export default Welcome;
