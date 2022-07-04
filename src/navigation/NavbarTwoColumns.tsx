import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';

const NavbarTwoColumns = () => (
  <Background color="bg-retro-green">
    <div className="flex flex-wrap justify-between items-center">
      <div>
        {/*        <BrowserRouter>
          <Switch>
            <Route path="/">
              <History />
              <Button xl>{props.logo}</Button>
            </Route>
          </Switch>
</BrowserRouter> */}
        <Link href="/History">
          <a>
            <Button xl>History</Button>
          </a>
        </Link>
        <Link href="/Retirement">
          <a>
            <Button xl>Retirement</Button>
          </a>
        </Link>
        <Link href="/FormAUnion">
          <a>
            <Button xl>Form a Union</Button>
          </a>
        </Link>
        <Link href="/ContactAUnionOrganizer">
          <a>
            <Button xl>Contact a Union Organizer</Button>
          </a>
        </Link>
      </div>

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
