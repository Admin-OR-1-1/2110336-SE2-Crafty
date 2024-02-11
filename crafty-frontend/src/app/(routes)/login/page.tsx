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

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(result.user.email);
        if (checkUserValid()) router.push('/');
        else setState(2);
        // if(credential === null) return;
        // const token = credential.accessToken;
        // // The signed-in user info.
        // const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleSignInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // const credential = FacebookAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        console.log(result.user.email);
        if (checkUserValid()) router.push('/');
        else setState(2);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        // ...
      });
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

  const onSubmitOtp = (): boolean => {
    if (confirmationResult && otp.length == 6) {
      confirmationResult
        .confirm(otp)
        .then(() => {
          if (checkUserValid()) router.push('/');
          else setState(2);
          return true;
        })
        .catch((error) => {
          console.error(error);
          return false;
        });
    }
    return false;
  };

  const checkUserValid = (): boolean => {
    if (auth.currentUser) return Math.random() > 0.5;
    return false;
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
        <OtpPage
          otp={otp}
          setOtp={setOtp}
          otpSubmit={onSubmitOtp}
          checkUserValid={checkUserValid}
          reSendOtp={onSubmitOtp}
        />
      )}
      {state === 2 && <PersonalInfomationPage />}
    </LogoLeftSide>
  );
};

export default Page;
