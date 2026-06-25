import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative h-[420px] w-full lg:h-[520px]">
      <Image
        src="/hero-image.png"
        alt="Zakeri Labs – AI Website Growth Infrastructure"
        fill
        priority
        className="object-contain object-center drop-shadow-2xl"
      />
    </div>
  );
}
