
export default function (course) {
    let els = $(`
        #course_sis_source_id,
        #course_account_id,
        #course_enrollment_term_id
    `);
    
    if (course.sis_course_id !== null) {
        els.prop('disabled', true);
    }
}
