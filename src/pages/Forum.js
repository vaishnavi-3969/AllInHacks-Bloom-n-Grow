import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../components/Firebase';

const Forum = () => {
    const { isAuthenticated, user, loginWithRedirect } = useAuth0();
    const [posts, setPosts] = useState([]);
    const [newPostContent, setNewPostContent] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            const postsCollection = collection(db, 'posts');
            const postsSnapshot = await getDocs(postsCollection);
            const postsData = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setPosts(postsData);
        };

        fetchPosts();
    }, []);

    const handlePostSubmit = async () => {
        try {
            if (!isAuthenticated) {
                loginWithRedirect();
                return;
            }
            
            const docRef = await addDoc(collection(db, 'posts'), {
                content: newPostContent,
                author: user.name,
                createdAt: new Date(),
            });

            setPosts([...posts, { id: docRef.id, content: newPostContent, author: user.name }]);
            setNewPostContent('');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div>
            {isAuthenticated && (
                <div>
                    <textarea 
                    className='text-black'
                        value={newPostContent} 
                        onChange={(e) => setNewPostContent(e.target.value)} 
                        placeholder="What's on your mind?" 
                    />
                    <button onClick={handlePostSubmit}>Post</button>
                </div>
            )}
            <div>
                {posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.content}</h2>
                        <p>Author: {post.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forum;
