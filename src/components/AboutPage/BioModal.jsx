import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./BioModal.css";

const BioModal = ({ bio, ...props }) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div class="BioModal">
            <div class="BioModal-left">
                <img width="100%" src={bio.photo} alt={bio.name} />
            </div>
            <div class="BioModal-right">
            <div className="BioModal-name">{bio.name}</div>
                <div className="BioModal-role">
                    {bio.role}
                </div>
                <div className="BioModal-pronouns">
                    {bio.pronouns}
                </div>
                <div className="BioModal-bio">
                    {bio.bio}
                </div>
                <div className="BioModal-qanda">
                    <div className="BioModel-reasonForJoining">
                        <p>Q. Why did you join the group?</p>
                        <p>{`A: ${bio.reasonForJoining}`}</p>
                    </div>
                    <div className="BioModel-gainedFromInCo">
                        <p>Q. What have you gained from In.Co?</p>
                        <p>{`A: ${bio.gainedFromInCo}`}</p>
                    </div>
                </div>
            </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BioModal;