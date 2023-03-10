import { Banner } from '../components';
import homeBanner from '../assets/images/home-banner.png';

export const Home = ({ data, loading, error }) => {
    return (
        <Banner image={homeBanner} title="Chez vous, partout et ailleurs" />
    );
}