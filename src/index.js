import disableCourseActions from './plugins/disableCourseActions';
import disableCourseSettings from './plugins/disableCourseSettings';
import { getCourse } from './api';


export default function (canvas) {
    canvas.addRouteListener('course.settings', function (params) {
        
        getCourse(params.courseId, function (course) {
            disableCourseActions(course);
            disableCourseSettings(course);
        });
        
    });
}
