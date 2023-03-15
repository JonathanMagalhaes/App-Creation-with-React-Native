import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/Signin'
import Register from '../pages/Register'
import MainPage from '../pages/MainPage'
import Consultas from '../pages/Consultas'
import Pagamentos from '../pages/Pagamentos'
import Eventos from '../pages/Eventos'
import Conta from '../pages/Conta'
import Faq from '../pages/FAQ'
 
const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name='SignIn'
                component={SignIn}
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name='Register'
                component={Register}
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name='MainPage'
                component={MainPage}
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name='Consultas'
                component={Consultas}
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name='Conta'
                component={Conta}
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name='Eventos'
                component={Eventos}
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name='FAQ'
                component={Faq}
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name='Pagamentos'
                component={Pagamentos}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}