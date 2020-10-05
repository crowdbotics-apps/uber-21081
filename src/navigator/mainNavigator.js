import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile126035Navigator from '../features/UserProfile126035/navigator';
import Tutorial126034Navigator from '../features/Tutorial126034/navigator';
import NotificationList126006Navigator from '../features/NotificationList126006/navigator';
import Settings126005Navigator from '../features/Settings126005/navigator';
import Settings125997Navigator from '../features/Settings125997/navigator';
import UserProfile125995Navigator from '../features/UserProfile125995/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile126035: { screen: UserProfile126035Navigator },
Tutorial126034: { screen: Tutorial126034Navigator },
NotificationList126006: { screen: NotificationList126006Navigator },
Settings126005: { screen: Settings126005Navigator },
Settings125997: { screen: Settings125997Navigator },
UserProfile125995: { screen: UserProfile125995Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
