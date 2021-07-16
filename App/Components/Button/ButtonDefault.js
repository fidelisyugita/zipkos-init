import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import {Colors, Fonts, Metrics, Images, Svgs, AppStyles} from '../../Themes';
import {s, vs} from '../../Lib/Scaling';
import I18n from '../../I18n';

const ButtonDefault = ({
  onPress = () => {},
  text = '',

  textStyle = Fonts.style.medium11,
  textColor = Colors.white,

  buttonColor = Colors.blue,
  buttonStyle = {},

  SvgIcon = null,
  iconSize = s(20),
  iconDistance = s(7.5),

  isBordered = false,
  disabled = false,
  isLoading = false,
}) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={[
      AppStyles.row,
      AppStyles.justifyCenter,
      AppStyles.alignCenter,
      {
        backgroundColor: buttonColor,
        borderRadius: s(5),
        height: s(32),
        borderColor: textColor,
        borderWidth: isBordered ? s(1) : 0,
      },
      buttonStyle,
    ]}>
    {isLoading && (
      <ActivityIndicator
        size="small"
        color={textColor}
        style={{marginRight: iconDistance}}
      />
    )}
    {!isLoading && SvgIcon && (
      <View style={{marginRight: iconDistance}}>
        <SvgIcon width={iconSize} height={iconSize} fill={textColor} />
      </View>
    )}
    <Text style={[textStyle, {color: textColor}]}>{text}</Text>
  </TouchableOpacity>
);

export default ButtonDefault;
