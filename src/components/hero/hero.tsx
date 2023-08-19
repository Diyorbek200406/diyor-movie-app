import { IMovie } from 'src/interfaces/app.interface';
import { HeroProps } from './hero.props';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { image_base } from '../helpers/constants';
import { TbPlayerPlay } from 'react-icons/tb';
import ReactStars from 'react-stars';
import { useInfoStore } from 'src/store';

const Hero = ({ trending }: HeroProps): JSX.Element => {
	const { setModel, setCurrentMovie } = useInfoStore();
	const [movie, setMovie] = useState<IMovie>({} as IMovie);

	// useEffect
	useEffect(() => {
		const randomMovie = trending[Math.floor(Math.random() * trending.length)];

		setMovie(randomMovie);
	}, [trending]);

	const handleCurrentMovie = () => {
		setModel(true);
		setCurrentMovie(movie);
	};

	// return
	return (
		<div className='flex flex-col space-y-2 py-20 md:space-y-4 lg:h-[65vh] lg:pb-12 lg:justify-center'>
			<div className='absolute top-0 left-0 h-[95vh] w-full -z-10'>
				<Image
					className='object-cover'
					src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
					alt={`${movie?.title}`}
					fill
				/>
			</div>

			<div className='py-[4px] px-[8px] bg-[#e5e5e5]/50 w-[111px] text-center rounded-bl-[8px] rounded-tr-[8px]'>
				{movie?.media_type}
			</div>

			<div className='flex items-center space-x-2'>
				<ReactStars
					edit={false}
					count={10}
					value={movie?.vote_average}
					color2={'#fff'}
				/>

				<p>({movie?.vote_count})</p>
			</div>

			<h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
				{movie?.title || movie?.name || movie?.original_name}
			</h1>

			<p className='max-w-xs md:max-w-lg lg:max-w-2xl text-xs text-shadow-md md:text-lg lg:text-2xl'>
				{movie?.overview?.slice(0, 100)}...
			</p>

			<div>
				<button
					onClick={handleCurrentMovie}
					className='bg-white/60 hover:bg-white/80 flex justify-center space-x-2 items-center font-bold text-black  w-[200px] h-[56px] rounded-full'
				>
					<TbPlayerPlay className='h-5 w-5 md:h-6 md:w-6' /> Watch Now
				</button>
			</div>
		</div>
	);
};

export default Hero;
