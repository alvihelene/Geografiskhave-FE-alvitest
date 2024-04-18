import { makeAutoObservable, observable, action } from "mobx";
import { IUserFirebase } from "../interfaces/IUser";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
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

  @action setUser(user: User) {
    this.user = user;
  }

  @action async registerUser(user: IUserFirebase) {
    await createUserWithEmailAndPassword(auth, user.email, user.password);
    await updateProfile(auth.currentUser!, { displayName: user.name }).then(
      async () => {
        await registerUser({ id: auth.currentUser!.uid })
          .then((response) => console.log(response))
          .then(() => this.setUser(auth.currentUser!));
      },
    );

    console.log(this.user);
  }

  constructor() {
    makeAutoObservable(this);
  }
}
