import { ProductDetail } from '@/app/_common/interface/chat';
import { Button, TextInput } from '@/app/_components/ui/input';
import { apiService } from '@/configs/apiService/apiService';
import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ProductSidebarProps } from './ProductSidebar';

interface MyTextInputProps {
  label: string;
  placeholder: string;
  required: boolean;
  value: string;
  setText: (text: string) => void;
}

interface ChatroomIdProps {
  chatroomId: string;
}

export interface NonEmptyProductSidebarProps {
  product: ProductDetail;
  chatroomId: string;
}

const MyTextInput = ({ label, placeholder, required, value, setText }: MyTextInputProps) => {
  return (
    <>
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
            if (label === 'ราคาสินค้า (บาท)') {
              // only accept numeric value
              const numericValue = e.target.value.replace(/\D/g, '');
              setText(numericValue);
              e.target.value = numericValue;
            }
            setText(e.target.value);
          }}
        />
      </div>
    </>
  );
};

const CreateProductForm = ({ chatroomId }: ChatroomIdProps) => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');

  const createNewProduct = async () => {
    // loop through textInputList
    for (const textInput of textInputList) {
      if (textInput.required && !textInput.value) {
        alert('Please fill in all required fields');
        return;
      }
    }

    try {
      const product = await apiService.createNewProduct({
        title,
        imageUrl,
        price: parseInt(price),
        desc,
        chatroomId,
      });
      console.log(product);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

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
        <Button onClick={createNewProduct}>สร้างสินค้า</Button>
      </div>
    </div>
  );
};

const EmptyProductCard = ({ chatroomId }: ChatroomIdProps) => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateProduct = () => {
    setShowCreateForm(true);
  };

  return (
    <>
      {showCreateForm ? (
        <CreateProductForm chatroomId={chatroomId} />
      ) : (
        <div className="flex flex-col items-center gap-4">
          <AiOutlineShoppingCart size={100} />
          <div className="text-2xl font-semibold">ยังไม่มีสินค้าในขณะนี้</div>
          <div className="flex w-[200px]">
            <Button onClick={handleCreateProduct}>สร้างสินค้า</Button>
          </div>
        </div>
      )}
    </>
  );
};

const RealProductCard = ({ product, chatroomId }: NonEmptyProductSidebarProps) => {
  const deleteProduct = async () => {
    // display confirmation dialog
    const confirmDelete = confirm('Are you sure you want to cancel this product?');
    if (!confirmDelete) return;

    try {
      await apiService.deleteProduct(product.id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-xl font-bold">{product.title}</div>
      <div className="flex flex-col items-center gap-2">
        {product.imageUrl && (
          <img
            src={product.imageUrl}
            alt="product"
            className="h-[200px] w-[200px] rounded-md object-cover"
          />
        )}
        <div className="text-lg">{product.desc}</div>
        <div className="text-lg">{product.price} บาท</div>
      </div>
      <Button className="rounded-xl bg-red-500 hover:bg-red-700" onClick={deleteProduct}>
        Cancel this product
      </Button>
    </div>
  );
};

const ProductCard = ({ product, chatroomId }: ProductSidebarProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-9">
      {!product && <EmptyProductCard chatroomId={chatroomId} />}
      {product && <RealProductCard product={product} chatroomId={chatroomId} />}
    </div>
  );
};

export default ProductCard;
