import { image_base } from '../helpers/constants';
import { ThumbnailProps } from './thumbnail.props';
import Image from 'next/image';

const Thumbnail = ({ movie }: ThumbnailProps) => {
	return (
		<div className='relative h-[330px] md:h-[440px] min-w-[200px] md:min-w-[292px] cursor-pointer md:hover:scale-110 transition ease-out  duration-300'>
			<Image
				className='object-cover rounded-sm md:rounded'
				src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
				alt={`${movie?.title}`}
				fill
			/>
		</div>
	);
};

export default Thumbnail;
