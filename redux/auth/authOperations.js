import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase/config";
import { authSlice } from "../../redux/auth/authReduser";

const auth = getAuth(app);
 //***************
export const authSignUpUser =
  ({ login, email, password }) =>
  async (dispatch, getSatte) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = await auth.currentUser;
    await updateProfile(user, {
      displayName: login,
    });

      const updateUserSucces = await auth.currentUser;

       
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: updateUserSucces.uid,
          login: updateUserSucces.displayName,
        })
      );
        
    } catch (error) {
      
      console.log("error.message", error.message);
    }
    };
  
    //***************
export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getSatte) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
     } catch (error) {
           console.log("error.message", error.message);
    }
    };
  
     //***************
export const authSignOutUser = () => async (dispatch, getSatte) => {
 await signOut(auth);
dispatch(authSlice.actions.authSignOut());
 };



 //***************
export const authStateChangeUser = () => async (dispatch, getSatte) => {
   try {
     onAuthStateChanged(auth, (user) => {
       if (user) {
         const userUpdateProfile = {
           login: user.displayName,
           userId: user.uid,
         };
         dispatch(authSlice.actions.authStateChange({ stateChange: true }));
         dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
       }
     });
   } catch (error) {
     console.log("err", error.message);
   }
};
