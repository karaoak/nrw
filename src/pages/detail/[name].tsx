import React from 'react';
import { useSelector } from 'react-redux';
import { wrapper } from '../../store';
import { fetchDetailData } from '../../store/slices/detail/thunks';
import { selectDetailFullName } from '../../store/slices/detail/selectors';
import { Navigation } from '../../components/Navigation';
import { Header } from '../../components/Header';

interface PageProps {
    name: string;
}

const Page = ({ name }: PageProps) => {
    console.log(`datail/[name]`);
    const pageFullName = useSelector(selectDetailFullName);

    return (
        <div>
            <Header />
            <h1>{pageFullName} Page</h1>
            <Navigation />
        </div>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
    console.log(`detail/[name]:getServerSideProps`);

    // @ts-ignore
    const { name } = ctx.params;

    await store.dispatch(fetchDetailData(name));

    return {
        props: {
            name,
        },
    };
});

export default Page;
