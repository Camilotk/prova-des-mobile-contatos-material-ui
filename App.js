import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProjectView from "./pages/ProjectView";
import { Typography } from '@material-ui/core';

export default function App() {
  return (
    <View style={{...styles.container, backgroundColor: 'purple', height: '100%'}}>
      <Typography variant="h5" style={{color: 'white', marginTop: 5}} align="center">Gestão de Projetos</Typography>
      <ProjectView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
