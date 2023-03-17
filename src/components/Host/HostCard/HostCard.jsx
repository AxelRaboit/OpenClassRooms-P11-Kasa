import style from './HostCard.module.scss';
import { HostTags } from '../HostTags';
import { HostRatings } from '../HostRatings';

export const HostCard = ({data}) => {
  return (
    <div className={style.hostContainer}>
      <div className={style.containerAccomodationInformation}>
        <div className={style.containerAccomodationInformationTitle}>
          <h1>{data.title}</h1>
          <h2>{data.location}</h2>
        </div>
        <HostTags tags={data.tags} />
      </div>
      <div className={style.ratingContainer}>
        <div className={style.profileContainer}>
          <span>{data.host.name}</span>
          <img src={data.host.picture} alt={data.host.name} />
        </div>
        <HostRatings rating={data.rating} />
      </div>
    </div>
  );
}
