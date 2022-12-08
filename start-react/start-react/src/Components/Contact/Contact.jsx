import React,{useState} from "react";

export default function Contact() {

  const [moveLabel, setMoveLabel] = useState({
    name:{cls:'',val:''},
    email:{cls:'',val:''},
    phone:{cls:'',val:''},
    message:{cls:'',val:''}
  })

  let myLabel={...moveLabel}
  let clickText=(e)=>{
    myLabel[e.target.id].cls='floating-label-form-group-with-value floating-label-form-group-with-focus'
    myLabel[e.target.id].val=e.target.value
    setMoveLabel(myLabel)
    console.log(moveLabel)
  }

  window.addEventListener('click', outsideClick);

function outsideClick(e) {
    if(moveLabel.name.val!=''){
        myLabel['name'].cls='floating-label-form-group-with-value'
        setMoveLabel(myLabel)
      }
      else {
        myLabel['name'].cls=''
        setMoveLabel(myLabel)
      }
      if(moveLabel.email.val!=''){
        myLabel['email'].cls='floating-label-form-group-with-value'
        setMoveLabel(myLabel)
      }
      else {
        myLabel['email'].cls=''
        setMoveLabel(myLabel)
      }
      if(moveLabel.phone.val!=''){
        myLabel['phone'].cls='floating-label-form-group-with-value'
        setMoveLabel(myLabel)
      }
      else {
        myLabel['phone'].cls=''
        setMoveLabel(myLabel)
      }
      if(moveLabel.message.val!=''){
        myLabel['message'].cls='floating-label-form-group-with-value'
        setMoveLabel(myLabel)
      }
      else {
        myLabel['message'].cls=''
        setMoveLabel(myLabel)
      }
    }


  return (
    <>
      <section className="page-section" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Contact Me
          </h2>

          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <svg
              className="svg-inline--fa fa-star fa-w-18 mx-3"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form id="contactForm" name="sentMessage" noValidate="novalidate">
                <div className="control-group">
                <div onChange={clickText}  className={`form-group floating-label-form-group controls mb-0 pb-2 ${moveLabel.name.cls}`}>
                  <label>Name</label>
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Name"
                    required="required"
                    data-validation-required-message="Please enter your name."
                    aria-invalid="false"
                  ></input>
                  <p className="help-block text-danger"></p>
                </div>     
                </div>
                <div className="control-group">
                  <div onChange={clickText}  className={`form-group floating-label-form-group controls mb-0 pb-2 ${moveLabel.email.cls}`}>
                    <label>Email Address</label>
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      required="required"
                      data-validation-required-message="Please enter your email address."
                      aria-invalid="false"
                    ></input>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div onChange={clickText}  className={`form-group floating-label-form-group controls mb-0 pb-2 ${moveLabel.phone.cls}`}>
                    <label>Phone Number</label>
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="Phone Number"
                      required="required"
                      data-validation-required-message="Please enter your phone number."
                      aria-invalid="false"
                    ></input>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div onChange={clickText}  className={`form-group floating-label-form-group controls mb-0 pb-2 ${moveLabel.message.cls}`}>
                    <label>Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter a message."
                      aria-invalid="false"
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <br></br>
                <div id="success"></div>
                <div className="form-group">
                  <button
                    className="btn btn-primary btn-xl"
                    id="sendMessageButton"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
