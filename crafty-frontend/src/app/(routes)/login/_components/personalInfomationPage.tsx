import React, { FC, use, useEffect, useState } from 'react';
import { Button, TextInput } from '@/app/_components/ui/input';
import { useFirebaseAuthContext } from '@/contexts/firebaseAuthContext';

const PersonalInfomationPage: FC = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [road, setRoad] = useState<string>('');
  const [subDistrict, setSubDistrict] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [province, setProvince] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');

  const [canEditPhone, setCanEditPhone] = useState<boolean>(true);

  const { user } = useFirebaseAuthContext();

  useEffect(() => {
    if (!user) return;

    if (user.phoneNumber) {
      setPhone('0' + user.phoneNumber.slice(3));
      setCanEditPhone(false);
    }
  }, [user]);

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (canEditPhone) {
      setPhone(e.target.value);
    }
  };

  const addressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const roadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoad(e.target.value);
  };

  const subDistrictHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubDistrict(e.target.value);
  };

  const districtHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDistrict(e.target.value);
  };

  const provinceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProvince(e.target.value);
  };

  const postalCodeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostalCode(e.target.value);
  };

  const isDisabled = () => {
    return (
      name === '' ||
      phone === '' ||
      address === '' ||
      road === '' ||
      subDistrict === '' ||
      district === '' ||
      province === '' ||
      postalCode === ''
    );
  };

  return (
    <div className="flex w-[400px] flex-col items-center justify-center gap-y-6">
      <p className="text-center text-4xl font-bold text-ct_brown-500">กรอกข้อมูลส่วนตัว</p>

      <div className="grid w-full grid-cols-12 gap-2">
        <div className="col-span-12">
          <TextInput value={name} name={'name'} onChange={nameHandler} placeholder={'ชื่อผู้ใช้'} />
        </div>

        <div className="col-span-12">
          <TextInput
            type="tel"
            name={'tel'}
            value={phone}
            onChange={phoneHandler}
            placeholder={'เบอร์โทรศัพท์'}
            disabled={!canEditPhone}
          />
        </div>

        <div className="col-span-12">
          <TextInput
            value={address}
            name={'address'}
            onChange={addressHandler}
            placeholder={'ที่อยู่'}
            autoComplete={'address-line1'}
          />
        </div>

        <div className="col-span-12">
          <TextInput value={road} name={'road'} onChange={roadHandler} placeholder={'ถนน'} />
        </div>

        <div className="col-span-6">
          <TextInput
            value={subDistrict}
            name={'suburb'}
            onChange={subDistrictHandler}
            placeholder={'ตำบล'}
            autoComplete={'address-line2'}
          />
        </div>

        <div className="col-span-6">
          <TextInput
            value={district}
            name={'city'}
            onChange={districtHandler}
            placeholder={'อำเภอ'}
            // autoComplete={'address-line3'}
          />
        </div>

        <div className="col-span-6">
          <TextInput
            value={province}
            name={'province'}
            onChange={provinceHandler}
            placeholder={'จังหวัด'}
          />
        </div>

        <div className="col-span-6">
          <TextInput
            value={postalCode}
            name={'postalCode'}
            onChange={postalCodeHandler}
            placeholder={'รหัสไปรษณีย์'}
          />
        </div>
      </div>

      <Button disabled={isDisabled()}>ต่อไป</Button>
    </div>
  );
};

export default PersonalInfomationPage;
