import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function TimeLine() {
    return(
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="July 2021 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">HashedIn By Deloitte, Bangalore</h4>
    <p>
      Working as a full time Software Engineer at HashedIn By Deloitte
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    className="vertical-timeline-element--work"
    date="Jan 2021 - June 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">HashedIn By Deloitte, Bangalore</h4>
    <p>
        Worked as Software Engineer Intern at HashedIn By Deloitte.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    className="vertical-timeline-element--work"
    date="July 2017 - May 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaGraduationCap />}
  >
    <h3 className="vertical-timeline-element-title">B. Tech</h3>
    <h4 className="vertical-timeline-element-subtitle">DA-IICT, Gandhinagar</h4>
    <p>
        Completed my B. tech in ICT from DA-IICT Gandhinagar with 7.4 CGPA
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    className="vertical-timeline-element--work"
    date="June 2015 - May 2017"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaGraduationCap />}
  >
    <h3 className="vertical-timeline-element-title">HSC</h3>
    <h4 className="vertical-timeline-element-subtitle">Shri Ram Vidyalaya</h4>
    <p>
        Completed my Higher Secondary Education with Maths, Physics and Chemistry and got 100th rank in Gujarat Board. 
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>)
}

export default TimeLine;