import { toast } from 'react-hot-toast';

const createToast = (promise: Promise<any>, loadingText?: string) => {
  const errorText = loadingText?.toLowerCase().replace('...', '');
  return toast.promise(
    promise,
    {
      loading: loadingText || 'Loading...',
      success: 'All done!',
      error: `Error ${errorText} 🫤`,
    },
    {
      position: 'bottom-center',
    }
  );
};

export default createToast;
