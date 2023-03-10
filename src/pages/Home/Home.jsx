import homeBanner from '../../assets/images/home-banner.png';
import { Gallery, Banner } from '../../components';

export const Home = ({ data, loading, error }) => {
    console.log(data, loading, error)
    return (
        <>
            <Banner image={homeBanner} title="Chez vous, partout et ailleurs" />
            {loading && (
                <p>Chargement en cours</p>
            )}
            {error && (
                <p>Une erreur est survenue...</p>
            )}
            {data && !error && !loading && <Gallery data={data} />}
        </>
    );
}