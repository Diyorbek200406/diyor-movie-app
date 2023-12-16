import ReactStars from "react-stars";
import { ThumbnailProps } from "./thumbnail.props";
import Image from "next/image";
import { useInfoStore } from "src/store";
import { image_base } from "src/helpers/constants";
const Thumbnail = ({ movie, isBig = false }: ThumbnailProps) => {
  const { setModel, setCurrentMovie } = useInfoStore();
  const handleCurrentMovie = () => {
    setModel(true);
    setCurrentMovie(movie);
  };
  return (
    <div
      onClick={handleCurrentMovie}
      className={`relative ${isBig ? "h-[400px] md:h-[550px] min-w-[350px] md:min-w-[470px]" : "h-[330px] md:h-[440px] min-w-[200px] md:min-w-[292px]"} cursor-pointer md:hover:scale-110 transition ease-out  duration-300`}
    >
      <Image className="object-cover rounded-sm md:rounded" src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`} alt={`${movie?.title}`} fill />
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-black/40" />
      <div className="absolute bottom-5 left-4 right-2">
        <div className="flex items-center space-x-2">
          <ReactStars edit={false} count={10} value={movie?.vote_average} color2={"#fff"} />
          <p>({movie?.vote_count})</p>
        </div>
        <h1 className="text-xl font-bold md:text-2xl">{movie?.title || movie?.name || movie?.original_name}</h1>
      </div>
    </div>
  );
};
export default Thumbnail;
