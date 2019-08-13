import React, { Fragment, useState } from 'react';
import { NativeModules } from 'react-native';

import { Alert, Picker, FlatList, Text, Button, View } from 'react-native';

const Shell = () => {
  const [language, setLanguage] = useState('js');
  const handleClick = () => {
    const { ToastExample } = NativeModules;
    ToastExample.show('Awesome', ToastExample.SHORT);
  };

  return (
    <Fragment>
      <Button
        accessibilityLabel="Learn more about this purple button"
        color="#841584"
        onPress={handleClick}
        title="Trigger Toast"
      />
      <FlatList
        data={[{ key: 'a' }, { key: 'b' }]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
      <Picker
        selectedValue={language}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </Fragment>
  );
};

export default Shell;
