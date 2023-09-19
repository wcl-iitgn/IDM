import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';

{/* <script type="text/javascript" src="//rf.revolvermaps.com/0/0/7.js?i=538hvsm4w0v&amp;m=0&amp;c=ff0000&amp;cr1=ffffff&amp;sx=19" async="async"></script> */ }

const DroughtReporting = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//rf.revolvermaps.com/0/0/7.js?i=538hvsm4w0v&amp;m=0&amp;c=ff0000&amp;cr1=ffffff&amp;sx=19";
        document.getElementsByClassName("sitevisitor-item")[0].appendChild(script);
    }, []);
    return (
        <>
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

                    
                <section className="sitevisitorContainer">
                    <div className="sitevisitor-item">
                        <a
                            className="sitevisitor-map"
                            data-theme="dark"
                            data-tweet-limit="5"
                            data-chrome="noheader nofooter noborders"
                            href="https://www.revolvermaps.com/livestats/538hvsm4w0v/"
                            target="_blank" rel="noreferrer"
                        >
                            Website Visitors: Live Statistics
                        </a>
                    </div>
                </section>

        




                </div>
            </div>
        </>

    )
}

export default DroughtReporting