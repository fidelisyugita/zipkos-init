import {s, vs, ms} from '../Lib/Scaling';
import Colors from './Colors';

const type = {
  bold: 'Roboto-Bold',
  medium: 'Roboto-Medium',
  regular: 'Roboto-Regular',
};

const size = {
  title: s(24),
  subTitle: s(20),
  description: s(16),
  subDescription: s(12),
  footnote: s(10.5),
};

const style = {
  alignCenter: {
    textAlign: 'center',
  },
  alignJustify: {
    textAlign: 'justify',
  },
  transformCapitalize: {
    textTransform: 'capitalize',
  },
  underline: {
    textDecorationLine: 'underline',
  },

  title: {
    fontFamily: type.bold,
    fontSize: size.title,
    color: Colors.neural1,
  },
  subTitle: {
    fontFamily: type.medium,
    fontSize: size.subTitle,
    color: Colors.neural1,
  },
  descriptionBold: {
    fontFamily: type.bold,
    fontSize: size.description,
    color: Colors.neural1,
  },
  descriptionMedium: {
    fontFamily: type.medium,
    fontSize: size.description,
    color: Colors.neural1,
  },
  descriptionRegular: {
    fontFamily: type.regular,
    fontSize: size.description,
    color: Colors.neural1,
  },
  subDescriptionMedium: {
    fontFamily: type.medium,
    fontSize: size.subDescription,
    color: Colors.neural1,
  },
  subDescriptionRegular: {
    fontFamily: type.regular,
    fontSize: size.subDescription,
    color: Colors.neural1,
  },
  footnoteMedium: {
    fontFamily: type.medium,
    fontSize: size.footnote,
    color: Colors.neural1,
  },
  footnoteRegular: {
    fontFamily: type.regular,
    fontSize: size.footnote,
    color: Colors.neural1,
  },

  thin10: {
    fontFamily: type.regular,
    fontSize: s(10),
    color: Colors.neural1,
  },
  thin14: {
    fontFamily: type.regular,
    fontSize: s(14),
    color: Colors.neural1,
  },

  regular9: {
    fontFamily: type.regular,
    fontSize: s(9),
    color: Colors.neural1,
  },
  regular11: {
    fontFamily: type.regular,
    fontSize: s(11),
    color: Colors.neural1,
  },
  regular13: {
    fontFamily: type.regular,
    fontSize: s(13),
    color: Colors.neural1,
  },
  regular19: {
    fontFamily: type.regular,
    fontSize: s(19),
    color: Colors.neural1,
  },
  regular29: {
    fontFamily: type.regular,
    fontSize: s(29.5),
    color: Colors.neural1,
  },

  medium11: {
    fontFamily: type.medium,
    fontSize: s(11),
    color: Colors.neural1,
  },
  medium13: {
    fontFamily: type.medium,
    fontSize: s(13),
    color: Colors.neural1,
  },
  medium14: {
    fontFamily: type.medium,
    fontSize: s(14),
    color: Colors.neural1,
  },

  bold13: {
    fontFamily: type.bold,
    fontSize: s(13),
    color: Colors.neural1,
  },
  bold14: {
    fontFamily: type.bold,
    fontSize: s(14),
    color: Colors.neural1,
  },
};

export default {
  type,
  size,
  style,
};
