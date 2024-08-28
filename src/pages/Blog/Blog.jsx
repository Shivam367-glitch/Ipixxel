import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../features/Post/postsSlice';
import { Col, Container, Row } from 'react-bootstrap';
import HeroSection from "../../components/Hero/HeroSection";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Blog = () => {
  const dispatch = useDispatch();
  const { posts, loading , error } = useSelector((state) => state.posts);
  const [parsedPosts, setParsedPosts] = useState([]);
 

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    if (posts.length > 0) {
      const parseContent = (htmlContent) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const img = doc.querySelector('img');
        return [img?.src || '', img?.srcset || ''];
      };

      const newParsedPosts = posts.map(post => ({
        title: post.title.rendered,
        images: parseContent(post.content.rendered)
      }));

      setParsedPosts(newParsedPosts);
    }
  }, [posts]);

  return (
    <Container fluid className='overflow-hidden'>
      <Row className='flex-wrap overflow-hidden'>
        <Col className="col-12 m-0 p-0">
          <HeroSection background="blogHero.jfif" heading="Blogs: The latest post of 2024" subHeading="Follow us and get updated on the latest technologies and tools"/>
        </Col>
        <Col className='col-12 text-center mt-4 d-none d-md-block'> 
          <h2 className='text-info'>Blogging Trends and Insights</h2>
        </Col>
        {
          loading ? 
          <Col className='col-12 m-0 p-0 mt-4'>
            <Container fluid={true}>
              <Row className='p-3 p-md-4 p-lg-0 p-xl-4 gap-5 justify-content-center'>
              <Col className="col-12 m-0 p-0 text-center text-info fs-4">
                  Loading....
              </Col>
              </Row>
            </Container>
          </Col> :
          error ? 
          <Col className="col-12 m-0 p-0"><p>Error loading posts: {error}</p></Col> :
          parsedPosts.length === 0 ? 
          <Col className="col-12 m-0 p-0">No posts available</Col> :
          <Col className='col-12 m-0 p-0 mt-4'>
            <Container fluid={true}>
              <Row className='p-3 p-md-4 p-lg-0 p-xl-4 gap-5 justify-content-center'>
                {
                  parsedPosts.map((post, index) => (
                    <Col key={index} xs={12} sm={5} md={5} lg={5} className="d-flex flex-column flex-xl-row border border-2 gap-3 m-0 p-0 rounded-2 blog_card">
                      <div style={{ height: "230px" }}>
                        <img src={post.images[0]} alt={`Post image ${index}`} srcSet={post.images[1]} className='blog_img' />
                      </div>
                      <div className='d-flex flex-column gap-2 p-2'>
                        <p className='fw-medium fs-5' dangerouslySetInnerHTML={{ __html: post.title }} />
                        <span className='text-secondary'>Admin | {new Date(posts[index].modified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        <Link to={`/blogs/${posts[index].id}`} className='text-decoration-none'>
                          Read More <FaArrowRight />
                        </Link>
                      </div>
                    </Col>
                  ))
                }
              </Row>
            </Container>
          </Col>
        }
      </Row>
    </Container>
  );
};

export default Blog;
