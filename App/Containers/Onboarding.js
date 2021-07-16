import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

import SessionActions from '../Redux/SessionRedux';

import {Colors, Fonts, Metrics, Images, Svgs, AppStyles} from '../Themes';
import {s, vs} from '../Lib/Scaling';
import I18n from '../I18n';

import ButtonDefault from '../Components/Button/ButtonDefault';

const data = [
  {
    title: I18n.t('onboardingTitle1'),
    description: I18n.t('onboardingDescription1'),
    ImageSvg: Svgs.Onboarding1,
  },
  {
    title: I18n.t('onboardingTitle2'),
    description: I18n.t('onboardingDescription2'),
    ImageSvg: Svgs.Onboarding2,
  },
  {
    title: I18n.t('onboardingTitle3'),
    description: I18n.t('onboardingDescription3'),
    ImageSvg: Svgs.Onboarding3,
  },
];

function OnboardingScreen({navigation, removeOnboarding}) {
  const {navigate} = navigation;

  const renderItem = ({title, description, ImageSvg}, index) => {
    return (
      <View key={'onboarding' + index} style={[AppStyles.alignCenter]}>
        {ImageSvg ? (
          <ImageSvg width={s(334)} height={s(334)} />
        ) : (
          <View style={{width: s(334), height: s(334)}} />
        )}

        <View style={{marginTop: vs(32), marginHorizontal: s(24)}}>
          <Text style={[Fonts.style.subTitle, Fonts.style.alignCenter]}>
            {title}
          </Text>
          <Text
            style={[Fonts.style.descriptionRegular, Fonts.style.alignCenter]}>
            {description}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={[AppStyles.alignCenter, {marginTop: vs(37)}]}>
          <Svgs.LogoHorizontal width={s(135.25)} height={s(25)} />
        </View>

        <View
          style={[
            AppStyles.row,
            AppStyles.justifyBetween,
            {
              marginHorizontal: s(16),
              marginTop: vs(32),
            },
          ]}>
          <ButtonDefault
            text={I18n.t('logIn')}
            textColor={Colors.blue}
            buttonColor={Colors.white}
            isBordered
          />
          <View style={{width: s(8)}} />
          <ButtonDefault text={I18n.t('signUp')} />
        </View>

        <TouchableOpacity
          onPress={() => {
            removeOnboarding();
            navigate('Main');
          }}
          style={[
            AppStyles.alignCenter,
            {marginTop: vs(20), marginBottom: vs(30)},
          ]}>
          <Text style={[Fonts.style.descriptionMedium, {color: Colors.blue}]}>
            {I18n.t('skip')}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  console.tron.log({state});
  return {
    isFirstOpen: state.session.isFirstOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeOnboarding: () => dispatch(SessionActions.removeOnboarding()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingScreen);
