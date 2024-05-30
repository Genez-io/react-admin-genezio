Genezio project that uses react-admin as a front-end with Genezio in the backend. Integrated some basic classes as well as Genezio-based authentication.

You can play with it here: https://lime-recent-tuna.app.genez.io/

Usage (for a new project):

1. Create a Genezio project (FullStack, using React / TypeScrypt) 
2. Create a react-admin project in the client folder
3. Copy the [react-admin-genezio.ts](https://github.com/bogdanripa/react-admin-genezio/blob/main/client/src/react-admin-genezio.ts) file from this repo to your client/src/ folder
4. Update the App.tsx file:
```
...
import dataProvider from "./react-admin-genezio";
import * as gsdk from "@genezio-sdk/YOUR_PROJECT_NAME";...
<Admin dataProvider={dataProvider(gsdk)}...>
...
```
5. Run `npm i @genezio/auth` in your client folder
6. Run `genezio local` in your project folder

If your app uses authentication:

1. Copy the client/src/auth/ contents to your project and add the auth routes as exemplified in the App.tsx file in this repo
2. copy the [authProvider.ts](https://github.com/bogdanripa/react-admin-genezio/blob/main/client/src/authProvider.ts) file to your React Admin project
3. Update the token / region in the above file with the ones provided by Genezio
4. Make sure you update the reset password URL (in the Genezio Project Admin UI) to https://YOUR-DOMAIN/reset-password

