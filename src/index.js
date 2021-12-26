import { router, auth } from '@artevelde-uas/canvas-lms-app';

import styles from './index.module.css';



const defaultDisable = {
    sisId: true,
    account: true,
    term: true
};


export default function ({ disable = defaultDisable }) {
    router.onRoute('courses.settings', async () => {
        // Get the current SIS ID
        const sisId = document.getElementById('course_sis_source_id').value;

        // Only handle SIS courses
        if (sisId === '') return;

        // Don't apply restrictions to administrators
        //if (await auth.isAdmin()) return;

        document.body.classList.add(styles.restrictSisCourseSettings);

        // Override the defaults
        disable = Object.assign(defaultDisable, disable);

        const selectors = [];

        // Add selectors for each enabled option
        disable.image && selectors.push('.CourseImageSelector');
        disable.name && selectors.push('#course_name');
        disable.code && selectors.push('#course_course_code');
        disable.blueprint && selectors.push('#blueprint_menu', '[name="course[blueprint]"]');
        disable.template && selectors.push('#course_template_details', '[name="course[template]"]');
        disable.timeZone && selectors.push('#course_time_zone');
        disable.sisId && selectors.push('#course_sis_source_id');
        disable.account && selectors.push('#course_account_id');
        disable.term && selectors.push('#course_enrollment_term_id');
        disable.participation && selectors.push('#availability_options_container');
        disable.language && selectors.push('#course_locale');
        disable.storage && selectors.push('#course_storage_quota_mb');
        disable.speedGraderFilter && selectors.push('#course_large_course', '[name="course[filter_speed_grader_by_student_group]"]');
        disable.gradingScheme && selectors.push('#course_grading_standard_enabled', '[name="course[grading_standard_enabled]"]');
        disable.license && selectors.push('#course_license');
        disable.copyright && selectors.push('#usage_rights_required', '[name="course[usage_rights_required]"]');
        disable.visibility && selectors.push('#course_visibility', '[name="course[course_visibility]"]', '[name="course[custom_course_visibility]"]', '[name="course[syllabus_visibility_option]"]', '[name="course[indexed]"]', '#course_visibility .public_options');
        disable.format && selectors.push('#course_course_format');
        disable.offline && selectors.push('#offline_web_export', '[name="course[enable_offline_web_export]"]');
        disable.description && selectors.push('#course_public_description');
        disable.moreOptions && selectors.push('.course_form_more_options_link', '.course_form_more_options');

        // Join selectors into one big selector
        const elements = document.querySelectorAll(selectors.join());

        // Disable all the selected elements
        elements.forEach(element => element.toggleAttribute('disabled', true));

        // Disable all mouse inputs on the participation container
        if (disable.participation) {
            ['click', 'mousedown'].forEach(type => {
                document.addEventListener(type, event => {
                    // Only detect left clicks
                    if (event.button !== 0) return;

                    // Only handle clicks on participation container
                    if (event.target.closest('#availability_options_container') === null) return;

                    // Disable event
                    event.stopPropagation();
                    event.preventDefault();
                }, { capture: true });
            });
        }

    });
}
