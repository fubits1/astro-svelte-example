let _state = $state(false);

export const is_open = {
  get value() {
    return _state.value;
  },

  set value(value) {
    _state.value = value;
  },
};
