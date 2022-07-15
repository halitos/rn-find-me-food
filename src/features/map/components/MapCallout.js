import { View, Text, Image, Platform, Pressable } from 'react-native';
import WebView from 'react-native-webview';
import React from 'react';
import { FONTS, SIZES } from '../../../constants';

const isAndroid = Platform.OS === 'android';

const docStyle = `
document.body.style.marginVertical = 4;
document.body.style.borderRadius = 8;
  `;

const MapCallout = ({ restaurant }) => {
  const { name, vicinity, photos } = restaurant;
  return (
    <View
      style={{
        alignItems: 'center',
        maxWidth: 120,
        height: 'auto',
        flex: 1,
        overflow: 'hidden',
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.headingBold,
          fontSize: SIZES.medium,
          marginBottom: 4,
        }}
      >
        {name}
      </Text>
      {isAndroid ? (
        <WebView
          source={{ uri: photos[0] }}
          width={110}
          height={90}
          style={{ borderRadius: 8 }}
          injectedJavaScript={docStyle}
        />
      ) : (
        <Image
          source={{ uri: photos[0] }}
          style={{
            width: 110,
            height: 90,
            borderRadius: 8,
            overflow: 'hidden',
          }}
        />
      )}
      <Text style={{ marginTop: 4 }}>{vicinity}</Text>
    </View>
  );
};

export default MapCallout;
