import "./ContactForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactForm() {
  return (
    <div className="container my-4" id="contact">
      <div className="row form1 d-flex align-items-center">
        {/* Left Column: Form */}
        <div className="col-md-6">
          <form
            className="form-container text-align-center justify-content-center"
            method="POST"
            action="https://script.google.com/macros/s/AKfycby5Q3XNTliQzDryPvYqv-04W0jDs_iVPsTPoapc3hQ9oNLH2rfzdc1wYpqDH2VwuUvaag/exec"
          >
            <h5>
              <b>
                Apply For <br/>
                <span style={{ color: "#de3335", lineHeight: "1.5" }}>
                  The Digital Marketing Training Course
                </span>
              </b>
            </h5>
            <br />
            <label htmlFor="Name" style={{ marginRight: "350px" }}>
              Name:
            </label>
            <input type="text" placeholder="Full Name" id="Name" name="Name" />

            <label htmlFor="phone" style={{ marginRight: "290px" }}>
              Phone Number:
            </label>
            <input type="tel" placeholder="Phone Number" id="phone" name="Phone" />

            <label htmlFor="Email" style={{ marginRight: "360px" }}>Email</label>
            <input type="email" placeholder="Email" id="Email" name="Email" />

            <label htmlFor="batches" style={{ marginRight: "290px" }}>Choose a batch</label>
            <select id="batches" name="Batch">
              <option value="February 15">February 15</option>
              <option value="March 1">March 1</option>
            </select>

            <label htmlFor="message" style={{ marginRight: "330px" }}>Message</label>
            <textarea id="message" placeholder="Message" name="Message" rows="4"></textarea>

            <button type="submit" className="btn-read-more">Apply</button>
          </form>
        </div>

        {/* Right Column: Gallery */}
        <div className="col-md-6">
          <div className="body d-flex align-content-center justify-content-center flex-column">
            <div className="gallery text-center overflow-hidden">
              <img className="d-block" src="Images/Gallery/Best SEO Institute in Dera Bassi.jpeg" alt="Best SEO Institute in Dera Bassi" />
              <img className="d-block" src="Images/Gallery/Benefits Of SEO Training.jpeg" alt="Best SEO Training in Zirakpur" />
              <img className="d-block" src="Images/Gallery/SEO Training For Beginners.jpeg" alt="SEO Training For Beginners" />
              <img className="d-block" src="Images/Gallery/Best Online Marketing Courses in Zirakpur.jpeg" alt="Best Digital Marketing Courses in Zirakpur" />
              <img className="d-block" src="Images/Gallery/SEO Training With Placement Zirakpur.jpeg" alt="Best Digital Marketing Institute in Zirakpur" />
              <img className="d-block" src="Images/Gallery/Beginner SEO Courses Zirakpur.jpeg" alt="Top SEO Coaching in Zirakpur" />
              <img className="d-block" src="Images/Gallery/Best Digital Marketing Training in Dera Bassi.jpeg" alt="Best Digital Marketing Training in Dera Bassi" />
              <img className="d-block" src="Images/Gallery/Best Digital Marketing Courses in Dera Bassi.jpeg" alt="Best Digital Marketing Courses in Dera Bassi" />
            </div>
            <div className="div-of-center-div">
              <div className="gallery-btn d-flex align-content-center justify-content-center">
                <button className="btn-of-gallery View-All-Reviews" style={{ fontSize: "14px" }}>
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
