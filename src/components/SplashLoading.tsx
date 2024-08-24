'use client';

import { useEffect} from 'react';

export default function ServiceWorker() {
  useEffect(() => {
    document.querySelector('.splash-loading')?.classList.add('splash-bye');

    setTimeout(()=> {
      document.querySelector('.splash-loading')?.setAttribute('hidden', 'true');
    }, 500);
  }, []);

  return (
    <div className="splash-loading" />
  );
}
