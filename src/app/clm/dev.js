import Router from '../router/dev'

const navigation = {
  navigateTo(id) {
    Router.push(`/${id}`)
  }
};

export default {
  navigation
}
