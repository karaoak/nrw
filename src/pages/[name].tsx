import React from 'react';
import { useSelector } from 'react-redux';
import { wrapper } from '../store';
import { fetchPageData } from '../store/slices/page/thunks';
import { selectPageFullName } from '../store/slices/page/selectors';
import { Navigation } from '../components/Navigation';
import { Header } from '../components/Header';

interface PageProps {
    name: string;
}

const Page = ({ name }: PageProps) => {
    console.log(`pages/[name]`);
    const pageFullName = useSelector(selectPageFullName);

    return (
        <div>
            <Header />
            <h1>{pageFullName} Page</h1>
            <Navigation />
        </div>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
    console.log(`pages/[name]:getServerSideProps`);

    // @ts-ignore
    const { name } = ctx.params;

    await store.dispatch(fetchPageData(name));

    return {
        props: {
            name,
        },
    };
});

export default Page;
