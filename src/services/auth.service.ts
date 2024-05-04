import axios from "axios";

import {
  TForgotPasswordSchema,
  TLoginSchema,
  TRegisterSchema,
} from "@/components/forms/auth.schema";

const authEndPoints = {
  login: `/api/login`,
  register: `/api/register`,
  forgotPassword: `/api/forgot-password`,
  resetPassword: `/api/reset-password`,
  updatePassword: `/api/update-password`,
  loginSession: `/api/loginsession`,
  updateUserDetails: `/api/user/me/update`,
};

class AuthService {
  async register(payload: TRegisterSchema) {
    return await axios.post(authEndPoints.register, payload);
  }
  async login(payload: TLoginSchema) {
    return await axios.post(authEndPoints.login, payload);
  }
  async forgotPassword(payload: TForgotPasswordSchema) {
    return await axios.post(authEndPoints.forgotPassword, payload);
  }
  async resetPassword(payload: TResetPasswordSchema) {
    return await axios.post(authEndPoints.resetPassword, payload);
  }
}

export default new AuthService();
