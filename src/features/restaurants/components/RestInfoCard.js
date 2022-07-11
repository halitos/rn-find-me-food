import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components';

const Rating = styled.Text`
  color: #333;
  padding: 16px;
  font-weight: bold;
  font-size: 16px;
`;

const RestInfo = ({ restaurant }) => {
  const {
    name,
    address,
    photos,
    rating,
    icon,
    openingHours,
    isClosedTemporarily,
  } = restaurant;

  return (
    <View>
      <Card elevation={5}>
        <Card.Cover style={{ padding: 8 }} source={{ uri: photos[0] }} />
        <Card.Title title={name} subtitle={address} />
        <Rating>Rating: {rating}</Rating>
      </Card>
    </View>
  );
};

export default RestInfo;

const styles = StyleSheet.create({});
