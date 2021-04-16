import './App.css';
import Login from './components/registration/login'
import SignUp from './components/registration/signup'
import details from './components/registration/details'

import dashboard from './components/dashboard/dashboard'
import profile from './components/profile/profile'
import dashboard_prof from './components/dashboard/dashboard_prof'
import {Route, Switch} from 'react-router-dom'
import error from './components/error'
import profile_prof from './components/profile/profile_prof';
import dashboard_admin from './components/dashboard/dashboard_admin';
import modify_courses from './components/modify_courses/modify_courses';

import courses_table from './components/register_into_courses/courses_table';
import addOrDeleteCourse from './components/modify_courses/addOrDeleteCourse';
import show_profile from './components/profile/show_profile';
import show_profile_prof from './components/profile/show_profile_prof';
import cms_student from './components/CMS/cms_student';
import view_feedbacks_student from './components/View Feedbacks/view_feedbacks_student';
// import view_feedbacks_course from './components/View Feedbacks/view_feedback_course';
import show_all_courses from './components/View Feedbacks/show_all_courses';
import show_all_prof from './components/View Feedbacks/show_all_prof'
import view_feed_prof from './components/View Feedbacks/view_feed_prof';
import about from './components/Extras/about';
import Feedback from './components/feedback/Feedback'
import GiveFeedback from './components/feedback/GiveFeedback'
import GiveCourseFeedback from './components/feedback/CourseGiveFeedback'
import GiveProfessorFeedback from './components/feedback/ProfessorGiveFeedback'
import assign_prof from './components/assign_prof/assign_prof';

function App() {
  return (
    <div className="div_in_app">
      {<Switch>
        {/* registration */}
        <Route exact path='/' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/details' component={details}/>
        
        {/* dashboard */}
        <Route exact path='/dashboard' component={dashboard}/>
        <Route exact path='/dashboard_prof' component={dashboard_prof}/>
        <Route exact path='/dashboard_admin' component={dashboard_admin}/>
        <Route exact path='/profile_edit' component={profile}/>
        <Route exact path='/profile_prof_edit' component={profile_prof}/>
        <Route exact path='/profile_prof' component={show_profile_prof}/>
        <Route exact path='/modify_courses' component={modify_courses}/>


        <Route exact path='/register' component={courses_table}/>
        <Route exact path='/add_del_course' component={addOrDeleteCourse}/>
        <Route exact path='/profile' component={show_profile}/>
        <Route exact path='/cms_student' component={cms_student}/>

        <Route exact path='/view_all_feedbacks' component={view_feedbacks_student}/>
        {/* <Route exact path='/view_feedback_course' component={view_feedbacks_course}/> */}
        <Route exact path='/show_all_courses' component={show_all_courses}/>
        <Route exact path='/view_feedback_prof_to_student' component={show_all_prof}/>
        <Route exact path='/my_feedbacks' component={view_feed_prof}/>
        <Route exact path='/about' component={about}/>
        {/*feedback */}
        <Route exact path='/feedback' component={Feedback}/>
        <Route exact path='/give_feedback' component={GiveFeedback}/>
        <Route exact path='/course_give_feedback' component={GiveCourseFeedback}/>
        <Route exact path='/professor_give_feedback' component={GiveProfessorFeedback}/>
        <Route exact path='/modify_prof' component={assign_prof}/>

        
        <Route component={error}/>
        
      </Switch>}
    </div>
  );
}

export default App;
