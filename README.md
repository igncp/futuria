# Futuria

Sample React Native App to test some proof of concepts.

## Next Steps

- Try components and APIs in Web and Mobile

## Notes

- To deploy to android:
    - ADB connect to device
    - Run `npm run start`
    - Run `npm run run-android`
- Couldn't make it work via Wifi yet: Unable to connect to server
    - Seems the dev menu can be opened with the `adb shell` command

## Troubleshooting

- Different ADB versions: https://stackoverflow.com/questions/38512025/react-native-run-android-mismatch-version-adb-server-version
- In android
    - to open the development menu: `adb shell input keyevent 82`
    - to reload app: `adb shell input text "RR"`
    - remember to run: `adb reverse tcp:8081 tcp:8081`
- Remember to connect device to Wifi

## Resources

- Getting Started: https://facebook.github.io/react-native/docs/getting-started
- Storybook: https://storybook.js.org/docs/guides/guide-react-native/
- React Native for Web: https://github.com/necolas/react-native-web/blob/master/docs/guides/getting-started.md
- Running on Device: https://facebook.github.io/react-native/docs/running-on-device
- Setup adb over wifi: https://futurestud.io/tutorials/how-to-debug-your-android-app-over-wifi-without-root
- Native code: https://facebook.github.io/react-native/docs/native-modules-android
- Tips and Tricks (IBM): https://developer.ibm.com/recipes/tutorials/react-native-tips-and-tricks/
- Components And APIs: https://facebook.github.io/react-native/docs/components-and-apis.html
