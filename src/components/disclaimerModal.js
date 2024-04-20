import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';

export default function DisclaimerModal({ showModal, handleClose }) {
    
    return (
        <>
            <Modal show={showModal} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Disclaimer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='DisclaimerWrap'>
                      <p>While we have devoted considerable efforts to ensure accurate depictions of our products encompassing their colours, designs, descriptions, and packaging, it is imperative to acknowledge the potential for minor divergences. These deviations may arise due to an array of factors, encompassing variances in device screen configurations, lighting conditions in the installation environment, inconspicuous alterations in product finishes over time, modifications in packaging, typographical errors, and other relevant contributors.</p>
                      <p>It is pivotal to comprehend that our company cannot accept liability for disparities in colour or design that do not emanate from factory defects. We earnestly advise you to meticulously assess and validate all particulars through our network of product resellers. By making the choice to acquire products from our assortment, you tacitly acknowledge and embrace the likelihood of marginal distinctions between the tangible product and its visual representation on our official website and catalogue. Your understanding in this regard is greatly valued.</p>
                    </div>
                    <div>
                      <p><strong>Notice:</strong> Regarding Product Representation and Variation</p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
