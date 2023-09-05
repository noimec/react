import { useParams } from "react-router-dom"
import { useFetchingId } from "../hooks/useFetching";
import { PostService } from "../API/PostService";
import { useEffect, useState } from "react";
import { Loader } from "../components/UI/Loader/Loader";

interface Comment {
    email: string,
    body: string,
    id: string
}

export const PostIdPages = () => {
    const params = useParams();
    const [post, setPost] = useState<any>({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetchingId(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);

    });

    const [fetchComments, isComLoading, errorCom] = useFetchingId(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);

    });

    useEffect(() => {
        if (typeof fetchPostById === 'function' && params.id && typeof fetchComments === 'function') {
            fetchPostById(params.id);
            fetchComments(params.id);
        }
    }, [])

    return (
        <div>
            <h1>Post page is open with ID = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Comments</h1>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map((comm: Comment) =>
                        <div key={comm.id} style={{ marginTop: '15px' }}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}