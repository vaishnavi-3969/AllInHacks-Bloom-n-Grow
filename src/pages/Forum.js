import { collection, doc, getDoc, getDocs, orderBy, query, addDoc, Timestamp, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../components/Firebase";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Forum = () => {
    const { isAuthenticated, user, loginWithRedirect } = useAuth0();
    const [posts, setPosts] = useState([]);
    const [newPostContent, setNewPostContent] = useState('');
    const [newCommentContent, setNewCommentContent] = useState('');
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const [commentSubmitted, setCommentSubmitted] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
                const postsSnapshot = await getDocs(q);
                const postsData = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPosts(postsData);
            } catch (error) {
                console.error('Error fetching posts: ', error);
            }
        };

        fetchPosts();
    }, [commentSubmitted]);

    const handlePostSubmit = async () => {
        try {
            if (!isAuthenticated) {
                loginWithRedirect();
                return;
            }

            const docRef = await addDoc(collection(db, 'posts'), {
                content: newPostContent,
                author: user.name,
                authorPicture: user.picture,
                createdAt: Timestamp.now(),
                comments: [],
            });

            setPosts([{ id: docRef.id, content: newPostContent, author: user.name, authorPicture: user.picture, comments: [] }, ...posts]);
            setNewPostContent('');
        } catch (error) {
            console.error('Error adding post: ', error);
        }
    };

    const handleCommentSubmit = async (postId) => {
        try {
            if (!isAuthenticated) {
                loginWithRedirect();
                return;
            }

            const postRef = doc(db, 'posts', postId);
            const postDoc = await getDoc(postRef);

            if (postDoc.exists()) {
                await updateDoc(postRef, {
                    comments: arrayUnion({
                        content: newCommentContent,
                        author: user.name,
                        authorPicture: user.picture,
                        createdAt: Timestamp.now()
                    })
                });

                const updatedPostDoc = await getDoc(postRef);
                const updatedPostData = updatedPostDoc.data();
                const updatedPosts = posts.map(post => {
                    if (post.id === postId) {
                        return { ...post, comments: updatedPostData.comments };
                    }
                    return post;
                });

                setPosts(updatedPosts);
                setNewCommentContent('');
                setCommentSubmitted(true);
            } else {
                console.error('Post does not exist');
            }
        } catch (error) {
            console.error('Error adding comment: ', error);
        }
    };

    const handleSelectPost = async (postId) => {
        try {
            setSelectedPostId(postId);

            const postRef = doc(db, 'posts', postId);
            const postDoc = await getDoc(postRef);

            if (postDoc.exists()) {
                const postData = postDoc.data();
                setComments(postData.comments || []);
                setShowComments(true);
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.error('Error fetching comments: ', error);
        }
    };

    return (
        <div className="container px-4 mx-auto">
            {isAuthenticated && (
                <div className="py-3 mb-4">
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded-md bg-[#A3B18A] text-black"
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                        placeholder="What's on your mind?"
                    />
                    <button
                        className="px-4 py-2 mt-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
                        onClick={handlePostSubmit}
                    >
                        Post
                    </button>
                </div>
            )}

            {/* Displaying posts */}
            <div>
                {posts.map(post => (
                    <div key={post.id} className="p-4 mb-4 border border-gray-300 rounded-md">
                        {/* Post content and author */}
                        <h2 className="text-lg font-semibold">{post.content}</h2>
                        <div className="flex items-center mt-2">
                            <img src={post.authorPicture} alt={post.author} className="w-8 h-8 mr-2 rounded-full" />
                            <p className="text-sm">{post.author}</p>
                        </div>

                        {/* Show/Hide Comments button */}
                        <button
                            className="px-4 py-2 mt-2 text-gray-700 transition duration-300 bg-gray-200 rounded-md hover:bg-gray-300"
                            onClick={() => handleSelectPost(post.id)}
                        >
                            {selectedPostId === post.id && showComments ? 'Hide Comments' : 'Show Comments'}
                        </button>

                        {/* Adding a comment textbox */}
                        {selectedPostId === post.id && showComments && (
                            <div className="mt-4">
                                <textarea
                                    className="w-full p-2 text-black border border-gray-300 rounded-md"
                                    value={newCommentContent}
                                    onChange={(e) => setNewCommentContent(e.target.value)}
                                    placeholder="Write a comment..."
                                />
                                <button
                                    className="px-4 py-2 mt-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
                                    onClick={() => handleCommentSubmit(post.id)}
                                >
                                    Comment
                                </button>
                                {commentSubmitted && (
                                    <p className="mt-2 text-green-500">Comment submitted successfully!</p>
                                )}
                            </div>
                        )}

                        {/* Displaying comments */}
                        {selectedPostId === post.id && showComments && post.comments.length > 0 && (
                            <div className="mt-4">
                                {post.comments.map((comment, index) => (
                                    <div key={index} className="p-3 mt-4 border border-gray-200 rounded-md">
                                        <p>{comment.content}</p>
                                        <div className="flex items-center mt-2">
                                            <p className="text-sm">{comment.author}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forum;
