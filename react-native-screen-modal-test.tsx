import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {Text, View, Modal, Button} from 'react-native';

function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}

const DrawerNavigator = createDrawerNavigator();

function Drawer() {
  return (
    <DrawerNavigator.Navigator initialRouteName="Home">
      <DrawerNavigator.Screen name="Home" component={HomeScreen} />
      <DrawerNavigator.Screen name="Settings" component={SettingsScreen} />
    </DrawerNavigator.Navigator>
  );
}

export const ReactNativeScreenInModalTest = () => {
  const [loadDrawerUnderModal, setLoadDrawerUnderModal] = useState(false);
  const [showSimpleModal, setShowSimpleModal] = useState(false);

  return (
    <>
      <Button
        title="Launch a Modal"
        disabled={showSimpleModal}
        onPress={() => setShowSimpleModal(true)}
      />
      {showSimpleModal && (
        <Modal>
          <View>
            <Text>Hello World from a simple Modal!</Text>
          </View>
        </Modal>
      )}

      <Button
        title="Load Drawer under Modal"
        disabled={loadDrawerUnderModal}
        onPress={() => setLoadDrawerUnderModal(true)}
      />
      {!loadDrawerUnderModal && <Drawer />}
      {loadDrawerUnderModal && (
        <Modal>
          <Drawer />
        </Modal>
      )}
    </>
  );
};
