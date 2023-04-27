import { ErrorPage, Header } from '@/components';


export const Page404 = () => {

	return (
		<>
			<Header />
			<ErrorPage title="Oops, that page doesn't seem to exist" caption='Please check URL' />
		</>
	)
};
