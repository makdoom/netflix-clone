import React, {useState} from "react";
import "./HomeAccordion.css";
import FAQ from './FAQ'

const HomeAccordion = () => {
    const [faqs, setfaqs] = useState([
        {
            question: 'What is Netflix ?',
            answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.${<br/>}
            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
            open: true
        },
        {
            question: 'How much does Netflix costs ?',
            answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.`,
            open: false
        },
        {
            question: 'Where can i watch ?',
            answer: `Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.${<br/>}You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere`,
            open: false
        },
        {
            question: 'How do i cancel ?',
            answer: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
            open: false
        },
        {
            question: 'What can i watch on Netflix ?',
            answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
            open: false
        },
    ])
  return (
        <div className="faqs">
        {faqs.map((faq,i) => <FAQ faq ={faq} index={i}/> )}
        </div>
  );
};

export default HomeAccordion;
