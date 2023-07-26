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
    <WebView source={{ uri: 'https://www.1000langages.ch/' }} />
  );
}

export default App;
