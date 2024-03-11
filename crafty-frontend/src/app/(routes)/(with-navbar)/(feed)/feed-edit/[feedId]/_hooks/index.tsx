import { apiClient } from '@/configs/axiosConfig';
import { PostForm } from '../types';

const editFeedHook = (feedId: string) => {
  const updateFeedByForm = (feedForm: PostForm) => {
    //api
    // apiClient.
  };

  return {
    updateFeedByForm,
  };
};

export default editFeedHook;
