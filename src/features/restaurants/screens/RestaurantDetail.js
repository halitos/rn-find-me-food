import RestInfoCard from '../components/RestInfoCard';
import React, { useState } from 'react';
import { List } from 'react-native-paper';
import { SafeAreaView, View, ScrollView } from 'react-native';
import SafeAreaWrapper from '../../../components/utility/SafeAreaWrapper';

const RestaurantDetail = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const { restaurant } = route.params;
  return (
    <SafeAreaWrapper>
      <RestInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title='Breakfast'
          left={(props) => <List.Icon {...props} icon='bread-slice' />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title='Cheese on Toast' />
          <List.Item title='Full English' />
          <List.Item title='Cereals' />
        </List.Accordion>
        <List.Accordion
          title='Lunch'
          left={(props) => <List.Icon {...props} icon='pizza' />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title='Pizza' />
          <List.Item title='Pasta' />
          <List.Item title='Salad' />
        </List.Accordion>
        <List.Accordion
          title='Dinner'
          left={(props) => <List.Icon {...props} icon='food' />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title='Steak' />
          <List.Item title='Chicken' />
          <List.Item title='Fish' />
        </List.Accordion>
        <List.Accordion
          title='Drinks'
          left={(props) => <List.Icon {...props} icon='cup' />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title='Water' />
          <List.Item title='Coffee' />
          <List.Item title='Tea' />
          <List.Item title='Juice' />
          <List.Item title='Coke' />
        </List.Accordion>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default RestaurantDetail;
