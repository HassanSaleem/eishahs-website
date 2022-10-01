import React from 'react';
import { Fade } from 'react-bootstrap'



function Artist() {



    return <Fade in={true} appear={true}>
        <div className='artist'>
            <div className="title">Artist</div>

            <p>
                Eisha, the artist behind Hennabyeishah, has been adorning hands with henna since 2010.
                Based in East London, she travels to London and the surrounding areas.
            </p>

            <p>
                Once a hobby, henna has now become a passionate full-time career. She is renowned for
                her fast paced exquisite bridal work with clean lines and attention to intricacies that make it
                so pleasing to the eyes.
            </p>

            <p>
                Eisha creates unique designs, personal to each and every bride using only natural henna
                paste from reputable suppliers. As a bride, you can expect nothing but professional and
                reliable service, which will be a memorable part of your special day
            </p>

            <p>Contact her now to discuss your requirements.</p>
        </div>
    </Fade>

}

export default Artist