export default {

  namespace: 'users',

  state: {
    list: [],
    total: null,
    current: 1,
    currentItem: {},
  },

  reducers: {

  },

  effects: {},

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/users') {
          dispatch({ type: 'query', payload: location.query });
        }
      });
    },
  },

};
