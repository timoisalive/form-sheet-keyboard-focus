# Android keyboard keyboard accessibility with form sheets

When opening a form sheet with Android (via keyboard), the keyboard focus should stay within the form sheet. Currently the focus can be moved to the accessible elements on the screen below as well as the bottom tabs, which should not be possible.

On iOS the keyboard focus stays within the modal and also, when using `presentation: 'modal'`, the focus behaves as expected on both platforms.

To test in emulator/simulator, use your keyboard to control the app (move with arrows, press buttons with spacebar).

On iOS, make sure you have Full Keyboard Access switched on in Accessibility Settings.

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo
