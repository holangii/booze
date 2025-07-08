import Image from "next/image";
import { BottleWine, Droplet, GlassWater } from "lucide-react";

const ICON_BOX_HEIGHT = 40; // px, enough for all icons/images

const RumInfoComponent = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        {/* Bottle */}
        <div className="flex-1 flex flex-col items-center text-center min-w-0">
          <div
            className="mb-2 flex items-center justify-center"
            style={{ height: ICON_BOX_HEIGHT, minHeight: ICON_BOX_HEIGHT }}
          >
            <BottleWine size={32} className="text-red-400" strokeWidth={1} />
          </div>
          <div className="text-sm sm:text-base font-semibold text-gray-900">1.0L</div>
        </div>


        {/* Glass */}
        <div className="flex-1 flex flex-col items-center text-center min-w-0">
          <div
            className="mb-2 flex items-center justify-center"
            style={{ height: ICON_BOX_HEIGHT, minHeight: ICON_BOX_HEIGHT }}
          >
            <GlassWater size={24} className="text-red-400" strokeWidth={1.2} />
          </div>
          <div className="text-sm sm:text-base font-semibold text-gray-900">50°</div>
        </div>


        {/* Droplet */}
        <div className="flex-1 flex flex-col items-center text-center min-w-0">
          <div
            className="mb-2 flex items-center justify-center"
            style={{ height: ICON_BOX_HEIGHT, minHeight: ICON_BOX_HEIGHT }}
          >
            <Droplet size={24} className="text-red-400" strokeWidth={1.2} />
          </div>
          <div className="text-sm sm:text-base font-semibold text-gray-900">Blanc</div>
        </div>


        {/* Image */}
        <div className="flex-[1.3] flex flex-col items-center text-center min-w-0">
          <div
            className="mb-2 flex items-center justify-center"
            style={{ height: ICON_BOX_HEIGHT, minHeight: ICON_BOX_HEIGHT }}
          >
            <Image
              src="/martinique.webp"
              alt="Martinique"
              width={38}
              height={32}
              className="rounded object-cover"
              style={{ maxWidth: 38, maxHeight: 32 }}
            />
          </div>
          <div className="text-sm sm:text-base font-semibold text-gray-900">Martinique</div>
        </div>
      </div>
    </div>
  );
};

export default RumInfoComponent;