const _is_open = () => {
  let _state = $state(false);

  return {
    get value() {
      return _state;
    },

    set value(value) {
      _state = value;
    },
  };
};

export const is_open = _is_open();
