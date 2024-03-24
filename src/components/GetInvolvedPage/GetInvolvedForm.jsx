/** Component for GetInvolvedForm
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * GetInvolevdPage -> GetInvolvedForm
 */
const GetInvolvedForm = () => {
    console.debug("GetInvolvedForm");

    return (
        <form className="GetInvolvedForm form-group" id="GetInvolvedForm-app">
            <h3>Personal Information</h3>
            <div className="row">
                <div className="col">
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" name="first-name" placeholder="First Name" required></input>
                </div>
                <div className="col">
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" name="last-name" placeholder="Last Name" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="pref-name">Preferred Name:</label>
                    <input type="text" name="pref-name" placeholder="Preferred Name"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="pronouns">Pronouns:</label>
                    <select className="form-control" name="pronouns" id="pronouns" form="GetInvolvedForm-app" required>
                        <option value="she">She / Her</option>
                        <option value="he">He / Him</option>
                        <option value="they">They / Them</option>
                        <option value="she-they">She / They</option>
                        <option value="he-they">He / They</option>
                        <option value="mx">Mx</option>
                        <option value="ze">Ze / Zir</option>
                        <option value="ey">Ey / Em</option>
                        <option value="other">Other</option>
                        <option value="none">I choose not to disclose.</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="birthdate">Date of Birth:</label>
                    <input type="date" placeholder="mm/dd/yyyy" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input type="text" name="city" placeholder="City" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="state">State:</label>
                    <select className="form-control" name="state" id="state" form="GetInvolvedForm-app" required>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="timezone">Timezone:</label>
                    <input type="text" name="timezone" placeholder="PST"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender Identity:</label>
                    <select className="form-control" name="gender" id="gender" form="GetInvolvedForm-app">
                        <option value="agender">Agender</option>
                        <option value="bigender">Bigender</option>
                        <option value="cisgender">Cisgender</option>
                        <option value="gender-non-conforming">Gender Non-Confoming</option>
                        <option value="gender-queer">Gender Queer</option>
                        <option value="man">Man</option>
                        <option value="non-binary">Non-binary</option>
                        <option value="transgender">Transgender</option>
                        <option value="woman">Woman</option>
                        <option value="other">Other</option>
                        <option value="none">I choose not to disclose.</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="sexual-orientation">Sexual Orientation:</label>
                    <select className="form-control" name="sexual-orientation" id="sexual-orientation" form="GetInvolvedForm-app">
                        <option value="lesbian">Lesbian</option>
                        <option value="gay">Gay</option>
                        <option value="bisexual">Bisexual</option>
                        <option value="queer">Queer</option>
                        <option value="asexual">Asexual</option>
                        <option value="straight">Straight</option>
                        <option value="ally">Ally</option>
                        <option value="other">Other</option>
                        <option value="none">I choose not to disclose.</option>
                    </select>
                </div>
                <h3>Contact Information</h3>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="555-555-5555" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" placeholder="hello@website.com"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="linkedIn">LinkedIn:</label>
                    <input type="url" name="linkedIn" placeholder="LinkedIn"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="github">GitHub:</label>
                    <input type="url" name="github" placeholder="Github"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="portfolio">Portfolio:</label>
                    <input type="url" name="portfolio" placeholder="Portfolio"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="skills">What skills are you most interested in learning about / want to develop to achieve your career goals? </label>
                    <textarea name="skills"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="goals">What are your professional goals for the next 1-3 years? </label>
                    <textarea name="goals"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="goals">Anything else we should know about you or that you'd like to tell us? </label>
                    <textarea name="goals"></textarea>
                </div>
            </div>
        </form>
    );
};

export default GetInvolvedForm;