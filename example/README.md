# Description

This exemplifies a web admin interface that uses react-admin as a front-end and Genezio in the backend. It exposes some genezio classes as well as Genezio-based authentication.

You can play with it here: https://amethyst-vulnerable-pheasant.app.genez.io/

# Deploying this example

[![Deploy to Genezio](https://raw.githubusercontent.com/Genez-io/graphics/main/svg/deploy-button.svg)](https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/react-admin-genezio&base_path=example)

# Setting up this example (once deployed)

1. Enable Authentication by choosing "Authentication" on the left-side menu, and enable the Email provider
2. Make sure you update the reset password URL from Authentication / Settings / Email Templates / Reset Password to `https://ABC-DEF-GHI.app.genez.io/reset-password` (you'll find your domain name under the Domains section)
3. Update the auth token / region in the `client/src/authProvider.ts` file with the ones provided by Genezio - you can find them in the above Authentication section
4. Redeploy using the "Deploy" button above
5. Go to `https://ABC-DEF-GHI.app.genez.io/` and test the project in your browser

# Using your existing react admin on a new genezio project

1. Install Genezio on your machine using `npm install -g genezio`
2. Create a Genezio project using `genezio create` (FullStack, using React / TypeScrypt) 
3. Create a (or copy an existing) react-admin project in the client folder, and update the `vite.config.ts` file to include `@genezio/vite-plugin-genezio` (see an example in the client/ folder of this repo)
4. Run `npm install ra-data-genezio` in your client folder
5. Update the client/App.tsx file as follows:
```
...
import dataProvider from "ra-data-genezio";
import * as gsdk from "@genezio-sdk/YOUR_PROJECT_NAME";...
<Admin dataProvider={dataProvider(gsdk)}...>
...
```
6. Run `genezio local` in your project folder
7. Add some resources as classes in Genezio and use them in your React Admin App (see this repo again for inspiration). The resource names in your react-admin client should match the classes name on Genezio
8. if you want to deploy your project, run `genezio deploy`

If your app uses authentication:

1. Run `npm i @genezio/auth` in your client folder
2. Copy the client/src/auth/ contents to your project and add the auth routes as exemplified in the App.tsx file in this repo
3. Copy the [authProvider.ts](https://github.com/Genez-io/react-admin-genezio/blob/main/example/client/src/authProvider.ts) file to your React Admin project
4. Run `genezio deploy` in the project root folder
5. Go to the Genezio App in your broser by accessing https://app.genez.io/ and choose your project
6. Enable Authentication by choosing "Authentication" on the left-side menu, and enable the Email provider
7. Make sure you update the reset password URL from Authentication / Settings / Email Templates / Reset Password to `https://ABC-DEF-GHI.app.genez.io/reset-password` (you'll find your domain name under the Domains section)
8. Update the auth **token** / **region** in the `client/src/authProvider.ts` file with the ones provided by Genezio - you can find them in the above Authentication section
9. Redeploy the genezio project by running `genezio deploy` again
10. Go to `https://ABC-DEF-GHI.app.genez.io/` again and test the project in your browser
