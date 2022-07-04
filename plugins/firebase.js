import { initializeApp } from 'firebase/app'
import { doc, getDoc, collection, getDocs, setDoc, getFirestore } from 'firebase/firestore'
import { getStorage, ref, uploadBytes } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyB3iZ6cxca6o34gbPN1ZOwQHLgnBAu5PIw',
  authDomain: 'viener-site.firebaseapp.com',
  projectId: 'viener-site',
  storageBucket: 'viener-site.appspot.com',
  messagingSenderId: '929849301550',
  appId: '1:929849301550:web:b4a1643bf5a554d51addbf'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage()
const db = getFirestore(app)

// eslint-disable-next-line no-empty-pattern
export default function ({}, inject) {
  const main = {
    async list (base) {
      const querySnapshot = await getDocs(collection(db, base))
      if (querySnapshot.empty) {
        return null
      } else {
        const docs = {}

        querySnapshot
          .forEach(doc => (docs[doc.id] = doc.data()))

        return {
          name: base,
          docs
        }
      }
    },
    async get (base, name) {
      const docSnap = await getDoc(doc(db, base, name))
      if (!docSnap.data()) {
        return 'documento não existe'
      } else {
        return docSnap.data()
      }
    },
    async set (base, name, data) {
      try {
        await setDoc(doc(db, base, name), data)
        return 'documento adicionado com sucesso'
      } catch (error) {
        console.error(error)
        return error
      }
    },
    async file (file) {
      const storageRef = ref(storage, 'equipamentos/' + file.name)

      const snapshot = await uploadBytes(storageRef, file)
      return snapshot
    }
  }

  main.set('Inversores', 'sun-9k-g', {
    category: 'Deye',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit sem, placerat aliquet posuere ut, semper ac tellus. Etiam lacinia felis sed magna fringilla condimentum. Maecenas nec lacus tincidunt, sagittis diam nec, sagittis nisi. Praesent iaculis justo non sem placerat congue.',
    doc: 'https://firebasestorage.googleapis.com/v0/b/viener-site.appspot.com/o/equipamentos%2FSUN-3K-G.pdf?alt=media&token=75e05a22-47da-43ea-877a-deed3b91ad86',
    image: {
      alt: 'Essa é uma imagem',
      src: 'https://firebasestorage.googleapis.com/v0/b/viener-site.appspot.com/o/equipamentos%2FSUN-3K-G.jpg?alt=media&token=79c7d3fb-c749-4091-87bc-52e045887a12'
    },
    slug: 'sun-3k-g',
    title: 'sun-3k-g',
    type: 'Inversor'
  })

  inject('firebase', main)
}
