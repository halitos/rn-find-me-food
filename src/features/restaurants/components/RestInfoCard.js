import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { SIZES, COLORS, FONTS, SHADOWS, FONTSIZES } from '../../../constants';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

const RestInfo = ({ restaurant }) => {
  const {
    name,
    address,
    photos,
    rating,
    icon,
    isOpenNow,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(
    new Array(Math.ceil(restaurant.rating)),
    (x, i) => i + 1
  );

  return (
    <View>
      <Card elevation={5}>
        <Card.Cover
          style={{ padding: SIZES.base }}
          source={{ uri: photos[0] }}
        />
        {/* <Card.Title title={name} subtitle={`Address: ${address}`} /> */}
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
                  }}
                >
                  CLOSED TEMPORARILY
                </Text>
              </View>
            )}

            {isOpenNow && (
              <SvgXml xml={open} width={SIZES.large} height={SIZES.large} />
            )}
            <Image
              source={{
                uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
              }}
              style={{
                width: SIZES.large,
                height: SIZES.large,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: FONTSIZES.caption,
              fontFamily: FONTS.bodyLight,
            }}
          >
            Address: {address}
          </Text>
        </View>
      </Card>
    </View>
  );
};

export default RestInfo;

const styles = StyleSheet.create({});