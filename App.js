import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native'
//import Constants from 'expo-constants';
import { colors } from './src/utils/colors.js'
import { Focus } from './src/features/focus'
import { FocusHistory } from './src/features/FocusHistory'
import { Timer } from './src/features/Timer'

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null)
  const [history, setHistory] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history}/>
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject])
          }}
          clearSubject={() => {setCurrentSubject(null)}}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.primaryColor,
  },
  text: {
    color: colors.secondaryColor,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'top', // Aligns content vertically in the center
    alignItems: 'center', // Aligns content horizontally in the center
  },
});
