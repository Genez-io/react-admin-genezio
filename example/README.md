Genezio project that uses react-admin as a front-end with Genezio in the backend. Integrated some basic classes as well as Genezio-based authentication.

You can play with it here: https://lime-recent-tuna.app.genez.io/

Usage (for a new project):

1. Install Genezio using `npm install -g genezio`
2. Create a Genezio project using `genezio create` (FullStack, using React / TypeScrypt) 
3. Create a react-admin project in the client folder, and update the vite.config.ts file to include @genezio/vite-plugin-genezio (see an example in the client/ folder of this repo)
4. Run `npm install ra-data-genezio` in the client folder
5. Update the App.tsx file:
```
...
import dataProvider from "ra-data-genezio";
import * as gsdk from "@genezio-sdk/YOUR_PROJECT_NAME";...
<Admin dataProvider={dataProvider(gsdk)}...>
...
```
6. Run `genezio local` in your project folder
7. Add some resources as classes in Genezio and use them in your React Admin App (see this repo again for inspiration)

If your app uses authentication:

1. Run `genezio deploy` in the project root folder
1. Run `npm i @genezio/auth` in your client folder
2. Copy the client/src/auth/ contents to your project and add the auth routes as exemplified in the App.tsx file in this repo
3. Copy the [authProvider.ts](https://github.com/bogdanripa/react-admin-genezio/blob/main/example/client/src/authProvider.ts) file to your React Admin project
4. Update the token / region in the above file with the ones provided by Genezio - you can find them on app.genez.io / your project / Authentication
5. Enable Email Provider (Authentication) from app.genez.io / your project / Authentication / 
6. Make sure you update the reset password URL from app.genez.io / your project / Authentication / Settings / Email Templates / Reset Password to https://YOUR-DOMAIN/reset-password

Note: you'll find your domain name under  app.genez.io / your project / Domains

