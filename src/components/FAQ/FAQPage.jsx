import Accordion from 'react-bootstrap/Accordion';
import { FAQS } from './faqs';
import "./FAQPage.css";

/** Component for FAQPage
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App -> FAQPage
 *
 * Linked at /faq
 */
const FAQPage = () => {
   // console.debug("FAQPage");
   return (
      <div className="FAQPage">
         <h1>Got Questions?</h1>
         <p>We’ve got answers. If you don’t see your question answered here, email... </p>
         <div className="FAQPage-questions">
            <h2>FAQ</h2>
            {FAQS.map((faq, idx) => (
               <Accordion>
                  <Accordion.Item eventKey={idx}>
                     <Accordion.Header className="FAQPage-question">{faq.question}</Accordion.Header>
                     <div className="FAQPage-bar"></div>
                     <Accordion.Body className="FAQPage-answer">
                        {faq.answer}
                     </Accordion.Body>
                  </Accordion.Item>
               </Accordion>
            ))}
         </div>
      </div>
   );
};

export default FAQPage;
