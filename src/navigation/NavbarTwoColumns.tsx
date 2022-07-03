import { ReactNode } from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';

type INavbarProps = {
  logo: ReactNode;
  logo1: ReactNode;
  logo2: ReactNode;
  logo3: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <Background color="bg-retro-green">
    <div className="flex flex-wrap justify-between items-center">
      <div>
        <Link href="/">
          <a>
            <Button xl>{props.logo}</Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button xl>{props.logo1}</Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button xl>{props.logo2}</Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button xl>{props.logo3}</Button>
          </a>
        </Link>
      </div>

      <nav>
        <ul className="navbar flex items-center font-medium text-xl text-retro-tan">
          {props.children}
        </ul>
      </nav>

      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }

          .navbar :global(li:not(:last-child)) {
            @apply mr-5;
          }
        `}
      </style>
    </div>
  </Background>
);

export { NavbarTwoColumns };
