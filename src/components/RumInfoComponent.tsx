import Image from "next/image";
import { BottleWine, Droplet, GlassWater } from "lucide-react";

const ICON_BOX_HEIGHT = 40; // px, enough for all icons/images

type RumInfoComponentProps = {
  bottleSize?: string;      // e.g. "1.0L"
  degree?: string;          // e.g. "50°"
  color?: string;           // e.g. "Blanc"
  origin?: "Martinique" | "Réunion" | "레위니옹" | "마르티니크";
};

const ORIGIN_IMAGES: Record<"Martinique" | "Réunion" | "레위니옹" | "마르티니크", { src: string; alt: string }> = {
  Martinique: { src: "/martinique.webp", alt: "Martinique" },
  Réunion: { src: "/reunion.png", alt: "Réunion" },
  "레위니옹": { src: "/reunion.png", alt: "레위니옹" },
  "마르티니크": { src: "/martinique.webp", alt: "마르티니크" },
};

const RumInfoComponent = ({
  bottleSize,
  degree,
  color,
  origin,
}: RumInfoComponentProps) => {
  // Only push to columns if the value is present
  const columns: {
    key: string;
    content: React.ReactNode;
    className: string;
  }[] = [];

  if (bottleSize) {
    columns.push({
      key: "bottle",
      content: (
        <>
          <div
            className="mb-2 flex items-center justify-center"
            style={{ height: ICON_BOX_HEIGHT, minHeight: ICON_BOX_HEIGHT }}
          >
            <BottleWine size={32} className="text-red-400" strokeWidth={1} />
          </div>
          <div className="text-sm sm:text-base font-semibold text-gray-900">{bottleSize}</div>
        </>
      ),
      className: "flex-1",
    });
  }

  if (degree) {
    columns.push({
      key: "degree",
      content: (
        <>
          <div
            className="mb-2 flex items-center justify-center"
            style={{ height: ICON_BOX_HEIGHT, minHeight: ICON_BOX_HEIGHT }}
          >
            <GlassWater size={24} className="text-red-400" strokeWidth={1.2} />
          </div>
          <div className="text-sm sm:text-base font-semibold text-gray-900">{degree}</div>
        </>
      ),
      className: "flex-1",
    });
  }

  if (color) {
    columns.push({
      key: "color",
      content: (
        <>
          <div
            className="mb-2 flex items-center justify-center"
            style={{ height: ICON_BOX_HEIGHT, minHeight: ICON_BOX_HEIGHT }}
          >
            <Droplet size={24} className="text-red-400" strokeWidth={1.2} />
          </div>
          <div className="text-sm sm:text-base font-semibold text-gray-900">{color}</div>
        </>
      ),
      className: "flex-1",
    });
  }

  if (origin && ORIGIN_IMAGES[origin]) {
    columns.push({
      key: "origin",
      content: (
        <>
          <div
            className="mb-2 flex items-center justify-center"
            style={{ height: ICON_BOX_HEIGHT, minHeight: ICON_BOX_HEIGHT }}
          >
            <Image
               src={ORIGIN_IMAGES[origin].src}
               alt={ORIGIN_IMAGES[origin].alt}
               width={36}
               height={32}
               className="rounded object-contain"
             />
          </div>
          <div className="text-sm sm:text-base font-semibold text-gray-900">{origin}</div>
        </>
      ),
      className: "flex-[1.3]",
    });
  }

  if (columns.length === 0) return null;

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        {columns.map((col) => (
          <div
            key={col.key}
            className={`${col.className} flex flex-col items-center text-center min-w-0`}
          >
            {col.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RumInfoComponent;