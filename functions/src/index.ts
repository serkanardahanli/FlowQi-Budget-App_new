import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

export const getCustomerCount = functions.https.onRequest(
  async (request, response) => {
    try {
      const snapshot = await admin.firestore().collection("customers").get();
      const count = snapshot.size;
      response.json({count});
    } catch (error) {
      console.error("Error getting customer count:", error);
      response.status(500).send("Error getting customer count");
    }
  }
);
