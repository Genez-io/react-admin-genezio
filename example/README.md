Genezio project that uses react-admin as a front-end with Genezio in the backend. Integrated some basic classes as well as Genezio-based authentication.

You can play with it here: https://lime-recent-tuna.app.genez.io/

Usage (for a new project):

1. Create a Genezio project (FullStack, using React / TypeScrypt) 
2. Create a react-admin project in the client folder
3. run `npm install ra-data-genezio` in the client folder
4. Update the App.tsx file:
```
...
import dataProvider from "ra-data-genezio";
import * as gsdk from "@genezio-sdk/YOUR_PROJECT_NAME";...
<Admin dataProvider={dataProvider(gsdk)}...>
...
```
6. Run `genezio local` in your project folder

If your app uses authentication:

1. Run `npm i @genezio/auth` in your client folder
2. Copy the client/src/auth/ contents to your project and add the auth routes as exemplified in the App.tsx file in this repo
3. copy the [authProvider.ts](https://github.com/bogdanripa/react-admin-genezio/blob/main/example/client/src/authProvider.ts) file to your React Admin project
4. Update the token / region in the above file with the ones provided by Genezio
5. Make sure you update the reset password URL (in the Genezio Project Admin UI) to https://YOUR-DOMAIN/reset-password

