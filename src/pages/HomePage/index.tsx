import * as React from 'react';
import HeaderHomePage from '../../components/Header';

export interface IHomePageProps {
}

export default function HomePage (props: IHomePageProps) {
  return (
    <div>
      <HeaderHomePage></HeaderHomePage>
      <h1>HomePage</h1>
    </div>
  );
}
