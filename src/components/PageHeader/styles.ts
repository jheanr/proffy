import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8257e5',
    padding: 40
  },

  topBar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  title: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 24,
    lineHeight: 32,
    marginVertical: 40,
    maxWidth: 160,
  }
});

export default styles;