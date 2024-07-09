import { useParams } from 'react-router-dom';
import Product from '../productFolder/Product';
import { useEffect, useState } from 'react';

const PdDetails = () => {
    const { productKey } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                const foundProduct = data.find(item => item.key === productKey);
                setProduct(foundProduct);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [productKey]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <Product showAddToCart={false} productDetails={product} />
        </div>
    );
};

export default PdDetails;
