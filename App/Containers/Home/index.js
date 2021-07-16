import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import SessionActions from '../../Redux/SessionRedux';

import {Colors, Fonts, Metrics, Images, Svgs, AppStyles} from '../../Themes';
import {s, vs} from '../../Lib/Scaling';
import I18n from '../../I18n';

import ButtonDefault from '../../Components/Button/ButtonDefault';
import ButtonIcon from '../../Components/Home/ButtonIcon';
import StatisticList from '../../Components/List/StatisticList';

const MENU_ICON = [
  {
    label: I18n.t('income'),
    value: '150jt',
    SvgIcon: Svgs.IconIncome,
  },
  {
    label: I18n.t('expense'),
    value: '25jt',
    SvgIcon: Svgs.IconExpense,
  },
  {
    label: I18n.t('occupiedRoom'),
    value: '358',
    SvgIcon: Svgs.IconOccupiedRoom,
  },
  {
    label: I18n.t('emptyRoom'),
    value: '10',
    SvgIcon: Svgs.IconEmptyRoom,
  },
];

const MENU_HORIZONTAL = [
  {
    label: I18n.t('addProperty'),
    SvgIcon: Svgs.IconHome,
  },
  {
    label: I18n.t('manageRooms'),
    SvgIcon: Svgs.IconHome,
  },
  {
    label: I18n.t('kostExpenses'),
    SvgIcon: Svgs.IconHome,
  },
  {
    label: I18n.t('staffManagement'),
    SvgIcon: Svgs.IconHome,
  },
  {
    label: I18n.t('staffList'),
    SvgIcon: Svgs.IconHome,
  },
  {
    label: I18n.t('guestList'),
    SvgIcon: Svgs.IconHome,
  },
  {
    label: I18n.t('guidelines'),
    SvgIcon: Svgs.IconHome,
  },
];

const FIN_DATA = [
  {
    SvgIcon: Svgs.IconMontlyIncome,
    text: 'Monthly Income - July',
    description: '31 Jul 2020 | 10:36',
    rightText: '+ Rp 2.5 Jt',
    iconBgColor: Colors.lightBlue,
    textColor: Colors.blue,
  },
  {
    SvgIcon: Svgs.IconBill,
    text: 'Electricity Bill - July',
    description: '31 Jul 2020 | 10:36',
    rightText: '- Rp 1.3 Jt',
    iconBgColor: Colors.lightRed,
    textColor: Colors.red,
  },
  {
    SvgIcon: Svgs.IconMontlyIncome,
    text: 'Monthly Income - May',
    description: '31 Jul 2020 | 10:36',
    rightText: '+ Rp 3 Jt',
    iconBgColor: Colors.lightBlue,
    textColor: Colors.blue,
  },
  {
    SvgIcon: Svgs.IconBill,
    text: 'Electricity Bill - May',
    description: '31 Jul 2020 | 10:36',
    rightText: '- Rp 2.8 Jt',
    iconBgColor: Colors.lightRed,
    textColor: Colors.red,
  },
];

const BOOKING_DATA = [
  {
    SvgIcon: Svgs.IconCheckIn,
    text: 'Check In at Kost Amelia Re...',
    description: '31 Jul 2020 | 08:12',
    rightText: '+ 2 Peoples',
    iconBgColor: Colors.lightBlue,
    textColor: Colors.blue,
  },
  {
    SvgIcon: Svgs.IconCheckOut,
    text: 'Check Out from Kost Kijang...',
    description: '30 Jul 2020 | 12:05',
    rightText: '- 1 Peoples',
    iconBgColor: Colors.lightOrange,
    textColor: Colors.orange,
  },
  {
    SvgIcon: Svgs.IconCheckOut,
    text: 'Check Out from Kost Garu...',
    description: '28 Jul 2020 | 11:48',
    rightText: '- 2 Peoples',
    iconBgColor: Colors.lightOrange,
    textColor: Colors.orange,
  },
  {
    SvgIcon: Svgs.IconCheckIn,
    text: 'Check In at Kost Amelia Re...',
    description: '26 Jul 2020 | 09:15',
    rightText: '+ 3 Peoples',
    iconBgColor: Colors.lightBlue,
    textColor: Colors.blue,
  },
];

