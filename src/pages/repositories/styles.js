import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: colors.white,
    paddingTop: 28,
    paddingHorizontal: 25,
    paddingBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    flex: 1,
    paddingHorizontal: 15,
    height: 30,
    backgroundColor: colors.light,
    borderRadius: 5,
    marginRight: 15,
    fontSize: 12,
  },

  containerMain: {
    padding: 25,
  },

  boxRepositories: {
    padding: 25,
    marginBottom: 10,
    backgroundColor: colors.white,
    borderRadius: 5,
  },

  boxRepositoriesInside: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 45,
    height: 45,
    marginRight: 10,
  },

  textTitle: {
    fontSize: 16,
    color: colors.dark,
    fontWeight: 'bold',
  },
  textDescription: {
    fontSize: 12,
    color: colors.lighter,
  },
  left: {
    flex: 1,
  },
  iconRight: {
    color: colors.light,
  },

});

export default styles;
