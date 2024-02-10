'use client';

import React, { useEffect, useState } from 'react';
import { OtpPage, PersonalInfomationPage, RegisterPage } from './_components';
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';
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

  const onSubmitOtp = () => {
    if (confirmationResult && otp.length == 6) {
      confirmationResult
        .confirm(otp)
        .then(() => {
          if (checkUserValid()) router.push('/after');
          else setState(2);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const checkUserValid = (): boolean => {
    if (auth.currentUser) return Math.random() > 0.5;
    return false;
  };

  return (
    <LogoLeftSide>
      <button
        className="h-12 w-12 bg-black"
        onClick={() => {
          setState((state + 1) % 3);
        }}></button>
      {state === 0 && (
        <RegisterPage onSubmitPhoneNumber={onSubmitPhoneNumber} setPhoneNumber={setPhoneNumber} />
      )}
      {state === 1 && (
        <OtpPage
          otp={otp}
          setOtp={setOtp}
          otpSubmit={onSubmitOtp}
          checkUserValid={checkUserValid}
        />
      )}
      {state === 2 && <PersonalInfomationPage />}
    </LogoLeftSide>
  );
};

export default Page;
