import { useCallback, useMemo, useState } from 'react';
import { BoxesEmpty } from './common/BoxesEmpty';
import { SelectedButton } from './common/SelectedButton';
import { ThxLayout } from './common/ThxLayout';
import { Variant } from './common/types';
import { Boxes } from './variant-1/Boxes';
import { BoxesOfSwiper } from './variant-2-3/BoxesOfSwiper';
import { BoxesOfTV } from './variant-4/BoxesOfTV';
import { BoxesGrid } from './variant-5/BoxesGrid';

export const App = () => {
  const [thxShow, setThx] = useState(false);
  const [variant, setVariant] = useState<Variant | 'none'>('none');

  const showThx = useCallback(() => {
    setThx(true);
  }, []);

  const renderBox = useMemo(() => {
    switch (variant) {
      case 'compact':
        return <Boxes />;
      case 'detailed':
        return <BoxesOfSwiper />;
      case 'big':
        return <BoxesOfTV />;
      case 'grid':
        return <BoxesGrid />;

      default:
        return <BoxesEmpty />;
    }
  }, [variant]);

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <div className="relative">
      <h1 className="text-lg font-medium pt-5 px-5 pb-3 text-black">Выберите вид категорий кэшбэка</h1>

      {renderBox}

      <SelectedButton setVariant={setVariant} showThx={showThx} variant={variant} />
    </div>
  );
};
