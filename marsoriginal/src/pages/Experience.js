import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import '../styles/Experience.css'
import monash from '../assets/monash.png'
import haileybury from '../assets/haileybury.png'
import unimelb from '../assets/unimelb.png'

function Experience() {
  return (
    <div className="experience">
        <VerticalTimeline lineColor='#302C3E'>
            <VerticalTimelineElement 
                className={'vertical-timeline-component--education'}
                date='2017 - 2018'
                iconStyle={{ background: '#585466', color: '#fff' }}
                icon={<img src={haileybury} alt="Haileybury College" width="100%"/>}
            >
                <h3 className="vertical-timeline-element-title">VCE: Math, Physics, Psychology, EAL, Chinese</h3>
                <h4 className="vertical-timeline-element-subtitle">Haileybury College</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className={'vertical-timeline-component--education'}
                date='2019 - 2021'
                iconStyle={{ background: '#585466', color: '#fff' }}
                icon={<img src={monash} alt="Monash University" width="100%"/>}
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Information Technology</h3>
                <h3 className="vertical-timeline-element-title">(Computer System & Network Security)</h3>
                <h4 className="vertical-timeline-element-subtitle">Monash University</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
                className={'vertical-timeline-component--education'}
                date='2022 - 2023'
                iconStyle={{ background: '#585466', color: '#fff' }}
                icon={<img src={unimelb} alt="The University of Melbourne" width="100%"/>}
            >
                <h3 className="vertical-timeline-element-title">Master of Information Technology</h3>
                <h3 className="vertical-timeline-element-title">(Human-Computer Interaction)</h3>
                <h4 className="vertical-timeline-element-subtitle">The University of Melbourne</h4>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience