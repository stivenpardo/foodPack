import { createStackNavigator } from 'react-navigation-stack';
import MyAccount from '../screens/Account/MyAccount'
import Login from '../screens/Account/Login'
import Register from '../screens/Account/Register'
import TermsConditions from '../screens/Account/Conditions_and_Terms'


export default stackAccount = createStackNavigator({
    MyAccount: {
        screen: MyAccount,
        navigationOptions: {
            title: "Mi Cuenta",
            cardStyle: {
                backgroundColor: 'white'
            }
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Login",
            cardStyle: {
                backgroundColor: 'white'
            }
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: "Login",
            cardStyle: {
                backgroundColor: 'white'
            }
        }
    },
    TermsConditions: {
        screen: TermsConditions,
        navigationOptions: {
            title: "Terms and conditionsc",
            cardStyle: {
                backgroundColor: 'white'
            }
        }
    }


})