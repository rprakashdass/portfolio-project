import React, { useEffect } from 'react';
import $ from 'jquery';

const JQueryButton: React.FC = () => {
    useEffect(() => {
        // jQuery code runs after the component mounts
        const handleClick = () => {
            $("div#jqueryButton").css("color", "blue");
        };

        $("div#jqueryButton").on("click", handleClick);

        // Cleanup function to remove jQuery event handlers
        return () => {
            $("div#jqueryButton").off("click", handleClick);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <div id="jqueryButton" className='start-100 top-50 transform-middle'>
            <button className='btn btn-primary'>JQuery Button Practice</button>
        </div>
    );
};

export default JQueryButton;
