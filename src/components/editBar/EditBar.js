import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { wp, hp } from '../../constants/Dimensions'
import EditIcon from '../../../assets/icons/EditIcon';
import { FontSize } from '../../constants/Sizes';

const EditBar = props => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.editTitleView}>
      <Text style={styles.editTitleText}>{title}</Text>
      <EditIcon width={16} height={16} />
    </TouchableOpacity>
  );
};

export default EditBar;

const styles = StyleSheet.create({
  editTitleText: {
    fontSize: FontSize(22),
    fontWeight: '800',
    color: '#3A2D13',
    marginRight: 10,
  },
  editTitleView: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
