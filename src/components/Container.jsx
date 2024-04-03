import React, { useState } from 'react';
import firstImg from "../assets/main.svg"
import arrow from "../assets/arrow.png"
import desktopImg from "../assets/main desktop.svg"
import shadow from "../assets/shadow desktop.svg"
import box from "../assets/tag.svg"


export default function Container(){
  const [texts, setTexts] = useState({
    text1: false,
    text2: false,
    text3: false,
    text4: false,
    text5: false
  });

  const showText = (text) => {
    setTexts({
      text1: text === 'text1' ? !texts.text1 : false,
      text2: text === 'text2' ? !texts.text2 : false,
      text3: text === 'text3' ? !texts.text3 : false,
      text4: text === 'text4' ? !texts.text4 : false,
      text5: text === 'text5' ? !texts.text5 : false,
    });
  }


  return(
   <div className='container'>
    <div className='img-div'>
    <img src={firstImg}alt="" className='first-img' />
    <img src={desktopImg} alt="" className='desktop-img' />
    <img src={shadow} alt="" className='shadow-desktop' />
    <img src={box} alt="" className='box' />
    </div>
    <div className="text-div">
      <h1 className='faq'>FAQ</h1>
      <div className="information">
        <div className="question">
      <p className="first-p">How many team members can I invite?</p>
      <img src={arrow} alt="" onClick={() => showText('text1') } />
        </div>
      {texts.text1 && <p className='hidden'>you can invite 10 member</p>}
      </div>
      <hr />
      <div className="information">
        <div className='question'>
      <p className="first-p">What is the maximum file upload size?</p>
      <img src={arrow} alt="" onClick={() => showText('text2')} />
        </div>
      {texts.text2 && <p className='hidden'>No more than 2GB. All files in your account must fit your
              allotted storage space</p>}
      </div>
      <hr />
      <div className="information">
        <div className='question'>
      <p className="first-p">How do I reset my password?</p>
      <img src={arrow} alt="" onClick={() => showText('text3')} />
        </div>
      {texts.text3 && <p className='hidden'>You can reset your password from email or with phone
              number.</p>}
      </div>
      <hr />
      <div className="information">
        <div className='question'>
      <p className="first-p">Can I cancel my subscription?</p>
      <img src={arrow} alt="" onClick={() => showText('text4')} />
        </div>
      {texts.text4 && <p className='hidden'>you can cancel your subscription anytime from settings.</p>}
      </div>
      <hr />
      <div className="information">
        <div className='question'>
      <p className="first-p">Do you provide additional support?</p>
      <img src={arrow} alt=""  onClick={() => showText('text5')}  />
        </div>
      {texts.text5 && <p className='hidden'>you can cancel your subscription anytime from settings.</p>}
      </div>
      <hr />
    </div>
   </div>
  )
}