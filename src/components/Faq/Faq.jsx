import React, { useState } from 'react';
import "./Faq.css";
import { GoArrowDownLeft } from "react-icons/go";

function Faq() {

    const [Faq, setFaq] = useState([
        {
            question:"1.How can I place an order?",
            answer: "Placing an order with Desert Camping UAE is simple and convenient. Just browse our website, select the camping gear and accessories you need, and add them to your cart. Then, proceed to checkout, where you can provide your shipping details and payment information. Once your order is confirmed, we’ll take care of the rest.",
            state: 'closeans'
        },
        {
            question:"2.What payment methods do you accept?",
            answer: "We accept a variety of secure payment methods, including major credit cards, debit cards, and online payment platforms. You can choose the option that suits you best during the checkout process.",
            state: 'closeans'
        },
        {
            question:"3.Do you offer international shipping?",
            answer: "Currently, we only offer shipping within the UAE. However, we’re working on expanding our services to serve our international customers in the future. Stay tuned for updates!",
            state: 'closeans'
        },
        {
            question:"4.What is your return and exchange policy?",
            answer: "We want you to be completely satisfied with your purchase. If you receive a defective or incorrect item, please contact our customer support within 7 days of delivery. We’ll gladly arrange for a return or exchange and ensure you receive the right product or a refund.",
            state: 'closeans'
        },
        {
            question:"5.Can I track my order?",
            answer: "Yes, you can track your order’s status. Once your order is dispatched, we’ll provide you with a tracking number and a link to our courier partner’s website for real-time updates on your delivery.",
            state: 'closeans'
        },
        {
            question:"6.How long does delivery take?",
            answer: "We strive to process and dispatch your order as quickly as possible. Delivery times may vary depending on your location within the UAE. Typically, you can expect to receive your camping gear within 3-7 business days from the date of order confirmation.",
            state: 'closeans'
        },
        {
            question:"7.Do you offer bulk discounts for corporate or group orders?",
            answer: "Yes, we do offer special discounts for bulk orders. If you’re interested in placing a corporate or group order, please get in touch with our team through the contact information provided on our website.",
            state: 'closeans'
        },
        {
            question:"8.What should I do if I need further assistance?",
            answer: "If you have any additional questions or need further assistance, don’t hesitate to reach out to our friendly customer support team. You can contact us via email, phone, or through the contact form on our website. We’ll be more than happy to help you with anything you need.",
            state: 'closeans'
        },
    ]);

 
  return (
    <div className='Faq'>
      <h3>Frequently Asked Questions</h3>
      <div className="Faq-inner">
        <div className="Faq-1">
            <h2>FAQ's <div className='headingline'></div></h2>
            <p>Experience the thrill of camping in the UAE’s stunning deserts with confidence and ease. Happy camping!</p>
            <img src="faq.jpg" alt="" />
        </div>
        <div className="Faq-2">
            {
                Faq.map((ele , index) => {
                    return(
                        <div key={ele.question}>
                            <h5 className="quest" 
                            onClick={()=>{
                                let newfaq = [...Faq];
                                if(newfaq[index].state == 'openans'){
                                    newfaq[index].state = 'closeans';
                                }
                                else{
                                    newfaq.map((e , i)=>{
                                        if(i == index){
                                            newfaq[i].state = 'openans';
                                        }
                                        else{
                                            newfaq[i].state = 'closeans';
                                        }
                                    }) 
                                }
                                setFaq(newfaq);
                            }
                            }
                            ><span>{ele.question}</span> <span><GoArrowDownLeft /></span></h5>
                            <div className={ele.state}>
                            <p>{ele.answer}</p>
                            </div>
                        </div>
                    );
                })
            }
            
            
        </div>
      </div>
    </div>
  )
}

export default Faq
