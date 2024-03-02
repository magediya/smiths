import type { ReactNode } from 'react';

import { Maven_Pro} from 'next/font/google'

const lato = Maven_Pro({
  subsets: ['latin']
});

import Header from './_header';
import Footer from './_footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className={`${lato.className} flex flex-col h-full `}>
      {props.meta}
      <Header />
      <main >{props.children}</main>
      <Footer />
    </div>
  );
};

export { Main };
