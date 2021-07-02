
import {FaPhoneAlt, FaHome, FaGithubAlt, FaLinkedin} from 'react-icons/fa'
import {GiMailbox} from 'react-icons/gi'
const Home = () => {
    return ( 
        <>
        <div className="resume">
            <h2>Vivek Jhooria<br/>
            <span>React Developer</span></h2>
            <hr/>
            <div className="about">
                <h4 className="title2">Contact Details</h4>
                <div className="box">
                    <div className="year_company">
                        <h6><FaHome style={{color:"#3577f1", marginRight:"3px"}}/>Address</h6>
                    </div>
                    <div className="text">
                        <p>27, Panchvati colony Indore, Pin 453771</p>
                    </div>
                </div>

                <div className="box">
                    <div className="year_company">
                        <h6><FaPhoneAlt style={{color:"#3577f1", marginRight:"3px"}}/>Phone Number </h6>
                    </div>
                    <div className="text">
                        <p>+91-7987998375</p>
                    </div>
                </div>
                <div className="box">
                    <div className="year_company">
                        <h6><GiMailbox style={{color:"#3577f1", marginRight:"3px"}}/>Gmail </h6>
                    </div>
                    <div className="text">
                        <p>v.jhooria@gmail.com</p>
                    </div>
                </div>
                <div className="box">
                    <div className="year_company">
                        <h6><FaGithubAlt style={{color:"#3577f1", marginRight:"3px"}}/>Github </h6>
                    </div>
                    <div className="text">
                        <a href="https://github.com/Vivek19f">@Vivek19f</a>
                    </div>
                </div>
                <div className="box">
                    <div className="year_company">
                        <h6><FaLinkedin style={{color:"#3577f1", marginRight:"3px"}}/>LinkedIn </h6>
                    </div>
                    <div className="text">
                        <a href="https://www.linkedin.com/in/vivek-jhooria-052280137/">@Vivek-Jhooria</a>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="about">
                <h4 className="title2">Experience</h4>
                <div className="box">
                    <div className="year_company">
                        <h6>Valuemomentum, Hyderabad</h6>
                    </div>
                    <div className="text">
                        <h5>Software Engineer</h5>
                        <p>Massachusetts (MA) Registry of Motor Vehicles (RMV) and Merit Rating Board (MRB) 
                            allow insurance agents to have direct access to the MA license and registry database called UMS 
                            (Uninsured Motorist System). Any agent who sells or services a MA policy has access to the MA Uninsured 
                            Motorist System (UMS) system to assist them with the handling of the policy</p>
                            <ul>
                                <li>Designed UI for the project. </li>
                                <li>Mapping of MARMV WebService File(WSDL) with UI Fields</li>
                            </ul>
                        <p>Creation of interactive  dashboards, alerts and maintained on-Prim as well as cloud infrastructure for all UW applications</p>
                        <p>Technologies used: reactjs, Azure, AKS, splunk, dynatrace</p>
                        
                    </div>
                </div>

                <div className="box">
                <div className="year_company">
                    <h6>Lise Infotech, Indore</h6>
                </div>
                <div className="text">
                    <h5>Intern</h5>
                    <p>Developed application for a restaurant chain to accept/reject and take orders including other features. Also developed a community to share the activities, photos, calendar etc.</p>
                    <p>Technologies Learned: React-native, Redux, AJAX</p>
                </div>
            </div>
            </div>
            <hr/>
            <div className="about">
                <h4 className="title2">FreeLance Projects</h4>
                <div className="box">
                    <div className="year_company">
                        <h6>Deepiotics, <br/>Indore</h6>
                    </div>
                    <div className="text">
                        <h5>Frontend Developer</h5>
                        <p>Developed a web based solution to check whether a person or group of persons is wearing a mask or not for a client and deployed it to AWS.</p>
                        <p> Technologies Used: Reactjs, HTML, CSS, AWS EC2, AWS S3</p>
                    </div>
                </div>

                <div className="box">
                    <div className="year_company">
                        <h6>IISR-ICAR Website,<br/> Indore</h6>
                    </div>
                    <div className="text">
                        <h5>Frontend Developer</h5>
                        <p>Designed and Developed website for IISR- Indore according to their needs and choice. Showcasing their different projects, staff and other public facilities. Deployed it on onprim server using c-Pannel.</p>
                        <p>Technologies Used: HTML5, CSS3, Bootstrap4, Reactjs</p>
                    </div>
                </div>
            </div>
            <hr/>  
            <div className="education">
                <h3 className="title2">Education</h3>
                <ul>
                    <li>
                        <h6>2015 - 2019</h6>
                        <h5>Bachelor of Engineering</h5>
                        <h5>Rajiv Gandhi Proudyogiki Vishwavidyalaya</h5>
                    </li>
                    <li>
                        <h6>2014 - 2015</h6>
                        <h5>Class XII CBSE</h5>
                        <h5>St. Arnold’s Hr. Sec. School, Indore</h5>
                    </li>
                    <li>
                        <h6>2012 - 2013</h6>
                        <h5>Class X CBSE</h5>
                        <h5>St. Arnold’s Hr. Sec. School, Indore</h5>
                    </li>
                </ul>
            </div>
            <hr/>
            <div className="about">
                <h4 className="title2">Couses and Certificates</h4>
                <div className="box">
                    <div className="year_company">
                        <h6>Coursera</h6>
                    </div>
                    <div className="text">
                        <ul>
                            <li>Neural Networks and Deep learning by deeplearning.ai</li>
                            <li>Machine Learning by Andrew NG</li>
                            <li>AWS Fundamentals: Going Cloud Native.</li>
                        </ul>
                    </div>
                </div>
                <div className="box">
                    <div className="year_company">
                        <h6>Udacity</h6>
                    </div>
                    <div className="text">
                        <ul>
                            <li> Intro to Deep Learning with Pytorch</li>
                            <li>SQL for Data Analysis</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
        </>
     );
}
 
export default Home;