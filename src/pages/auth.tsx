import Head from 'next/head';

const Auth = () => {
	return (
		<>
			<Head>
				<title>Diyorbek Movies | Auth</title>
				<meta
					name='description'
					content='For watching movies you should sign to app'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/logo.svg' />
			</Head>
			<div className='auth'>Auth</div>
		</>
	);
};

export default Auth;
