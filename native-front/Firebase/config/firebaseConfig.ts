import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyCdYudnII0xiPSCW7wVr7HP3Xsd3RIB3Yc",
  authDomain: "sample-project-5432a.firebaseapp.com",
  projectId: "sample-project-5432a",
  storageBucket: "sample-project-5432a.appspot.com",
  messagingSenderId: "327083833906",
  appId: "1:327083833906:web:fc6253a9748f7cdb651a2b",
  measurementId: "G-4HX1JDFTHW"
};

export const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
