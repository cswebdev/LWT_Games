import "./TermsOfServicePage.css";

/** Component for TermsOfServicePage
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App -> TermsOfServicePage
 */

const TermsOfServicePage = () => {
    return (
        <div className="TermsOfServicePage">
            <h1>Terms of Use</h1>
            <ol>
                <li>
                    <p>Acceptance of Terms</p>
                    <p>By accessing or using this Unofficial LWT Bingo Game ("the Game"), you agree to abide by these terms and conditions. If you do not agree with any part of these terms, you may not use the Game.</p>
                </li>
                <li>
                    <p>Eligibility</p>
                    <p>You must be at least 18 years old to play the Game. By using the Game, you confirm that you meet this age requirement.</p>
                </li>
                <li>
                    <p>User Account</p>
                    <p>To play the Game, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
                </li>
                <li>
                    <p>Fair Play</p>
                    <p>The Game is intended for entertainment purposes only. Any form of cheating or exploiting loopholes in the game is strictly prohibited.</p>
                </li>
                <li>
                    <p>Virtual Items</p>
                    <p>Any virtual items or currency obtained in the Game have no real-world value and cannot be exchanged for real money or goods.</p>
                </li>
                <li>
                    <p>User Conduct</p>
                    <p>You agree to use the Game in accordance with all applicable laws and regulations. Harassment, offensive language, or any form of disruptive behavior is not allowed.</p>
                </li>
                <li>
                    <p>Termination</p>
                    <p>We reserve the right to terminate or suspend your access to the Game at our discretion, without prior notice, for any reason, including violation of these terms.</p>
                </li>
                <li>
                    <p>Disclaimer</p>
                    <p>The Game is provided "as is" without any warranties, express or implied. We do not guarantee the accuracy, completeness, or reliability of the Game.</p>
                </li>
                <li>
                    <p>Changes to Terms</p>
                    <p>We may revise these terms at any time without notice. By continuing to use the Game after any modifications, you agree to be bound by the revised terms.</p>
                </li>
                <li>
                    <p>Governing Law</p>
                    <p>These terms are governed by and construed in accordance with the laws of United States.</p>
                </li>
            </ol>
        </div>
    );
};

export default TermsOfServicePage;