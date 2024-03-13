import React from "react";
import StatsItem from "./statsItem";


const Statistics = () => {
    return (
        <div className='statistics'>
            <div><StatsItem endpoint='bikes'/></div>
            {/* <div></div> */}
            <div><StatsItem endpoint='customers'/></div>
            <div></div>
        </div>
    )
}

export default Statistics;
