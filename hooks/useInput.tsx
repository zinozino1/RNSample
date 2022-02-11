import React, {useState} from 'react';

const useInput = <T extends {}>(val = '') => {
  const [text, setText] = useState<string>(val);

  const onChangeText = (val: string) => {
    setText(val);
  };

  return [text, setText, onChangeText];
};

export default useInput;
