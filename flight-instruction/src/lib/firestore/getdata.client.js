import db from "../firebase/firebase.client";

import {doc, getDoc} from "firebase/firestore";

async function getData(first, second) {
    const docRef = doc(db, first, second)
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return "ERROR";
    }
}

export {getData};