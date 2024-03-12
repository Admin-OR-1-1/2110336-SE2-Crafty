import { Post } from '@/app/_common/interface/post';
import { apiClient } from '@/configs/axiosConfig';
import { useState, useEffect } from 'react';

const useFeedList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setInit(false);
        const response = await apiClient.get('/posts');
        if (response?.data && response?.data?.length > 0) {
          setPosts(response.data);
        }
        setInit(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return { posts, init };
};

export default useFeedList;
