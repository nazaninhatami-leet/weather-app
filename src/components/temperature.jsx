import { useContext } from 'react';
import { appContext } from '../App';
import { Icon } from './icon';

export const Temperature = () => {
  const { data } = useContext(appContext);

  return (
    <article className="detail temperature">
      <span className='temp'>{data ? <span>{data?.main?.temp}°F</span> : null}</span>
      <span className='icon'>
        <Icon />
      </span>
    </article>
  );
};
