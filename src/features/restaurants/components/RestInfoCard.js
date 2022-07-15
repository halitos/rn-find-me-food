import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { SIZES, COLORS, FONTS, FONTSIZES } from '../../../constants';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import FavouriteButton from '../../../components/favourites/FavouriteButton';

const RestInfo = ({ restaurant, pressed }) => {
  const {
    name,
    vicinity,
    photos,
    rating,
    icon,
    isOpenNow,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)), (x, i) => i + 1);

  return (
    <View
      style={{
        marginBottom: SIZES.small,
        opacity: pressed ? 0.5 : 1,
      }}
    >
      <Card elevation={5}>
        <FavouriteButton restaurant={restaurant} />
        <Card.Cover
          style={{ padding: SIZES.base }}
          source={{ uri: photos[0] }}
        />
        <View style={{ padding: SIZES.font }}>
          <Text
            style={{
              fontSize: FONTSIZES.title,
              fontFamily: FONTS.heading,
            }}
          >
            {name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View style={{ flexDirection: 'row', paddingVertical: SIZES.base }}>
              {ratingArray.map((_, index) => (
                <SvgXml
                  key={index}
                  xml={star}
                  width={SIZES.large}
                  height={SIZES.large}
                  fill={COLORS.brand.primary}
                />
              ))}
            </View>
            {isClosedTemporarily && (
              <View style={{ paddingVertical: SIZES.base }}>
                <Text
                  variant='caption'
                  style={{
                    color: COLORS.ui.error,
                    marginLeft: SIZES.extraLarge,
                  }}
                >
                  CLOSED TEMPORARILY
                </Text>
              </View>
            )}
            <View style={{ flexDirection: 'row' }}>
              {isOpenNow && (
                <SvgXml
                  xml={open}
                  width={SIZES.large}
                  height={SIZES.large}
                  style={{ marginRight: SIZES.small }}
                />
              )}
              <Image
                source={{
                  uri:
                    icon ||
                    'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
                }}
                style={{
                  width: SIZES.large,
                  height: SIZES.large,
                  marginRight: SIZES.base,
                }}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: FONTSIZES.caption,
              fontFamily: FONTS.bodyLight,
            }}
          >
            Address: {vicinity}
          </Text>
        </View>
      </Card>
    </View>
  );
};

export default RestInfo;

const styles = StyleSheet.create({});
