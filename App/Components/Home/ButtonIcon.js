import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import {Colors, Fonts, Metrics, Images, Svgs, AppStyles} from '../../Themes';
import {s, vs} from '../../Lib/Scaling';
import I18n from '../../I18n';

const ButtonIcon = ({
  onPress = () => {},

  label = '',
  value = '',

  buttonStyle = {marginTop: s(15.8)},

  SvgIcon = Svgs.IconIncome,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[AppStyles.alignCenter, AppStyles.flex1, buttonStyle]}>
    <View
      style={[
        AppStyles.smallShadow,
        AppStyles.alignCenter,
        AppStyles.justifyCenter,
        {width: s(60.5), height: s(60.5), borderRadius: s(60.5 / 2)},
      ]}>
      {SvgIcon && <SvgIcon width={s(28.5)} height={s(28.5)} />}
    </View>
    <Text
      style={[Fonts.style.thin10, {marginTop: s(11), color: Colors.neural2}]}>
      {label}
    </Text>
    <Text
      style={[Fonts.style.regular19, {marginTop: s(2.4), color: Colors.blue}]}>
      {value}
    </Text>
  </TouchableOpacity>
);

export default ButtonIcon;
