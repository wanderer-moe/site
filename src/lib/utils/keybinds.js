export function keybindHandler(element, { binds, bindCalled }) {
    const lookup = new Map(binds.map((key) => [key.toLowerCase(), false]));
  
    // add event listeners to the element
    function on_key_down(event) {
      if (event.repeat) return;
  
      const key = event.key.toLowerCase();

      // prevent default if not in a text input, slightly hacky, but works for now
      const isTextInput = event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA';
      if (!isTextInput && key !== 'Control') {
        event.preventDefault();
     }

      if (lookup.has(key)) {
        lookup.set(key, true);
      }
  
      for (const [key, flag] of lookup) {
        if (!flag) return;
      }
  
      bindCalled();
    }
  
    function on_key_up(event) {
      const key = event.key.toLowerCase();
      if (lookup.has(key)) {
        lookup.set(key, false);
      }
    }
  
    element.addEventListener('keydown', on_key_down);
    element.addEventListener('keyup', on_key_up);
  
    // return a destroy function to remove the event listeners
    return {
      destroy() {
        element.removeEventListener('keydown', on_key_down);
        element.removeEventListener('keyup', on_key_up);
      },
  
      update({ binds: newBinds, bindCalled: newOnBind }) {
        binds = newBinds;
        bindCalled = newOnBind;
  
        // clear the lookup map, set initial values to false
        lookup.clear();
        binds.forEach((key) => lookup.set(key.toLowerCase(), false));
      },
    };
  }
  