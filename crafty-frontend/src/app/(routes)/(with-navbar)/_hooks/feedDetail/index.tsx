import { Post } from '@/app/_common/interface/post';
import { apiClient } from '@/configs/axiosConfig';
import { useState, useEffect } from 'react';

const useFeedDetail = (feedId: string) => {
  const [post, setPost] = useState<Post>();

  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setInit(false);
        const response = await apiClient.get(`/posts/${feedId}`);
        if (response?.data) {
          setPost(response.data);
        }
        setInit(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return { post, init };
};

export default useFeedDetail;
