import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <section class="contact" id="contact">
        <div class="container">
          <div class="contact-heading">
            <h3>Contact us</h3>
          </div>
          <div class="contact-grids">
            <div class=" col-md-12 contact-form">
              <form action="#" method="post">
                <input type="text" placeholder="Subject" required="" />
                <input type="text" placeholder="Your name" required="" />
                <input type="email" placeholder="Your mail" required="" />
                <textarea placeholder="Message" required=""></textarea>
                <div class="submit1">
                  <input type="submit" value="submit" />
                </div>
              </form>
            </div>
            <div class=" col-md-0 map">
              {/* <iframe
                width="600"
                height="450"
                frameborder="0"
                style="border:0"
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJu8oXNbJMbDkRHVYbLDveBHI&key=AIzaSyB7nR1mbT0--BkKc9rs_Fa0eQF6tYc1kFI"
                allowfullscreen
              ></iframe> */}
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;