import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden'
  },

  profile: {
    padding: 24,

    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    backgroundColor: '#eee',
    borderRadius: 32,
    height: 64,
    width: 64
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    color: '#32264d',
    fontFamily: 'Archivo_700Bold',
    fontSize: 20
  },

  subject: {
    color: '#6a6180',
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    marginTop: 4
  },

  bio: {
    color: '#6a6180',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    marginHorizontal: 24
  },

  footer: {
    backgroundColor: '#fafafc',
    marginTop: 24,
    padding: 24,

    alignItems: 'center'
  },

  price: {
    color: '#6a6180',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14
  },

  priceValue: {
    color: '#8257e5',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16
  },

  favoriteButton: {
    backgroundColor: '#8257e5',
    borderRadius: 8,
    height: 56,
    marginRight: 8,
    width: 56,

    alignItems: 'center',
    justifyContent: 'center',
  },

  favorited: {
    backgroundColor: '#e33d3d'
  },

  contactButton: {
    backgroundColor: '#04d361',
    borderRadius: 8,
    height: 56,
    marginRight: 8,

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  contactButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    marginLeft: 16
  }
});

export default styles;