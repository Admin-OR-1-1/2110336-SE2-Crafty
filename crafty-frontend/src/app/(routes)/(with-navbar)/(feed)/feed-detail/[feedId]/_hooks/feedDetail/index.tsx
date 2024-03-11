import { Post } from '@/app/_common/interface/post';
import { apiClient } from '@/configs/axiosConfig';
import { useFirebaseAuthContext } from '@/contexts/firebaseAuthContext';
import { useState, useEffect } from 'react';

const useFeedDetail = (feedId: string) => {
  const user = useFirebaseAuthContext();

  const [posts, setPosts] = useState<Post[]>([]);

  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setInit(false);
        const response = await apiClient.get('/post/list');
        if (response?.data?.post && response?.data?.post.length > 0) {
          setPosts(response.data.post);
        }
        setInit(true);
      } catch (error) {
        console.log(error);
      }
    };

    if (user) fetchPosts();
  }, [user]);

  return { post: posts.find((post) => post.ID === feedId), init };
};

export default useFeedDetail;
