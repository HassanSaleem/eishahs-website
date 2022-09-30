import React, { useState } from 'react';

import { Fade } from 'react-bootstrap'

function Services() {
  return (
    <Fade in={true} appear={true}>

      <div className="services">
        <div className="title">Services</div>
        <h1>Bridal Henna</h1>
        <p>
          Bridal henna is bespoke to each bride and can be personalized according to your request. I
          offer various packages that vary in length and include both sides of the arms and feet.
        </p>
        <p>
          Bridal henna should be applied 2-3 days before your wedding day in order to achieve the
          darkest stain. I use 100% natural henna paste made with lemon, sugar and essential oils,
          which should produce a cherry red to mahogany stain if the correct pre and post henna care
          is followed. Care instructions will be provided complimentary at the time of booking.
          Your henna application can take anywhere between 3-9 hours depending on the package
          chosen. I insist on starting before any functions begin or applying the day before your henna
          event.
        </p>

        <p>
          I unfortunately do not apply bridal henna whilst your events are going on. Prices currently
          start from £150 & above and travel charges may incur depending on the area.
        </p>
        <h1>Party Henna</h1>
        <p>
          Party henna is not limited to just weddings, but can be an idea for events such as birthdays,
          baby showers, anniversaries, children’s parties and corporate events.
        </p>
        <p>
          I can complete simple but detailed designs in a matter of minutes whilst still maintaining the
          clean work I am known for. I currently charge a fixed rate of £60 an hour and can complete
          approximately 10-14 strips of henna in one hour. I have a minimum of two hours booking
          required for events in and around London and three hours minimum outside of this area.
          Travel charge may apply depending on your area of booking.
        </p>
      </div>
    </Fade>
  );
}

export default Services