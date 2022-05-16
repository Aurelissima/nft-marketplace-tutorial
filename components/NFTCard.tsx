import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
import { assets, COLORS, SHADOWS, SIZES } from '../constants';
import { NFTItemProps } from '../screens/Home';
import { CircleButton } from './Button';
import { NFTTitle, SubInfo } from './SubInfo';

const NFTCard: FC<{ data: NFTItemProps }> = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: '100%',
          height: 250,
        }}
      >
        <Image
          source={data.image as ImageSourcePropType}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton
          imgUrl={assets.heart as ImageSourcePropType}
          right={10}
          top={10}
          handlePress={() => {
            console.log('kek');
          }}
        />
      </View>
      <SubInfo />
      <View style={{ width: '100%', padding: SIZES.font }}>
        <NFTTitle name={'kek'} />
      </View>
    </View>
  );
};

export default NFTCard;
