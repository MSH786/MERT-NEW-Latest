import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {categories} from '../../models/data';
import TextComponent from '../text/TextComponent';

const VehicleCategoryScrollComponent = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      horizontal>
      {categories(selectedCategory).map((category, i) => {
        return (
          <TouchableOpacity
            key={i}
            onPress={() => setSelectedCategory(i)}
            style={styles.category}>
            {category.icon}
            {category.title && (
              <TextComponent
                color={
                  i === selectedCategory
                    ? Colors.categoriesOrange
                    : 'gray'
                }>
                {category.title}
              </TextComponent>
            )}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default VehicleCategoryScrollComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  category: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
