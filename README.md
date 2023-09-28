# To reproduce

Run the server
```sh
yarn install
yarn dev
```

Open in Safari
- without translating, click on "Hide truncated" -> the app should not crash
- click on "Show truncated"
- translate the page to something other than English (View -> Translation -> Select language)
- wait for translation to take effect
- click on the "Hide truncated" again -> the app will crash now