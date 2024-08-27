import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function BlogDetail() {
  const { blogId } = useParams();
  const { posts, loading, error } = useSelector((state) => state.posts);

  const post = posts.find((post) => post.id === parseInt(blogId, 10));
  console.log(post);
  

  return (
    <Container className='overflow-hidden'>
      <Row className='overflow-hidden' dangerouslySetInnerHTML={{__html:post.content.rendered}}>
        {/* <Col dangerouslySetInnerHTML={{__html:post.content.rendered}}> */}
        {/* </Col> */}
      </Row>
    </Container>
  );
}

export default BlogDetail;
