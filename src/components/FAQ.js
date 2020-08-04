import React from "react";

const FAQ = ({ faq, index, toggle }) => {
  return (
    <div key={index} className={`faq ${faq.open ? "open" : ""}`}>
      <div
        key={index}
        className="accordion__header"
        onClick={() => toggle(index)}
      >
        {faq.question}
      </div>
      <div className="accordion__body">{faq.answer}</div>
    </div>
  );
};

export default FAQ;
