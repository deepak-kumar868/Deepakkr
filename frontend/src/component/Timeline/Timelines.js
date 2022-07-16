// import React from 'react'
// import './Timeline.css';
// import Typography from '@mui/material/Typography'
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import Timeline from "@mui/lab/Timeline";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
// import TimelineDot from '@mui/lab/TimelineDot';
// import { Event } from '@mui/icons-material'


// const Timelines = ({ timeline = [] }) => {
//     return (
//         <div>
//             <Timeline position='alternate'>
//                 {
//                     timeline.map((item, index) => (
//                         <TimelineItem key={index}>
//                             <TimelineOppositeContent sx={{ m: 'auto 0' }}
//                                 align="right"
//                                 variant='body2'
//                                 color='secondary.text'>{item.date.toString().split("T")[0]}</TimelineOppositeContent>
//                             <TimelineSeparator>
//                                 <TimelineConnector />
//                                 <TimelineDot><Event /></TimelineDot>
//                                 <TimelineConnector />
//                             </TimelineSeparator>
//                             <TimelineContent sx={{ py: '12x', px: 2 }}>
//                                 <Typography variant='h6'>Title</Typography>
//                                 <Typography>{item.description}</Typography>
//                             </TimelineContent>
//                         </TimelineItem>
//                     ))
//                 }
//             </Timeline >
//         </div >
//     )
// }

// export default Timelines

import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const Timelines = ({ timeline = [] }) => {
    return (
        <div>
            <Timeline position="alternate">
                {timeline.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent
                            sx={{ m: "auto 0" }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            {item.date.toString().split("T")[0]}
                        </TimelineOppositeContent>

                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <Event />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: "12px", px: 2 }}>
                            <Typography variant="h6">{item.title}</Typography>
                            <Typography>{item.description}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    );
};

export default Timelines;