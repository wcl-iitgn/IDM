import React from 'react'
import { Helmet } from 'react-helmet';


const Disclaimer = () => {
    return (
        <>
            <Helmet>
                <title>Disclaimer | India Drought Monitor</title>
            </Helmet>

            <div className='main-container'>
                <div className="section-heading">
                    <h1>Disclaimer</h1>
                </div>
                <div className="section">
                    <p className="para-content">The work described in these pages is part of an exploratory research effort at the <a
                        href="https://iitgn.ac.in/" target="_blank" rel="noreferrer noopener"> Indian Institute of Technology Gandhinagar,</a> and does
                        not represent the official product of any Institute, or
                        central, state, or local agency.</p><br /><br />
                    <p className="content-heading">
                        USE AT YOUR OWN RISK.</p>
                    <p className="para-content">
                        The authorized use of DATA FROM THIS SITE is limited to academic and educational purposes only, and NOT for
                        operational or commercial purposes. THIS DATA IS PROVIDED "AS IS" AND IN NO EVENT SHALL THE PROVIDERS BE
                        LIABLE FOR ANY DAMAGES, INCLUDING, WITHOUT LIMITATION, DAMAGES RESULTING FROM LOST DATA OR LOST PROFITS OR
                        REVENUE, THE COSTS OF RECOVERING SUCH DATA, THE COSTS OF SUBSTITUTE DATA, CLAIMS BY THIRD PARTIES OR FOR
                        OTHER SIMILAR COSTS, OR ANY SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, ARISING OUT OF THE USE OF THE
                        DATA. The accuracy or reliability of the data is not guaranteed or warranted in any way and the Providers
                        disclaim liability of any kind whatsoever, including, without limitation, liability for quality,
                        performance, merchantability and fitness for a particular purpose arising out of the use, or inability to
                        use the data.
                    </p>
                </div>
            </div>
        </>

    )
}

export default Disclaimer