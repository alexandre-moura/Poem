import React, {useEffect, useState} from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';
import {UseDispatch, useDispatch, useSelector} from 'react-redux';
import {pressed} from '../../../reducers/generateSlice';
import type {RootState} from '../../../store/store';

function Generate(): React.ReactNode {
  /*   const [generate, setGenerate] = useState(false);

  useEffect(() => {
    console.log(generate);
  }, [generate]);
 */
  const isPressed = useSelector((state: RootState) => state.generate.value);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(isPressed);
  }, [isPressed]);

  return (
    <Pressable style={styles.pressable} onPress={() => dispatch(pressed())} />
  );
}

const styles = StyleSheet.create({
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    height: 40,
    width: 130,
    backgroundColor: 'black',
    opacity: 0.25,
    borderRadius: 18,
    borderColor: 'grey',
    borderWidth: 3,
  },
});

export default Generate;
