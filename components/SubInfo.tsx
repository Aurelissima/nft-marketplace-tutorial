import React, { FC } from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants';

type NFTTitleProps = {
  name: string;
};
export const NFTTitle: FC<NFTTitleProps> = ({ name }) => {
  return (
    <View>
      <Text>{{ name }}</Text>
    </View>
  );
};

export const EthPrice = (): JSX.Element => {
  return (
    <View>
      <Text>EthPrice</Text>
    </View>
  );
};

type ImgCmpProps = {
  imageUrl: ImageSourcePropType;
  index: number;
};

export const ImgCmp: FC<ImgCmpProps> = ({ imageUrl, index }) => {
  return (
    <View>
      <Image
        source={imageUrl}
        resizeMode="contain"
        style={{
          width: 48,
          height: 48,
          marginLeft: index === 0 ? 0 : -SIZES.font,
        }}
      />
    </View>
  );
};

export const People = (): JSX.Element => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
        <ImgCmp imageUrl={imgUrl as ImageSourcePropType} index={index} key={`People-${index}`} />
      ))}
    </View>
  );
};

export const EndDate = (): JSX.Element => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%',
      }}
    >
      <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.primary }}>Ending in</Text>
      <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, color: COLORS.primary }}>12h 30m</Text>
    </View>
  );
};

export const SubInfo = (): JSX.Element => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
