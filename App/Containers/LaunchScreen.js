import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {connect} from 'react-redux';

// import SessionActions from '../Redux/SessionRedux';

import {Colors, Fonts, Metrics, Images, Svgs, AppStyles} from '../Themes';
import {s, vs} from '../Lib/Scaling';

// import CustomImage from '../Components/CustomImage';

function LaunchScreen({navigation, rehydrated, isFirstOpen}) {
  const {navigate} = navigation;

  // useEffect(() => {
  //   if (rehydrated) {
  //     if (isFirstOpen) navigate('Onboarding');
  //     else navigate('Main');
  //   }
  // }, [rehydrated]);

  useEffect(() => {
    // navigate('Onboarding');
    navigate('Main');
  }, []);

  return (
    <View
      style={[AppStyles.flex1, AppStyles.alignCenter, AppStyles.justifyCenter]}>
      <Image
        source={Images.default11}
        style={{
          width: s(334),
          height: s(334),
        }}
      />
    </View>
  );
}

const mapStateToProps = (state) => {
  let rehydrated = false;
  let isFirstOpen = true;
  if (state._persist) {
    rehydrated = state._persist.rehydrated;
    isFirstOpen = state.session.isFirstOpen;
  }
  return {
    rehydrated,
    isFirstOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // removeOnboarding: () => dispatch(SessionActions.removeOnboarding()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);
