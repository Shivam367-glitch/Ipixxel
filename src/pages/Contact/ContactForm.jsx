import { Col} from "react-bootstrap";
import { contactDetails } from "../../Utility/contactDetails.json";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

import { MdOutlineMarkEmailRead } from "react-icons/md";
import { PiMapPinLineThin } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
const ContactForm = () => {
  return (
   <>
              <Col className="col-12 col-md-6 m-0 p-2  p-md-5 d-flex flex-column gap-3 wow animate__animated animate__backInLeft" style={{backgroundColor:"#f8f8f8"}}>
                <p className="text-info fs-4 fw-bold">Send Us  Message</p>
                <p className="text-black fs-3 fw-semibold">Don’t Hesitate to Contact Us. Say Hello or Send a Message.</p>
                <div className="d-flex flex-column gap-3">
                  {Object.entries(contactDetails).map(([key, value]) => {
                    let icon;
                    switch (key) {
                      case "Phone_Number":
                        icon = <LiaPhoneVolumeSolid />;
                        break;
                      case "Email_Address":
                        icon = <MdOutlineMarkEmailRead />;
                        break;
                      case "Office_Address":
                        icon = <PiMapPinLineThin />;
                        break;
                      default:
                        icon = null;
                    }

                    return (
                      <div key={key} className="d-flex flex-column flex-md-row align-items-start justify-content-start align-items-md-center  mb-2 gap-4">
                        {icon && <span className="text-info border border-info  icon fs-2" style={{borderRadius:"50%",background:"none"}}>{icon}</span>}
                            <div className="d-flex flex-column gap-2">
                               <span className="text-info fs-4 fw-semibold"> {key.split("_").join(" ")}</span>
                               <span className="text-black   fs-5"> {value}</span>
                            </div>
                      </div>
                    );
                  })}
                </div>
              </Col>
              <Col className="col-12 col-md-6 m-0 p-2  p-md-5  bg-info wow animate__animated animate__backInRight">
              <form>
                <div className="mb-3 ">
                    <input type="email" className="form-control rounded-1 p-2 form_element" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name"/>
                </div>
                <div className="mb-3 ">
                    <input type="password" className="form-control rounded-1 p-2 form_element" id="exampleInputPassword1" placeholder="Email Address"/>
                </div>
                <div className="mb-3 ">
                    <input type="tel" className="form-control rounded-1 p-2 form_element" id="exampleInputPassword1" placeholder="Mobile Number"/>
                </div>
                <div className="mb-3" >
                    <textarea className="form-control p-2 form_element" placeholder="Message" id="floatingTextarea" style={{height:"120px"}}></textarea>
                </div>
                <button type="submit" className="d-block btn bg-white mx-auto text-info px-5">Send <FaArrowRight/></button>
        </form>
              </Col>
   </>
  )
}

export default ContactForm