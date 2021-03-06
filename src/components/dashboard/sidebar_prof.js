import React, { Component } from 'react';

import '../stylesheets/dashboard.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class SidebarProf extends Component{
    render(){
        return(
            <nav id="sidebar">
                <ul id="ul_id" className="list-unstyled components">
                    <li id={window.location.pathname==="/profile_prof"?"active_tab":""}><a href="/profile_prof">My Profile</a></li>                            
                    <li id={window.location.pathname==="/my_courses"?"active_tab":""}><a href="/my_courses">My Courses</a></li>
                    <li id={window.location.pathname==="/my_feedbacks"?"active_tab":""}><a href="/my_feedbacks">View Feedbacks</a></li>
                </ul>  
            </nav>
        )
    }
}
export default SidebarProf;