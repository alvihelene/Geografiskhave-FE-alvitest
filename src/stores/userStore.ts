import { makeAutoObservable, observable, action } from "mobx";
import { IUserFirebase } from "../interfaces/IUser";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { registerUser } from "../services/authService";
const firebaseConfig = {
  apiKey: "AIzaSyB5k3ues-VyvT8rxUwuWHyFwospSFIKgCc",
  authDomain: "geografiskhave-wuo2.firebaseapp.com",
  projectId: "geografiskhave-wuo2",
  storageBucket: "geografiskhave-wuo2.appspot.com",
  messagingSenderId: "502243111873",
  appId: "1:502243111873:web:90e1132fec6d2be4dc3540",
};

initializeApp(firebaseConfig);
const auth = getAuth();

export class AuthStore {
  @observable user: User | null = null;

  @action setUser(user: User | null) {
    this.user = user;
  }

  @action async registerUser(user: IUserFirebase) {
    await createUserWithEmailAndPassword(auth, user.email, user.password);
    await updateProfile(auth.currentUser!, { displayName: user.name }).then(
      async () => {
        await registerUser({ id: auth.currentUser!.uid }).then(() =>
          this.setUser(auth.currentUser!),
        );
      },
    );
  }

  @action async loginUser(user: IUserFirebase) {
    await signInWithEmailAndPassword(auth, user.email, user.password).then(
      () => {
        this.setUser(auth.currentUser!);
      },
    );
  }

  @action async signOut() {
    await auth.signOut().then(() => {
      this.setUser(null);
    });
  }

  constructor() {
    makeAutoObservable(this);
  }
}
