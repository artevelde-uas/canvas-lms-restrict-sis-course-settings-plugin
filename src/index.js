import disableCourseActions from './plugins/disableCourseActions';
import { getCourse } from './api';


export default function (canvas) {
    canvas.addRouteListener('course.settings', function (params) {
        
        getCourse(params.courseId, disableCourseActions);
        
    });
}
