import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import { colors } from '../utils/colors'
import { fontSizes } from '../utils/sizes'
import { spacing } from '../utils/sizes'

export const FocusHistory = ({ history }) => {

  if(!history || !history.length) return <Text style={styles.title}>No tasks focused on</Text>

  renderItem = ({item}) => <Text style={styles.item}>{item}</Text>
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Tasks successfully focused on: </Text>
      <FlatList
        style={styles.item}
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  }
})