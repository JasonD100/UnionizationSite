import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const SectionHome = (props: ISectionProps) => (
  <div
    className={`max-w-screen-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl text-retro-black font-bold">{props.title}</h2>
        )}
        {props.description && (
          <div className="text-2xl mt-4 text-retro-black md:px-20">
            {props.description}
          </div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { SectionHome };
