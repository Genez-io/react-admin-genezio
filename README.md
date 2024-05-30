Genezio project that uses react-admin as a front-end with Genezio in the backend. Integrated some basic classes as well as Genezio-based authentication.

You can play with it here: https://lime-recent-tuna.app.genez.io/

Usage (for a new project):

1. Create a Genezio project (FullStack, using React / TypeScrypt) 
2. Create a react-admin project in the client folder
3. Copy the react-admin-genezio.ts file from this repo to your client/src/ folder
4. Update the App.tsx file:
```
...
import dataProvider from "./react-admin-genezio";
import * as gsdk from "@genezio-sdk/YOUR_PROJECT_NAME";...
<Admin dataProvider={dataProvider(gsdk)}...>
...
```
5. If your app uses authentication, copy the "/client/src/authProvider.ts" to your React Admin project, update the token / region in this file with the ones provided by Genezio, and make sure you update the reset password URL to https://YOUR-DOMAIN/reset-password
