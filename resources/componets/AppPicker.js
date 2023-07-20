
import React, { useState } from 'react';
import { View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const AppPicker = ({data, style, onChange}) => {
  const [selected, setSelected] = useState(null);

  const handleValueSelect = (value) => {
    setSelected(value);
    onChange(value); // pass the selected value directly to the onChange function
  }

  return (
    <View style={style}>
      <Picker
        selectedValue={selected}
        onValueChange={handleValueSelect} // use the updated handler function
      >
        {data.map(data => (
          <Picker.Item key={data} label={data} value={data} />
        ))}
      </Picker>
    </View>
  );
}

export default AppPicker;
