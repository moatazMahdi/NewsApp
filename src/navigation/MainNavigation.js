import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../Screens/DetailScreen';
import HomeScreen from '../Screens/Home/Index';
import SplashScreen from '../Screens/SplashScreen';
import Tabs from './Tabs';
import TopHeadeLine from '../Screens/topheadeline/Index';
import CategoryDetail from '../Screens/CategoryDetail/Index';
import Business from '../Screens/CategoryDetail/Business';
import Entertainment from '../Screens/CategoryDetail/Entertainment';
import General from '../Screens/CategoryDetail/General';
import Health from '../Screens/CategoryDetail/Health';
import Science from '../Screens/CategoryDetail/Science';
import Sports from '../Screens/CategoryDetail/Sports';
import Technology from '../Screens/CategoryDetail/Technology';
import Search from '../Screens/Search/Index';


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen'>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options = {{header :()=>null}} />
                <Stack.Screen name="Tabs" component={Tabs} options = {{header :()=>null}} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} options = {{header :()=>null}} />
                <Stack.Screen name="DetailScreen" component={DetailScreen} options = {({route})=>({
                              headerBackTitleVisible: false,
                              headerTitle: false,
                              headerTransparent: true,
                              headerTintColor: '#fff'
                })} />
                <Stack.Screen name="TopHeadeLine" component={TopHeadeLine} options = {{header :()=>null}} />
                <Stack.Screen name="CategoryDetail" component={CategoryDetail} options = {{header :()=>null}} />
                <Stack.Screen name="Business" component={Business} />
                <Stack.Screen name="Entertainment" component={Entertainment}/>
                <Stack.Screen name="General" component={General}/>
                <Stack.Screen name="Health" component={Health}/>
                <Stack.Screen name="Science" component={Science} />
                <Stack.Screen name="Sports" component={Sports} />
                <Stack.Screen name="Technology" component={Technology}/>
                <Stack.Screen name="Search" component={Search} options = {{header :()=>null}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation;