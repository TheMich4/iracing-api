import CryptoJS from "crypto-js";

export const encryptPassword = (email: string, password: string) =>
  CryptoJS.enc.Base64.stringify(
    CryptoJS.SHA256(password + email.toLowerCase()),
  );
