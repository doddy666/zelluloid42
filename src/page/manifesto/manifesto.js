import React from "react";
import './manifesto.css';
import Textfield1 from '../../component/textfield1/textfield1'; // Pfad anpassen, je nach Verzeichnisstruktur

const Manifesto = () => {
    return (
        <div className='manifesto'>
            <div className='title'><h1>About Zelluloid 42 </h1></div>
            {Textfield1}
 

            <p>
                In Berlin, there are as many small, large, niche, and arthouse cinemas as nowhere else in Germany, including several generously funded cinema institutions with a focus on both international and national film history. Even though it is noticeably declining at present, time- and cost-intensive analogue film projections on 35mm and 16mm prints can still be experienced quite regularly in the capital. But where is the analogue film-loving event series dedicated to international, escalatory genre cinema in all its highs and (un)depths?! 
                Where, then, is the series dedicated to the cinema of extremes, the body genres, and the transgressive exploration of what cinema can be quasi between the poles of Eros and Thanatos?
            </p>
            <p>
                We want to dedicate ourselves to such cinema with the series Pleasure Dome at the equally cozy and technically exemplary Moabit Filmrauschpalast with monthly double features. 
                It shall be a wild ride through the decades, styles, and production contexts as well as countries, with the common ground of an idea of cinema that is direct, unfiltered, provocative, sometimes just plain nasty. A cinema that engulfs you, one that you might sometimes want to turn away from - ultimately, a cinema that peculiarly captivates you, presents ambivalences, and shifts your perspectives on the world, provided you are willing to engage with it (and not constantly measure what is shown against your own moral-political compass).
                And since our focus is not "just" on the film itself, but also on a sensually authentic cinema experience as it was available contemporarily on 42nd Street and Co., we aspire to always present analogue film prints whenever possible - and in doing so, also think of our English-speaking viewers.
            </p>
            <p>
                The associative cinema doubles of Pleasure Dome are thus intended to appeal to both the Berlin "cinephilia" and the film buffs in their hitherto quiet chambers, as well as to the many occasional cinema-goers: Classics of horror and erotic cinema are on the program as well as forgotten underground gems and unfairly maligned and ridiculed films. 
                This means: The nightmare worlds populated by zombies and electro-funk of Lucio Fulci or the 80s New York sleaze courses of Abel Ferrara stand on equal footing with the drastic porn and horror cinema of Roberta Findlay, DIY punk excesses, or the occasional incredibility (and tastelessness) of Hong Kong action and martial arts cinema.
            </p>
            <p>We look forward to seeing you! </p>
            <p>Long Live the Pleasure Dome.</p>
        </div>
    );
};

export default Manifesto;
