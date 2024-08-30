import { Card, Col, Container, Row } from "react-bootstrap"

const TypeSection = ({heading,TypeList}) => {
  
  return (
    <Container fluid={true} >
      <Row className="gap-3">
        <Col xs={12}className="m-0 p-2 p-md-0"> 
           <h2 className="fw-medium fs-1">{heading}</h2>
        </Col> 
        <Col xs={12} className="m-0 p-0  p-3 p-md-0"> 
          <Container fluid={true} >
          <Row className="gap-1 row-gap-5 justify-content-around">
            {
              TypeList.map((type,ind)=>{
                return (
                  <Card as={Col} xs={12} sm={5} lg={3} key={ind} className="border m-0 p-0 rounded-3"> 
                    <Card.Img variant="top" src={type.img.src} srcSet={type.img.srcset} sizes={type.img.sizes} className="img-fluid" style={{maxWidth:"100%",height:"auto"}}/>
                    <Card.Body className="m-0 p-2"> 
                      <h4>{type.title}</h4> 
                      {/* <pre>{console.log(type.content.split("."))}</pre> */}
                      {
                        type.content.split(".").map((contents,ind)=>{
                        //  if(ind<2){
                        //     return(
                        //     <p className="text-secondary m-0" key={contents}>{contents}.</p>
                        //   )
                        //  }else{
                        //   return null
                        //  } 

                         return ind<2?(<p className="text-secondary m-0" key={contents}>{contents}.</p>):null
                        })
                      }
                    </Card.Body>
                  </Card>
                )
              })
            }
          </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default TypeSection