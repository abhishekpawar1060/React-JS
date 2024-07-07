import Container from "../component/container/container"
import PostForm from '../component/post-form/PostForm'

function AddPost(){
    return(
        <div className="py-6">
            <Container>
                <PostForm />
            </Container>
        </div>
    )
}

export default AddPost