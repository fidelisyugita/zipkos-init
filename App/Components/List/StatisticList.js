import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import {Colors, Fonts, Metrics, Images, Svgs, AppStyles} from '../../Themes';
import {s, vs} from '../../Lib/Scaling';
import I18n from '../../I18n';

const StatisticList = ({
  onPress = () => {},

  text = '',
  description = '',
  rightText = '',

  textColor = Colors.blue,

  SvgIcon = Svgs.IconMontlyIncome,
  iconBgColor = Colors.lightBlue,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[AppStyles.row, AppStyles.alignCenter, {marginVertical: s(13 / 2)}]}>
    <View
      style={{
        padding: s(8),
        borderRadius: s(6),
        backgroundColor: iconBgColor,
      }}>
      <SvgIcon width={s(18)} height={s(18)} />
    </View>
    <View style={[AppStyles.flex1, {marginLeft: s(10)}]}>
      <Text style={[Fonts.style.medium13]}>{text}</Text>
      <Text
        style={[
          Fonts.style.regular11,
          {marginTop: s(4.5), color: Colors.neural2},
        ]}>
        {description}
      </Text>
    </View>
    <Text style={[Fonts.style.medium14, {color: textColor}]}>{rightText}</Text>
  </TouchableOpacity>
);

export default StatisticList;
