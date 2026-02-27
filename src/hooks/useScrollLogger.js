{
  /*import { useEffect } from 'react';
import { logUserEvent } from './UserLogEvent';

const useScrollLogger = (screen_name) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollDepthPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      logUserEvent('ui_scroll', 'engagement', {
        screen_name,
        scroll_depth_percent: scrollDepthPercent,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [screen_name]);
};

export default useScrollLogger;*/
}
