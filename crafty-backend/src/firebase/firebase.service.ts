import { Injectable } from '@nestjs/common'

import * as firebase from 'firebase-admin'
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier'

@Injectable()
export class FirebaseService {
  private firebaseApp: firebase.app.App
  constructor() {
    this.firebaseApp = firebase.initializeApp({
      projectId: process.env.FIREBASE_PROJECT_ID,
      credential: firebase.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      }),
    })
  }

  async verifyUser(token: string) {
    const response: DecodedIdToken = await this.firebaseApp
      .auth()
      .verifyIdToken(token)
    return {
      userId: String(response.user_id),
      email: response.email,
      name: response.name,
      phoneNumber: response.phone_number,
    }
  }
}
