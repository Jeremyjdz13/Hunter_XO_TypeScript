// import { ApolloServer, gql } from 'apollo-server';
// import admin from 'firebase-admin';

// admin.initializeApp({
//   // Initialize Firebase Admin SDK with appropriate credentials
//   // Make sure to configure this properly for your Firebase project
//   credential: admin.credential.applicationDefault(),
//   databaseURL: 'https://your-firebase-project.firebaseio.com',
// });

// const resolvers = {
//   Query: {
//     currentUser: async (_, __, { user }) => {
//       if (!user) {
//         throw new Error('Authentication required.');
//       }

//       try {
//         const userRecord = await admin.auth().getUser(user.uid);

//         // Fetch additional user data from Firestore if needed
//         const firestore = admin.firestore();
//         const userDoc = await firestore.collection('users').doc(user.uid).get();
//         const userData = userDoc.data();

//         return {
//           uid: userRecord.uid,
//           email: userRecord.email,
//           displayName: userData?.displayName || null,
//           // Add other user fields here
//         };
//       } catch (error) {
//         throw new Error('Error fetching user data.');
//       }
//     },
//   },
// };

// export default resolvers;
