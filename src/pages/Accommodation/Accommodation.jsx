import style from './accommodation.module.scss';
import { HostCard, Dropdown, Carousel } from '../../components';

export const Accommodation = ({ data }) => {

    const equipmentsFormatedData = data.equipments.map((equipment) => <li key={equipment}>{equipment}</li>);

    return (
        <>
            <Carousel data={data} />
            <HostCard data={data} />
            <div className={style.containerDropdowns}>
                <Dropdown
                    title="Description"
                    content={data.description}
                    className={style.containerWrapDropdown}
                />
                <Dropdown
                    title="Equipments"
                    content={equipmentsFormatedData}
                    className={style.containerWrapDropdown}
                />
            </div>
        </>
    );
}