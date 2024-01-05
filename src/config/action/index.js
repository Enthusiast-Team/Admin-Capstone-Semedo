import { onValue, ref, remove, update } from 'firebase/database';
import { database } from '../firebase';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { getDatabase, set } from "firebase/database";
import {auth} from "../firebase";

export const loginUserAPI = (data) => async (dispatch) => {
  try {
    dispatch({ type: 'CHANGE_LOADING', value: true });

    const res = await signInWithEmailAndPassword(auth, data.email, data.password);

    const dataUser = {
      email: res.user.email,
      uid: res.user.uid,
      emailVerified: res.user.emailVerified,
      refreshToken: res.user.refreshToken
    };

    dispatch({ type: 'CHANGE_LOADING', value: false });
    dispatch({ type: 'CHANGE_ISLOADING', value: true });
    dispatch({ type: 'CHANGE_USER', value: dataUser });

    return Promise.resolve(dataUser);
  } catch (error) {
    console.error('Login failed', error);
    dispatch({ type: 'CHANGE_LOADING', value: false });
    dispatch({ type: 'CHANGE_ISLOADING', value: false });
    return Promise.reject(error);
  }
};

export const fetchArtikel = () => (dispatch) => {
  const artikelRef = ref(database, '/Artikel');

  onValue(artikelRef, (snapshot) => {
    const data = snapshot.val();
    const dataObject = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
    dispatch({ type: 'SET_ARTIKEL', value: dataObject });
  });
};


export const fetchArtikelById = (id) => async (dispatch) => {
  try {
    // Ganti 'artikel' dengan nama node atau path sesuai dengan struktur Firebase Realtime Database Anda
    const artikelRef = ref(database,`Artikel/${id}`);

    artikelRef.once('value', (snapshot) => {
      const data = snapshot.val();

      if (!data) {
        console.error('Artikel not found');
        return;
      }

      dispatch({
        type: 'SET_SELECTED_ARTIKEL',
        value: data,
      });
    });
  } catch (error) {
    console.error('Error fetching artikel by ID:', error);
  }
};

// Hapus data
export const deleteArtikel = (id) => async (dispatch) => {
  const artikelRef = ref(database, `/Artikel/${id}`);

  try {
    await remove(artikelRef);
    dispatch({ type: 'DELETE_ARTIKEL', payload: { id, artikelRef } });
    console.log('Data deleted successfully');
  } catch (error) {
    console.error('Error deleting artikel:', error);
  }
};


// Update data
export const updateArtikel = (id, updatedData) => (dispatch) => {
  const artikelRef = ref(database, `/Artikel/${id}`);
  
  update(artikelRef, updatedData)
    .then(() => {
      dispatch({ type: 'UPDATE_ARTIKEL', id, updatedData });
    })
    .catch((error) => {
      console.error('Error updating artikel:', error);
    });
};
