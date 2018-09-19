
export default function (course) {
    let els = $(`
        #right-side a[href="/courses/${course.id}/confirm_action?event=conclude"],
        #right-side a[href="/courses/${course.id}/confirm_action?event=delete"]
    `);
    
    els.hide();
    
    if (course.sis_course_id === null) {
        els.show();
    }
}
