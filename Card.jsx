import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <>
    <h1><center><u>Famous singers</u></center></h1>
    <div className="card1">
      <h2><u>Sunidhi Chauhan</u></h2>
      <div className="image1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnvec5j57Xk2Z8IrH8xkYy0vGy5PfMNvtpTQ&usqp=CAU" alt="loading"/></div>
      <p>Sunidhi Chauhan. born 14 August 1983 is an Indian playback singer. Born in Delhi, she began performing in local gatherings at the age of 5 and made her career debut at the age of 13, with the film Shastra (1996). During the year, she won the first singing reality show titled Meri Awaz Suno and rose to prominence after recording "Ruki Ruki Si Zindagi" from Mast (1999). It won her Filmfare RD Burman Award for New Music Talent and was nominated for the Best Female Playback Singer. She is known for her versatility as a vocalist.</p>
    </div>

    <div className="card2">
        <h2><u>Sonu Nigam</u></h2>
        <div className="image2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0jYH26SBGgocasGB9LApMryTiYBKFpg1dw&usqp=CAU" alt="loading"/></div>
        <p>Sonu Nigam (born 30 July 1973) is an Indian playback singer, music director, dubbing artist and actor.He has been described in the media as one of the best, most popular and successful playback singers in Hindi and Kannada cinema.In 2022, he was honoured by the Government of India with the Padma Shri, the country's fourth-highest civilian honour for his contribution in the field of arts.</p>
    </div>

    <div className="card3">
        <h2><u>Shreya Goshal</u></h2>
        <div className="image3">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8mhNlXPAypHOpG1aR6ET2ePRjI6D1TI-gg&usqp=CAU" alt="loading"/></div>
        <p>Shreya Ghoshal (born 12 March 1984) is an Indian singer. Noted for her wide vocal range and versatility, she is one of the most prolific and popular singers of India.She has recorded songs for films and albums in various Indian and foreign languages and received numerous accolades, including five National Film Awards, four Kerala State Film Awards, two Tamil Nadu State Film Awards, two BFJA Awards, seven Filmfare Awards and ten Filmfare Awards South.</p>
</div>
</>
  );
};

export default Card;