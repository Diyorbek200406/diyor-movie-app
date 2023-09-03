import { useAuth } from 'src/hooks/useAuth';
import { FcVip } from 'react-icons/fc';
import { AiOutlineHourglass, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import Image from 'next/image';
import { subscriptionPlanProps } from './subscription-plan-props';
import PlanCard from '../plan-card/plan-card';

const SubscriptionPlan = ({ products }: subscriptionPlanProps) => {
	const { logOut } = useAuth();
	return (
		<div className='min-h-screen'>
			<div className='border-b-2 border-gray-300/50 h-[10vh] flex items-center justify-between px-4 md:px-10'>
				<Image
					src='/logo.svg'
					alt='logo'
					width={56}
					height={56}
					priority
					className='cursor-pointer object-contain'
				/>
				<div className='cursor-pointer hover:underline' onClick={logOut}>
					Logout
				</div>
			</div>

			<div className='flex flex-col space-y-2 text-center pt-5'>
				<h1 className='text-2xl md:text-5xl text-shadow-sm'>
					Flexible pricing for teams of any size.
				</h1>

				<p className='text-xl text-shadow'>
					Relaxing with watchin your favourite movies and tv.
				</p>
			</div>

			<div className='flex justify-center items-center py-20'>
				<div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-4 md:space-y-0'>
					{/* card plan */}
					{products
						.map(product => <PlanCard key={product.id} product={product} />)
						.reverse()}
				</div>
			</div>
		</div>
	);
};

export default SubscriptionPlan;
