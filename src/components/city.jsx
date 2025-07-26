import { useContext } from 'react';
import { appContext } from '../App';

export const City = () => {
  const { data } = useContext(appContext);

  return (
    <article className="detail city">
      <span>{data ? data?.name : 'city'}</span>
    </article>
  );
};
