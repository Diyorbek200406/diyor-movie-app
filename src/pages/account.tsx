import Head from 'next/head';

const Account = () => {
	return (
		<>
			<Head>
				<title>Diyorbek Movies | Your Account</title>
				<meta name='description' content='Configure Your Account' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/logo.svg' />
			</Head>
			<div className='account'>
				<h1>Account Page</h1>
			</div>
		</>
	);
};

export default Account;
