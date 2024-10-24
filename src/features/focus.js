import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton.js';
import { colors } from '../utils/colors.js';
import { spacing } from '../utils/sizes.js'

// Destructure addSubject from props
export const Focus = ({ addSubject }) => {
  const [text, setText] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          value={text}
          onChangeText={(value) => setText(value)}
          theme={{ colors: { primary: colors.primaryColor, text: colors.primaryColor, placeholder: colors.primaryColor } }}
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => addSubject(text)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  button: {
    justifyContent: 'center'
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});
