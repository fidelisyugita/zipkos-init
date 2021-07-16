import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {Colors, Fonts, Metrics, Images, Svgs, AppStyles} from '../Themes';
import {s, vs} from '../Lib/Scaling';
import I18n from '../I18n';

import HomeScreen from '../Containers/Home';
import BookingScreen from '../Containers/Booking';
import MessageScreen from '../Containers/Message';
import AccountScreen from '../Containers/Account';

const renderItem = (IconSvg = Svgs.LogoHorizontal, tintColor, title) => (
  <View style={[AppStyles.alignCenter]}>
    <IconSvg width={s(20)} height={s(20)} fill={tintColor} />
    <Text
      numberOfLines={1}
      style={[
        Fonts.style.regular9,
        Fonts.style.alignCenter,
        {marginTop: s(5.2), color: tintColor, width: s(65)},
      ]}>
      {title}
    </Text>
  </View>
);

const BottomNav = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: (navigation) => ({
        title: I18n.t('home'),
        tabBarIcon: ({focused, tintColor}) =>
          renderItem(Svgs.IconHome, tintColor, I18n.t('home')),
      }),
    },
    Booking: {
      screen: BookingScreen,
      navigationOptions: (navigation) => ({
        title: I18n.t('booking'),
        tabBarIcon: ({focused, tintColor}) =>
          renderItem(Svgs.IconBooking, tintColor, I18n.t('booking')),
      }),
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: (navigation) => ({
        title: I18n.t('message'),
        tabBarIcon: ({focused, tintColor}) =>
          renderItem(Svgs.IconAccount, tintColor, I18n.t('message')),
      }),
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: (navigation) => ({
        title: I18n.t('account'),
        tabBarIcon: ({focused, tintColor}) =>
          renderItem(Svgs.IconAccount, tintColor, I18n.t('account')),
      }),
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      showLabel: false,
      inactiveTintColor: Colors.neural3,
      activeTintColor: Colors.blue,
      style: {
        // ...AppStyles.shadow,
        height: s(58),
      },
    },
  },
);

export default BottomNav;
