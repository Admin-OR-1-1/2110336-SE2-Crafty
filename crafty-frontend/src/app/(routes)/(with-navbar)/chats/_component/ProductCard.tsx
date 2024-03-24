import { ProductDetail } from '@/app/_common/interface/chat';
import { Button } from '@/app/_components/ui/input';
import { AiOutlineShoppingCart } from 'react-icons/ai';

interface ProductSidebarProps {
  //   productId: string | undefined;
  product: ProductDetail | null;
}

const ProductCard = ({ product }: ProductSidebarProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-9">
      <div className="flex flex-col items-center gap-4">
        <AiOutlineShoppingCart size={100} />
        <div className="text-2xl font-semibold">ยังไม่มีสินค้าในขณะนี้</div>
      </div>
      <div className="flex w-[200px]">
        <Button>สร้างสินค้า</Button>
      </div>
    </div>
  );
};

export default ProductCard;
