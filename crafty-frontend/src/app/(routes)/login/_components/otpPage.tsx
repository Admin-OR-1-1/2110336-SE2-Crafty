import { Dispatch, FC, SetStateAction, useRef, KeyboardEvent } from 'react';
import Link from 'next/link';

interface OTPFormProps {
  otp: string;
  setOtp: Dispatch<SetStateAction<string>>;
  otpSubmit: () => void;
  checkUserValid: () => boolean;
}

const OTPForm: FC<OTPFormProps> = ({ otp, setOtp, otpSubmit, checkUserValid }) => {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (index === 0) {
        e.preventDefault();
        inputsRef.current[0].value = '';
        const newCode = Array.from(otp);
        newCode[0] = '';
        setOtp(newCode.join(''));
      } else if (index === 5 && otp[index]) {
        e.preventDefault();
        inputsRef.current[4].value = '';
        const newCode = Array.from(otp);
        newCode[5] = '';
        setOtp(newCode.join(''));
      } else {
        if (otp[index - 1]) {
          e.preventDefault();
          inputsRef.current[index - 1].value = '';
          const newCode = Array.from(otp);
          newCode[index - 1] = '';
          setOtp(newCode.join(''));

          if (inputsRef.current[index - 1]) {
            inputsRef.current[index - 1].focus();
          }
        } else {
          if (inputsRef.current[index - 1]) {
            inputsRef.current[index - 1].focus();
          }
        }
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (inputsRef.current[index - 1]) {
        inputsRef.current[index - 1].focus();
      }
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (inputsRef.current[index]) {
        inputsRef.current[index + 1].focus();
      }
    } else if (e.key <= '9' && e.key >= '0') {
      inputsRef.current[index].value = e.key;
      if (index + 1 < 6) inputsRef.current[index + 1].focus();
      else {
        inputsRef.current[index].blur();
      }

      const newCode = Array.from(otp);
      newCode[index] = e.key;
      const temp = newCode.join('');
      setOtp(temp);
      if (temp.length < 6 && index >= temp.length) {
        inputsRef.current[temp.length].focus();
      }
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex-grow overflow-hidden">
        <div className="top-0 col-span-1 flex h-[136px] grid-cols-[1fr] grid-rows-[auto_1fr_auto] items-center overflow-hidden px-6 leading-6 text-zinc-800 md:hidden">
          <div className="text-zinc-800">
            <h1 className="mb-4 mt-0 block text-3xl font-normal leading-tight">OTP Verify</h1>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-8 gap-x-6 px-6 leading-6 text-zinc-800 md:mt-0 md:pt-20">
          <div className="col-span-8 text-zinc-800 md:col-span-6 md:col-start-2">
            <div className="flex flex-col items-center justify-center text-stone-700">
              <form className="rounded bg-white p-8">
                <h2 className="font-kanit text-xl font-normal">รหัสยืนยัน</h2>
                <div className="mb-4 flex items-center gap-4">
                  <input
                    type="text"
                    value={otp[0] || ''}
                    onKeyDown={(e) => handleKeyDown(e, 0)}
                    onChange={(e) => e.preventDefault()}
                    maxLength={1}
                    ref={(input) => {
                      if (input) inputsRef.current[0] = input;
                    }}
                    className="font-circular h-10 w-10 rounded-xl border-2 border-solid border-gray-200 text-center text-3xl text-zinc-800 caret-transparent focus:border-primary focus:outline-none md:h-14 md:w-14"
                  />
                  <input
                    type="text"
                    value={otp[1] || ''}
                    onKeyDown={(e) => handleKeyDown(e, 1)}
                    onChange={(e) => e.preventDefault()}
                    maxLength={1}
                    ref={(input) => {
                      if (input) inputsRef.current[1] = input;
                    }}
                    className="font-circular h-10 w-10 rounded-xl border-2 border-solid border-gray-200 text-center text-3xl text-zinc-800 caret-transparent focus:border-primary focus:outline-none md:h-14 md:w-14"
                  />
                  <input
                    type="text"
                    value={otp[2] || ''}
                    onKeyDown={(e) => handleKeyDown(e, 2)}
                    onChange={(e) => e.preventDefault()}
                    maxLength={1}
                    ref={(input) => {
                      if (input) inputsRef.current[2] = input;
                    }}
                    className="font-circular h-10 w-10 rounded-xl border-2 border-solid border-gray-200 text-center text-3xl text-zinc-800 caret-transparent focus:border-primary focus:outline-none md:h-14 md:w-14"
                  />
                  <input
                    type="text"
                    value={otp[3] || ''}
                    onKeyDown={(e) => handleKeyDown(e, 3)}
                    onChange={(e) => e.preventDefault()}
                    maxLength={1}
                    ref={(input) => {
                      if (input) inputsRef.current[3] = input;
                    }}
                    className="font-circular h-10 w-10 rounded-xl border-2 border-solid border-gray-200 text-center text-3xl text-zinc-800 caret-transparent focus:border-primary focus:outline-none md:h-14 md:w-14"
                  />
                  <input
                    type="text"
                    value={otp[4] || ''}
                    onKeyDown={(e) => handleKeyDown(e, 4)}
                    onChange={(e) => e.preventDefault()}
                    maxLength={1}
                    ref={(input) => {
                      if (input) inputsRef.current[4] = input;
                    }}
                    className="font-circular h-10 w-10 rounded-xl border-2 border-solid border-gray-200 text-center text-3xl text-zinc-800 caret-transparent focus:border-primary focus:outline-none md:h-14 md:w-14"
                  />
                  <input
                    type="text"
                    value={otp[5] || ''}
                    onKeyDown={(e) => handleKeyDown(e, 5)}
                    onChange={(e) => e.preventDefault()}
                    maxLength={1}
                    ref={(input) => {
                      if (input) inputsRef.current[5] = input;
                    }}
                    className="font-circular h-10 w-10 rounded-xl border-2 border-solid border-gray-200 text-center text-3xl text-zinc-800 caret-transparent focus:border-primary focus:outline-none md:h-14 md:w-14"
                  />
                </div>
                <div className="mb-4">
                  <p className="font-kanit inline-block w-auto cursor-pointer justify-self-start underline hover:no-underline">
                    ส่งรหัสยืนยันใหม่
                  </p>
                </div>
                {/* <div className="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 accent-primary bg-gray-100 border-gray-300 rounded"
                    />
                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium">
                      Keep this device verified for 30 days
                    </label>
                  </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky bottom-2 col-span-8 mb-3 flex max-h-[720px] items-center justify-end border-0 border-t-[1px] border-zinc-200 bg-transparent px-6 py-0 md:m-0 md:border-solid md:bg-white md:px-14 md:py-8">
        <button
          className="font-kanit hover:bg-primaryDark right-0 m-0 inline-flex min-h-[3rem] w-full min-w-[150px] cursor-pointer appearance-none items-center justify-center rounded-xl border-0 bg-primary px-6 py-2 text-center text-base font-medium leading-normal tracking-wide text-white no-underline hover:text-white md:h-14 md:w-auto"
          type="submit"
          onClick={() => {
            otpSubmit();
            checkUserValid;
          }}>
          ยืนยัน
        </button>
      </div>
    </div>
  );
};

export default OTPForm;