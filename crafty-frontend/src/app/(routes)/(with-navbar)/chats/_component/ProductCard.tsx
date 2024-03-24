import { ProductDetail } from '@/app/_common/interface/chat';
import { Button, TextInput } from '@/app/_components/ui/input';
import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

interface ProductSidebarProps {
  //   productId: string | undefined;
  product: ProductDetail | null;
}

interface MyTextInputProps {
  label: string;
  placeholder: string;
  required: boolean;
  value: string;
  setText: (text: string) => void;
}

const MyTextInput = ({ label, placeholder, required, value, setText }: MyTextInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-sm">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </div>
      <TextInput
        className="border border-gray-500"
        placeholder={placeholder}
        borderNoneOnFocus={false}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};

const CreateProductForm = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');

  const textInputList = [
    {
      label: 'ชื่อสินค้า',
      placeholder: 'Example Product',
      required: true,
      value: title,
      setText: setTitle,
    },
    {
      label: 'URL รูปถ่ายสินค้า',
      placeholder: 'https://example.com/image.png',
      required: false,
      value: imageUrl,
      setText: setImageUrl,
    },
    {
      label: 'ราคาสินค้า (บาท)',
      placeholder: '1900',
      required: true,
      value: price,
      setText: setPrice,
    },
    {
      label: 'รายละเอียดสินค้า',
      placeholder: 'Product Description',
      required: true,
      value: desc,
      setText: setDesc,
    },
  ];
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="flex text-xl font-bold">สร้างสินค้า Custom</div>
      <div className="flex w-full flex-col gap-6 px-10">
        {textInputList.map((textInput) => (
          <MyTextInput key={textInput.label} {...textInput} />
        ))}
      </div>
      <div className="mt-4 w-[200px]">
        <Button>สร้างสินค้า</Button>
      </div>
    </div>
  );
};

const EmptyProductCard = () => {
  return CreateProductForm();
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <AiOutlineShoppingCart size={100} />
        <div className="text-2xl font-semibold">ยังไม่มีสินค้าในขณะนี้</div>
      </div>
      <div className="flex w-[200px]">
        <Button>สร้างสินค้า</Button>
      </div>
    </>
  );
};

const ProductCard = ({ product }: ProductSidebarProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-9">
      {!product && <EmptyProductCard />}
      {product && <pre>{JSON.stringify(product, null, 2)}</pre>}
    </div>
  );
};

export default ProductCard;
