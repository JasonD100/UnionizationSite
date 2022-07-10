import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButtonPages = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-5xl text-retro-black font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl text-retro-black mt-4 mb-16">
      {props.description}
    </div>

    {props.button}
  </header>
);

export { HeroOneButtonPages };
