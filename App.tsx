/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { WebView } from 'react-native-webview';

function App(): JSX.Element {
  return (
    <WebView source={{ uri: 'http://localhost:8080' }} />
  );
}

export default App;
