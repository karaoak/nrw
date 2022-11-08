import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { wrapper } from '../store';
import React from 'react';
import { fetchAppData } from '../store/slices/generic/thunks';

interface PageProps {
    foo: string;
}

interface CustomAppProps extends Omit<AppProps, 'pageProps'> {
    pageProps: AppProps['pageProps'] & PageProps;
}

const App = ({ Component, ...rest }: CustomAppProps) => {
    // console.log('rest: ', JSON.stringify(rest, null, 4));
    console.log('_app');
    const { store, props } = wrapper.useWrappedStore(rest);
    // console.log('store in app: ', JSON.stringify(store.getState()));
    return (
        <Provider store={store}>
            <Component {...props.pageProps} />
        </Provider>
    );
};

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx }): Promise<CustomAppProps> => {
    console.log('---------------------------');
    console.log('_app:getInitialProps');

    await store.dispatch(fetchAppData());

    // @ts-ignore
    return {
        pageProps: {
            foo: 'bar',
        },
    };
});

export default App;
