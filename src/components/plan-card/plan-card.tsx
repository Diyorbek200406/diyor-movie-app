import { FcVip } from 'react-icons/fc';
import { PlanCardProps } from './plan-card-props';
import { AiOutlineHourglass, AiOutlineVideoCameraAdd } from 'react-icons/ai';

const PlanCard = ({ product }: PlanCardProps) => {
	return (
		<div className='max-w-sm cursor-pointer bg-white/20 px-6 pt-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500'>
			<h3 className='mb-3 text-xl font-bold text-[#e10856]'>{product.name}</h3>
			<div className='relative'>
				{/* eslint-disable-next-line */}
				<img
					src={product.images[0]}
					alt='Colors'
					className='rounded-xl w-full h-52'
				/>
				<p className='absolute top-0 bg-black/90 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg'>
					${product.default_price.unit_amount}
				</p>
				<div className='absolute rounded-xl left-0 right-0 bottom-0 top-0 bg-black/20 w-full h-full' />
			</div>

			<div className='border-[1px] border-white/20 mt-4' />

			<button className='mt-4 w-full py-4 bg-[#e10856] hover:opacity-70 rounded cursor-pointer font-semibold'>
				BUY PLAN
			</button>

			<div className='my-4 flex flex-col space-y-2'>
				{product.metadata.adv.split(', ').map((plan, i) => {
					return (
						<div key={i} className='flex space-x-2 items-center'>
							{i == 0 && <FcVip className='w-6 h-6' />}
							{i == 1 && <AiOutlineHourglass className='w-6 h-6' />}
							{i == 2 && <AiOutlineVideoCameraAdd className='w-6 h-6' />}
							<p>{plan}.</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PlanCard;
