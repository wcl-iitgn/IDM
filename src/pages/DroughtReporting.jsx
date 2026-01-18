import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';


const DroughtReporting = () => {

    return (
        <div className="page_container">
            <Helmet>
                <title>Drought Reporting | India Drought Monitor</title>
                <meta name="description" content="Report drought-related conditions and impacts within India. Reporting regularly can
                        help people see what normal, wet and dry conditions look like in your area." />
            </Helmet>
            <div className='main-container'>
                <div className="section-heading">
                    <h1>
                        Submit Report
                    </h1>
                </div>

                <div className="report-drought">
                    <p> Report drought-related conditions and impacts within India. Reporting regularly can
                        help people see what normal, wet and dry conditions look like in your area.</p>
                    <form className="report-drought-form" name="submit-to-google-sheet">
                        <input type="text" placeholder="Your State/Union Territory" className="form-control" name="state" required autoComplete="off" /> <br />
                        <input type="text" placeholder="Your District" className="form-control" name="district" required autoComplete="off" /> <br />
                        <input type="text" placeholder="What is the date? (Please use the calendar to select the date of your observation)"
                            className="form-control" name="reporting-date" required onFocus={
                                (e) => {
                                    e.currentTarget.type = "date";
                                    e.currentTarget.focus();
                                }
                            }
                        /><br />

                        <textarea placeholder="Describe Drought Impact in your area" className="form-control" rows="9" name="report"
                            required autoComplete="off"></textarea>


                        <input type="text" placeholder="Name" className="form-control" name="name" required autoComplete="off" /> <br />
                        <input type="text" placeholder="Email" className="form-control" name="email" required autoComplete="off" /><br />

                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                    <span id="message" className="success-message"></span>









                </div>
            </div>
        </div>

    )
}

export default DroughtReporting