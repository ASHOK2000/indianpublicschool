import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Terms & Condition                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Terms and Conditions for Admission Form Submission</h4>
                <p>

                    <ul>                    As a student of Indian Public School, by submitting the admission form, you agree to the following terms and conditions:
                    </ul>
                    <ul>                    Accuracy of Information: All information provided in this admission form is accurate to the best of my knowledge. I understand that providing false information may result in the rejection of my application or, if admitted, may lead to termination of my enrollment.
                    </ul>
                    <ul>                    Consent for Data Usage: I consent to the collection and use of my personal data as outlined in the school's privacy policy. This information will be used solely for admission and school-related purposes.
                    </ul>
                    <ul>                    Adherence to School Policies: I agree to abide by the rules, regulations, and code of conduct established by Indian Public School. I understand that failure to adhere to these policies may lead to disciplinary action.
                    </ul>
                    <ul>                    Parent/Guardian Consent: If I am under the age of 18, I confirm that my parent/guardian has reviewed and consented to my application to Indian Public School.
                    </ul>
                    <ul>                    Admission Decision: I understand that submission of this form does not guarantee admission. Admission decisions are made at the discretion of the school's admission committee.
                    </ul>
                    <ul>                    Fee Payment: Upon admission, I agree to adhere to the school's fee payment schedule and understand the financial responsibilities associated with enrollment.
                    </ul>
                    <ul>                    Changes to Terms and Conditions: Indian Public School reserves the right to modify or update these terms and conditions without prior notice. Any changes will be effective upon posting on the school's website.
                    </ul>
                    <ul>                    By submitting this admission form, I acknowledge that I have read, understood, and agree to comply with the terms and conditions outlined above.
                    </ul>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
