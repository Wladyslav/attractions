import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import dbConnect from '../../../../utils/dbConnect';

import User from '@models/Users';


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await dbConnect();

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            name: profile.name.replace(" ", "").toLowerCase(),
            profilePicture: profile.picture,
            // Set default values for additional fields
            password: '', // You should handle this properly, don't leave it empty
            role: 'user',
            createdAt: Date.now(),
            updatedAt: Date.now(),
            phoneNumber: '', // You might want to handle this properly too
          });
        }

        return true
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false
      }
    },
  }
})

export { handler as GET, handler as POST }
