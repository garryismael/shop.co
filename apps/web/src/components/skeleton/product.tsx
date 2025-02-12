type Props = {
  className?: string;
};
const ProductDetailSkeleton = ({ className = "" }: Props) => {
  return (
    <div className={`${className}`}>
      <div className={`pb-5 animate-pulse`}>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <div className="h-4 w-16 bg-gray-300 rounded"></div>
            </li>
            <li>
              <div className="h-4 w-2 bg-gray-300 rounded-full"></div>
            </li>
            <li>
              <div className="h-4 w-16 bg-gray-300 rounded"></div>
            </li>
            <li>
              <div className="h-4 w-2 bg-gray-300 rounded-full"></div>
            </li>
            <li>
              <div className="h-4 w-12 bg-gray-300 rounded"></div>
            </li>
            <li>
              <div className="h-4 w-2 bg-gray-300 rounded-full"></div>
            </li>
            <li>
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="grid grid-cols-1 gap-y-3 animate-pulse">
        <div className="bg-gray-300 rounded-[20px] overflow-hidden">
          <div className="relative h-full min-h-72 max-h-72 bg-gray-300" />
        </div>
        <div className="flex items-center gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-300 rounded-[20px] overflow-hidden w-28 h-24">
              <div className="relative w-full h-full bg-gray-300" />
            </div>
          ))}
        </div>
      </div>
      <div className="animate-pulse">
        <div className="pt-5">
          <div className="h-8 w-1/2 bg-gray-300 rounded"></div>
        </div>
        <div className="pt-3">
          <div className="flex items-center gap-2">
            {/* Simuler les étoiles */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="h-4 w-4 bg-gray-300 rounded"></div>
              ))}
            </div>
            {/* Valeur numérique du rating */}
            <div className="h-4 w-10 bg-gray-300 rounded"></div>
          </div>
        </div>

        <div className="pt-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-20 bg-gray-300 rounded"></div>
            <div className="h-6 w-12 bg-gray-300 rounded"></div>
          </div>
        </div>

        <div className="pt-5 pb-6 border-b border-black/10">
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
            <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
          </div>
        </div>

        <div className="pt-6 pb-6 border-b border-black/10">
          <div className="h-4 w-1/4 bg-gray-300 rounded mb-4"></div>
          <div className="flex items-center gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-10 w-10 bg-gray-300 rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="pt-6 pb-6 border-b border-black/10">
          <div className="h-4 w-1/4 bg-gray-300 rounded mb-4"></div>
          <div className="flex items-center gap-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-8 w-16 bg-gray-300 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
