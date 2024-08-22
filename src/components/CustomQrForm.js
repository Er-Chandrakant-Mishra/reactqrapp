import { useEffect, useState } from 'react';
import InputUrl from './InputUrl';
import InputPicker from './InputPicker';
import InputFileImage from './InputFileImage';


export default function CustomQrForm({ 
    qrRef, 
    url, 
    qrColor, 
    qrBgColor, 
    noImg, 
    setUrl, 
    setQrColor, 
    setQrBgColor, 
    setCustomImg, 
    setNoImg, 
    handleQrReset 
}) {
    const httpRgx = /^https?:\/\//;

    const [downloaded, setDownloaded] = useState(false);
    
    useEffect(() => {
        if(downloaded) {
            const msg = setTimeout(() => setDownloaded(false), 3500);
            return () => clearTimeout(msg);
        }
    }, [downloaded]);
    
    const handleQrCustom = color => setQrColor(color.hex);
    const handleQrBgCustom = color => setQrBgColor(color.hex);

    const downloadQrCode = e => {
        e.preventDefault();

        const qrCanvas = qrRef.current.querySelector('canvas');
        const qrImage = qrCanvas.toDataURL("image/png");
        const qrAnchor = document.createElement('a');
        const fileName = url.replace(httpRgx, '').trim();

        qrAnchor.href = qrImage;
        qrAnchor.download = fileName + '_QrCode.png';
        document.body.appendChild(qrAnchor);
        qrAnchor.click();
        document.body.removeChild(qrAnchor);
    
        handleQrReset();
        setDownloaded(true);
    }

    return (
        <form onSubmit={downloadQrCode}>
            <h1>Generate your Qr Code</h1>
            
            <InputUrl
                url={url}
                setUrl={setUrl}
                httpRgx={httpRgx}
            />

            <InputPicker
                label={'Qr color'}
                id={'qrColor'}
                customColor={qrColor}
                handleQrCustom={handleQrCustom}
            />

            <InputPicker
                label={'Background'}
                id={'qrBgColor'}
                customColor={qrBgColor}
                handleQrCustom={handleQrBgCustom}
            />
            
            <InputFileImage
                noImg={noImg}
                setNoImg={setNoImg}
                setCustomImg={setCustomImg}
            />

            <button type="submit">
                <span>Download now</span>
              
            </button>
            
            {downloaded && <p className="success-msg">Qr Code downloaded.</p>}
        </form>
    );
}
