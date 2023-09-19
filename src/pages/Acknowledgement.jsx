import React from 'react'
import { Helmet } from 'react-helmet';

const Acknowledgement = () => {
    return (
        <>
            <Helmet>
                <title>Acknowledgement | India Drought Monitor</title>
                <meta name="description" content="Acknowledgement - India Drought Monitor" />
            </Helmet>

            <div className='main-container'>
                <div className="section-heading">
                    <h1>Acknowledgement</h1>
                </div>

                <div className="section">
                    <p className="para-content">
                        We would like to appreciate financial assistance from the ITRA-Water,
                        Indian Ministry of Human Resource Development (MHRD), and IWMI for this
                        study. Datasets used in this work were obtained from the Asian
                        precipitation highly resolved observation data integration toward
                        evaluation of water resources
                        <a href="http://www.chikyu.ac.jp/precip/english/index.html" rel="noopener noreferrer" target="_blank">APHRODITE,</a>
                        <a href="http://hydrology.princeton.edu/getdata.php?dataid=1" target="_blank" rel="noopener noreferrer">Princeton data,</a>
                        <a href="https://disc2.gesdisc.eosdis.nasa.gov/data/TRMM_RT/TRMM_3B42RT_Daily.7/" target="_blank" rel="noopener noreferrer">Tropical
                            Rainfall Measurement Mission (TRMM), </a>
                        <a href="ftp://ftp.cdc.noaa.gov/Projects/Reforecast2" target="_blank" rel="noopener noreferrer">
                            Global Ensemble Forecast System (GEFS)
                        </a>
                        and
                        <a href="http://chg.geog.ucsb.edu/index.html" target="_blank" rel="noopener noreferrer">
                            Climate hazards infrared precipitation with station (CHIRPS).</a><br /><br />

                        We also thank India Meteorological Department (IMD) for providing
                        observed datasets and Dr. A. K. Sahai, Ex Project Director, Monsoon
                        Mission, Indian Institute of Tropical Meteorology, Pune for providing
                        the Extended Range Forecast System (ERFS) datasets.
                    </p>
                    <br /><br />
                    <p className="content-heading">REFERENCES</p>
                    <p className="para-content">
                        Aadhar, S., & Mishra, V. (2017). High-resolution near real-time drought
                        monitoring in South Asia. Scientific Data, 4, 170145. Retrieved from
                        <a href="http://dx.doi.org/10.1038/sdata.2017.145" target="_blank" rel="noopener noreferrer">http://dx.doi.org/10.1038/sdata.2017.145
                        </a><br /><br />

                        Mishra, V., Aadhar, S., Asoka, A., Pai, S., & Kumar, R. (2016). On the
                        frequency of the 2015 monsoon season drought in the Indo-Gangetic Plain.
                        Geophysical Research Letters, 43(23), 12,102-12,112.
                        <a href="https://doi.org/10.1002/2016GL071407"
                            target="_blank" rel="noopener noreferrer">https://doi.org/10.1002/2016GL071407</a><br /><br />

                        Shah, R., Sahai, A. K., & Mishra, V. (2016). Short-to-medium range
                        hydrologic forecast to manage water and agricultural resources in India.
                        Hydrology and Earth System Sciences Discussions, (October), 1–23.
                        <a href="https://doi.org/10.5194/hess-2016-504"
                            target="_blank" rel="noopener noreferrer">https://doi.org/10.5194/hess-2016-504</a><br /><br />

                        Shah, R., Sahai, A. K., & Mishra, V. (2017). Short to sub-seasonal
                        hydrologic forecast to manage water and agricultural resources in India.
                        Hydrology and Earth System Sciences, 21(2), 707–720.
                        <a href="https://doi.org/10.5194/hess-21-707-2017"
                            target="_blank" rel="noopener noreferrer">https://doi.org/10.5194/hess-21-707-2017</a><br /><br />

                        Shah, R. D., & Mishra, V. (2015). Development of an Experimental
                        Near-Real-Time Drought Monitor for India. Journal of Hydrometeorology,
                        16(1), 327–345. <a href="https://doi.org/10.1175/JHM-D-14-0041.1"
                            target="_blank" rel="noopener noreferrer">https://doi.org/10.1175/JHM-D-14-0041.1</a><br /><br />

                        Sheffield, J., G. Goteti, and E. F. Wood, Development of a 50-yr
                        high-resolution global dataset of meteorological forcings for land
                        surface modeling, J. Climate, 19 (13), 3088-3111.<br /><br />

                        Yatagai, A., K. Kamiguchi, O. Arakawa, A. Hamada, N. Yasutomi, and A.
                        Kitoh, 2012: APHRODITE: Constructing a Long-Term Daily Gridded
                        Precipitation Dataset for Asia Based on a Dense Network of Rain Gauges.
                        Bull. Amer. Meteor. Soc., 93, 1401–1415,
                        <a href="https://doi.org/10.1175/BAMS-D-11-00122.1"
                            target="_blank" rel="noopener noreferrer">https://doi.org/10.1175/BAMS-D-11-00122.1</a><br /><br />
                    </p>
                </div>

            </div>
        </>

    )
}

export default Acknowledgement