function HomeScreen({navigation, currentUser, logout}) {
  const {navigate} = navigation;

  const [isScrolling, setScrolling] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {}

  const onScroll = (event) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;

    if (contentOffsetY > 0 && !isScrolling) setScrolling(true);
    if (contentOffsetY <= 0 && isScrolling) setScrolling(false);
  };

  return (
    <SafeAreaView>
      <ScrollView onScroll={(event) => onScroll(event)}>
        <View
          style={[
            AppStyles.positionAbstolute,
            {
              backgroundColor: Colors.blue,
              width: '100%',
              height: s(302.5),
            },
          ]}>
          <View
            style={[
              AppStyles.row,
              AppStyles.alignCenter,
              AppStyles.justifyBetween,
              {
                marginTop: s(22.5),
                marginHorizontal: s(17.5),
              },
            ]}>
            {/* <Svgs.LogoHorizontal width={s(63.9)} height={s(22.5)} /> */}
            <Image
              source={Images.logo}
              style={{width: s(63.9), height: s(22.5)}}
            />
            <Svgs.IconNotification
              width={s(22.5)}
              height={s(22.5)}
              fill={Colors.white}
            />
          </View>

          <View
            style={[
              AppStyles.row,
              AppStyles.alignCenter,
              AppStyles.justifyCenter,
            ]}>
            <Svgs.IconWallet
              width={s(13)}
              height={s(13)}
              fill={Colors.eggBlue}
            />
            <Text
              style={[
                Fonts.style.thin14,
                {color: Colors.eggBlue, marginLeft: s(5.5)},
              ]}>
              {I18n.t('zipBalance')}
            </Text>
          </View>

          <Text
            style={[
              Fonts.style.regular29,
              Fonts.style.alignCenter,
              {color: Colors.white, marginTop: s(9.2)},
            ]}>
            {`Rp 15.000.000`}
          </Text>

          <ButtonDefault
            text={I18n.t('withdraw')}
            buttonColor={Colors.white}
            textColor={Colors.blue}
            buttonStyle={[
              AppStyles.alignSelfCenter,
              {width: s(91.5), marginTop: s(11.3)},
            ]}
          />
        </View>

        <View
          style={[
            AppStyles.positionAbstolute,
            AppStyles.zIndex1,
            AppStyles.shadow,
            {
              width: s(325),
              borderRadius: s(15),
              marginHorizontal: s(17.5),
              padding: s(16.5),
              backgroundColor: Colors.white,
              top: s(199.5),
            },
          ]}>
          <View
            style={[
              AppStyles.row,
              AppStyles.alignCenter,
              AppStyles.justifyBetween,
            ]}>
            <Text style={[Fonts.style.bold13]}>{I18n.t('monthlyTotal')}</Text>
            <Text
              style={[
                Fonts.style.regular11,
                {color: Colors.neural3},
              ]}>{`Last update : 24 Aug 2020, 09:36`}</Text>
          </View>
          <View
            style={{
              height: s(0.8),
              backgroundColor: Colors.neural4,
              marginTop: s(12.3),
            }}
          />

          <View
            style={[
              AppStyles.row,
              AppStyles.alignCenter,
              AppStyles.justifyBetween,
            ]}>
            {MENU_ICON.map((item) => (
              <ButtonIcon
                key={item.label}
                label={item.label}
                value={item.value}
                SvgIcon={item.SvgIcon}
              />
            ))}
          </View>
        </View>

        <View
          style={{
            backgroundColor: Colors.white,
            width: '100%',
            // minHeight: s(5600),
            borderTopLeftRadius: s(32),
            borderTopRightRadius: s(32),
            top: s(250.5),
          }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: s(17.5 - 12.5 / 2)}}
            style={{marginTop: s(157)}}>
            {MENU_HORIZONTAL.map((item) => (
              <ButtonDefault
                key={item.label}
                SvgIcon={item.SvgIcon}
                text={item.label}
                textStyle={[Fonts.style.regular13]}
                buttonStyle={{
                  height: s(50),
                  paddingHorizontal: s(20),
                  marginHorizontal: s(12.5 / 2),
                }}
              />
            ))}
          </ScrollView>

          <View
            style={{
              marginTop: s(22.7),
              marginHorizontal: s(17.5),
            }}>
            <Text style={[Fonts.style.bold14]}>
              {I18n.t('financialStatistics')}
            </Text>
            <View style={{marginVertical: s(13 / 2)}}>
              {FIN_DATA.map((item) => (
                <StatisticList
                  key={item.text}
                  SvgIcon={item.SvgIcon}
                  text={item.text}
                  description={item.description}
                  rightText={item.rightText}
                  iconBgColor={item.iconBgColor}
                  textColor={item.textColor}
                />
              ))}
            </View>
            <TouchableOpacity>
              <Text style={[Fonts.style.medium11, {color: Colors.blue}]}>
                {I18n.t('seeDetails')}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: s(26),
              marginHorizontal: s(17.5),
            }}>
            <Text style={[Fonts.style.bold14]}>
              {I18n.t('bookingStatistics')}
            </Text>
            <View style={{marginVertical: s(13 / 2)}}>
              {BOOKING_DATA.map((item, index) => (
                <StatisticList
                  key={item.text + index}
                  SvgIcon={item.SvgIcon}
                  text={item.text}
                  description={item.description}
                  rightText={item.rightText}
                  iconBgColor={item.iconBgColor}
                  textColor={item.textColor}
                />
              ))}
            </View>
            <TouchableOpacity>
              <Text style={[Fonts.style.medium11, {color: Colors.blue}]}>
                {I18n.t('seeDetails')}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: s(26)}}>
            <Text style={[Fonts.style.bold14, {marginHorizontal: s(17.5)}]}>
              {I18n.t('myProperty')}
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingHorizontal: s(17.5 - 11 / 2)}}
              style={{marginTop: s(12.3)}}>
              {Array(5)
                .fill({})
                .map((item, index) => (
                  <Image
                    key={item + index}
                    source={Images.sample}
                    style={{
                      width: s(264),
                      height: s(170),
                      borderRadius: s(12),
                      marginHorizontal: s(11 / 2),
                    }}
                  />
                ))}
            </ScrollView>
          </View>
        </View>

        <View style={{height: s(270)}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  console.tron.log({state});
  return {
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: (data, callback) => dispatch(SessionActions.logout(data, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
