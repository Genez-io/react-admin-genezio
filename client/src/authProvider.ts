import { AuthProvider, UserIdentity } from 'react-admin';
import { AuthService } from "@genezio/auth";
AuthService.getInstance().setTokenAndRegion("1-998b28e9-d315-4e37-80c4-8775547a824a", "eu-central-1");

export const authProvider: AuthProvider = {

  login: async ({ email, password }) => {
    if ((email) && password) {
      await AuthService.getInstance().login(email, password);
      return {
        success: true,
        redirectTo: "/",
      };
    }

    return {
      success: false,
      error: {
        name: "LoginError",
        message: "Invalid username or password",
      },
    };
  },
  logout: async () => {
    try {
      await AuthService.getInstance().logout();
    } catch (error) {}
    return;
  },
  checkAuth: async () => {
    try {
      let ui = (await AuthService.getInstance().userInfo());

      if (ui && ui.email) {
        return;
      }
    } catch (error) {
      throw(error);
    }
  },
  checkError: async (error) => {
  },
  getPermissions: async () => null,
  getIdentity: async ():Promise<UserIdentity> => {
    try {
      let ui = await AuthService.getInstance().userInfo();
      if (ui && ui.email) {
        return {
          id: ui.userId,
          fullName: ui.email
        };
      }
      else throw new Error("User not found");
    } catch (error) {
      throw(error);
    }
  }  
};
