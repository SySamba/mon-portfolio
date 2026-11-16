import Image from "next/image";
import ProjectCover from "@/components/ProjectCover";

type Props = {
  image?: string;
  title: string;
  projectId: string;
  sizes: string;
};

/** Capture présentée dans l'écran d'un laptop, façon mockup d'agence. */
export default function LaptopMock({ image, title, projectId, sizes }: Props) {
  return (
    <div className="laptop-scene">
      <div className="laptop">
        <div className="laptop-screen">
          <span className="laptop-cam" aria-hidden="true" />
          <div className="laptop-view">
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
                sizes={sizes}
              />
            ) : (
              <ProjectCover id={projectId} title={title} />
            )}
          </div>
        </div>
        <div className="laptop-base">
          <span className="laptop-notch" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
