import style from './banner.module.scss';

export const Banner = ({ image, title }) => {
    return (
        <div className={style.bannerContainer}>
            <div className={style.bannerImageContainer}>
                <img className={style.bannerImage} src={image} alt={title} />
            </div>
            {image && <h1 className={style.bannerTitle}>{title}</h1>}
        </div>
    )
}