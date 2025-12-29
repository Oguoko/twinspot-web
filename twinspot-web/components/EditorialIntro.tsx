import Image from "next/image";

type EditorialIntroProps = {
  title: string;
  intro?: string;
  body?: string;
  image?: {
    src: string;
    alt?: string;
  };
};

export default function EditorialIntro({
  title,
  intro,
  body,
  image,
}: EditorialIntroProps) {
  return (
    <section className="editorialIntro">
      {image?.src && (
        <div className="editorialIntro-media">
          <Image
            src={image.src}
            alt={image.alt || title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}

      <div className="editorialIntro-content">
        <h2>{title}</h2>

        {intro && <p className="lede">{intro}</p>}

        {body && <p>{body}</p>}
      </div>
    </section>
  );
}
