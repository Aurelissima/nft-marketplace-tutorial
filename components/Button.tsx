import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../constants';

export const CircleButton = ({
  imgUrl,
  handlePress,
  right,
  top,
}: {
  imgUrl: ImageSourcePropType;
  handlePress: () => void;
  right: number;
  top: number;
}): JSX.Element => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        top,
        right,
        ...SHADOWS.light,
      }}
      onPress={handlePress}
    >
      <Image source={imgUrl} resizeMode="contain" style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
  );
};
