import MuiModal from '@mui/material/Modal';
import { useInfoStore } from 'src/store';
import { FaTimes } from 'react-icons/fa';
const Modal = () => {
	const { modal, setModel, currentMovie } = useInfoStore();

	const handleClose = () => {
		setModel(false);
	};

	console.log(currentMovie);

	return (
		<MuiModal open={modal} onClose={handleClose}>
			<>
				<button
					onClick={() => setModel(false)}
					className='modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818]'
				>
					<FaTimes />
				</button>
			</>
		</MuiModal>
	);
};

export default Modal;
