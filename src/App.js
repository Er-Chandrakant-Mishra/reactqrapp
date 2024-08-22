import { useRef, useState } from 'react';
import ThemeBtn from './components/ThemeBtn';
import CustomQrForm from './components/CustomQrForm';
import QrCard from './components/QrCard';

export default function App() {
	const qrRef = useRef(null);

	const [url, setUrl] = useState('');
	const [qrColor, setQrColor] = useState('#ffffff');
	const [qrBgColor, setQrBgColor] = useState('#2c7dfa');
	const [customImg, setCustomImg] = useState('');
	const [noImg, setNoImg] = useState(false);
	
	const handleQrReset = () => {
		setUrl('');
		setQrColor('#ffffff');
		setQrBgColor('#2c7dfa');
		setCustomImg('');
		setNoImg(false);
	}

	return (
		<>
			<header>
				<ThemeBtn />
			</header>

			<main>
				<CustomQrForm
					qrRef={qrRef}
					url={url}
					qrColor={qrColor}
					qrBgColor={qrBgColor}
					noImg={noImg}
					setUrl={setUrl}
					setQrColor={setQrColor}
					setQrBgColor={setQrBgColor}
					setCustomImg={setCustomImg}
					setNoImg={setNoImg}
					handleQrReset={handleQrReset}
				/>

				<QrCard
					qrRef={qrRef}
					url={url}
					qrColor={qrColor}
					bgColor={qrBgColor}
					customImg={customImg}
					noImg={noImg}
				/>
			</main>
		</>
	);
}
