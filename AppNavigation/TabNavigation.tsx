import Tracking from '../Components/Tracking';
import Donate from '../Components/Donate';
import AddClothing from '../Components/AddClothing';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tabs = createBottomTabNavigator();

export default function TabNaviagtion(): JSX.Element {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Welcome!"
        component={Tracking}
        options={{
          tabBarShowLabel: false,
          headerTitleStyle: {
            fontSize: 35,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'left',
          headerBackgroundContainerStyle: {
            shadowColor: 'black',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.5,
            shadowRadius: 3,
          },
          tabBarIcon: ({color}) => <Icon name="home" size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="AddClothing"
        component={AddClothing}
        options={{
          // Make a onpress to make it call the function like line 76 in NfcReader component
          headerShown: false,
          tabBarLabel: 'NFC',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="nfc" size={30} color={color} />
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            navigation.navigate('NFC');
          },
        })}
      />
      <Tabs.Screen
        name="Donate"
        component={Donate}
        options={{
          tabBarLabel: 'Donate',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'hand-holding-heart'} size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
}
