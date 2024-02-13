'use client';

import React, { useEffect, useState } from 'react';
import { OtpPage, PersonalInfomationPage, RegisterPage } from './_components';
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import { auth } from '@/configs/firebaseConfig';

import LogoLeftSide from '@/app/_components/ui/logoLeftSide';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Page = () => {
  const router = useRouter();

  const [state, setState] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult>();

  useEffect(() => {
    (window as any).recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
      size: 'invisible',
    });
  }, []);

  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);

      // This gives you a Google Access Token. You can use it to access Google APIs.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(result.user.email);

      const isValid = await checkUserValid();
      if (isValid.error) return;
      if (isValid.valid) {
        router.push('/');
      } else {
        setState(2);
      }

      // if (credential === null) return;
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // ...
    } catch (error) {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error);
      // ...
    }
  };

  const handleSignInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // const credential = FacebookAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      console.log(result.user.email);

      const isValid = await checkUserValid();
      if (isValid.error) return;
      if (isValid.valid) {
        router.push('/');
      } else {
        setState(2);
      }
      // ...
    } catch (error) {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      // The AuthCredential type that was used.
      // const credential = FacebookAuthProvider.credentialFromError(error);
      // ...
      console.log(error);
    }
  };

  const onSubmitPhoneNumber = async () => {
    const appVerifier = (window as any).recaptchaVerifier;

    const formattedPhoneNumber = '+66' + phoneNumber.slice(1);

    signInWithPhoneNumber(auth, formattedPhoneNumber, appVerifier)
      .then((confirmationResult) => {
        setState(1);
        setConfirmationResult(confirmationResult);
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error, {
        //   position: 'top-right',
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: 'colored',
        // });
      });
  };

  const onSubmitOtp = async () => {
    if (confirmationResult && otp.length === 6) {
      try {
        await confirmationResult.confirm(otp);
        const isValid = await checkUserValid();
        if (isValid.error) return;
        if (isValid.valid) {
          router.push('/');
        } else {
          setState(2);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const checkUserValid = async () => {
    if (auth) {
      const token = await auth.currentUser?.getIdToken();
      console.log('token', token);
      const apiUrl = process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3000';
      console.log(apiUrl);
      const isValid = await axios
        .get(apiUrl + '/user', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response.status);
          console.log(response.data);
          const data = response.data;
          if (data.Message === 'Not registered') return { error: false, valid: false };
          // else
          return { error: false, valid: true };
        })
        .catch((error) => {
          console.log("GET request didn't work:", error);
          return { error: true, valid: false };
        });
      return isValid;
    } else return { error: true, valid: false };
  };

  return (
    <LogoLeftSide>
      {/* <button
        className="h-12 w-12 bg-black"
        onClick={() => {
          setState((state + 1) % 3);
        }}></button> */}
      {state === 0 && (
        <RegisterPage
          phoneNumber={phoneNumber}
          onSubmitPhoneNumber={onSubmitPhoneNumber}
          setPhoneNumber={setPhoneNumber}
          handleSignInWithGoogle={handleSignInWithGoogle}
          handleSignInWithFacebook={handleSignInWithFacebook}
        />
      )}
      {state === 1 && (
        <OtpPage otp={otp} setOtp={setOtp} otpSubmit={onSubmitOtp} reSendOtp={onSubmitOtp} />
      )}
      {state === 2 && <PersonalInfomationPage />}
    </LogoLeftSide>
  );
};

export default Page;
