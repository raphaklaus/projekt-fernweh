import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";

export const getDBInstance = () => {
  const serviceAccountRaw = fs.readFileSync("firebase-key.json", "utf8");
  const serviceAccount = JSON.parse(serviceAccountRaw);

  initializeApp({
    credential: cert(serviceAccount),
  });

  return getFirestore();
};
