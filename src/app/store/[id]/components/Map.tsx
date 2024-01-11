import Script from 'next/script';
import { useRef, useCallback } from 'react';

export default function Map() {
  const containerRef = useRef<HTMLDivElement>(null);

  const initializeMap = useCallback(() => {
    if (!containerRef.current) return;
    const center = new naver.maps.LatLng(37.3595704, 127.105399);
    const mapOptions = {
      center,
      zoom: 17,
    };
    const map = new naver.maps.Map(containerRef.current, mapOptions);

    new naver.maps.Marker({
      position: center,
      map: map,
    });
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVERMAP}`}
        onReady={initializeMap}
      />
      <div ref={containerRef} style={{ width: '100%', height: '300px' }}></div>
    </>
  );
}
