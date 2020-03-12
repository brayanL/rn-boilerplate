import Reactotron from "reactotron-react-native";

let scriptHostname;
const scriptURL = NativeModules.SourceCode.scriptURL;
scriptHostname = scriptURL.split('://')[1].split(':')[0];
// scriptHostname = '172.28.2.147';

Reactotron
    .configure({ host: scriptHostname }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!
