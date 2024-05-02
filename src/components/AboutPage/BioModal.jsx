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
            {bio.linkedIn && <div className="btn btn-primary BioModal-social-button"><a href={bio.linkedIn}>LinkedIn</a></div>}
            {bio.portfolio && <div className="btn btn-primary BioModal-social-button"><a href={bio.portfolio}>Portfolio</a></div>}
            {bio.github && <div className="btn btn-primary BioModal-social-button"><a href={bio.github}>GitHub</a></div>}
            {bio.behance && <div className="btn btn-primary BioModal-social-button"><a href={bio.behance}>Behance</a></div>}
            {bio.otherSocial && <div className="btn btn-primary BioModal-social-button"><a href={bio.otherSocial}>Social Media</a></div>}
          </div>
          <div class="BioModal-right">
            <div className="BioModal-close" onClick={props.onHide}>x</div>
            <div className="BioModal-bio">
              <div className="BioModal-name">
                {bio.name}
                <div className="BioModal-pronouns">
                  {bio.pronouns}
                </div>
              </div>
              <div className="BioModal-role">
                {bio.role}
              </div>
            </div>
            <div className="BioModal-bio">
              {bio.bio}
            </div>
            <div className="BioModal-qanda">
              <div className="BioModal-reasonForJoining">
                <p>Q. Why did you join the group?</p>
                <p><span className="BioModal-a">A:</span> {bio.reasonForJoining}</p>
              </div>
              <div className="BioModal-gainedFromInCo">
                <p>Q. What have you gained from InCo?</p>
                <p><span className="BioModal-a">A:</span> {bio.gainedFromInCo}</p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default BioModal;