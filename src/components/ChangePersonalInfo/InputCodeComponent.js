import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {wp, hp} from '../../constants/Dimensions';
import {FontSize} from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';

const InputCodeComponent = () => {
  const CELL_COUNT = 6;
  const [value, setValue] = useState('000000');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <>
      <View style={styles.container}>
        {/*Input code Rect start*/}
        <View style={styles.InputCodeRect}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={
                  index == 0
                    ? [styles.cellFirst, isFocused && styles.focusCell]
                    : [styles.cell, isFocused && styles.focusCell]
                }
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        {/*Input code Rect end*/}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(327),
    marginTop: hp(20),
    marginBottom: hp(10),
    flexDirection: 'row',
  },
  InputCodeRect: {
    width: wp(327),
    height: hp(63.2),
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: wp(328),
      height: hp(64),
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 15,
  },
  codeFieldRoot: {
    marginTop: hp(10),
    alignContent: 'center',
    alignItems: 'center',
  },
  cellFirst: {
    width: wp(50.23),
    paddingHorizontal: wp(7),
    paddingVertical: wp(7),
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
    fontSize: FontSize(21),
    textAlign: 'center',
    alignSelf: 'center',
  },
  cell: {
    width: wp(50.23),
    paddingHorizontal: wp(7),
    paddingVertical: hp(7),
    borderLeftWidth: hp(1),
    borderColor: '#eee',
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
    fontSize: FontSize(21),
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default InputCodeComponent;
