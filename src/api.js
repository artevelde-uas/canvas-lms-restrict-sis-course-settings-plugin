
export function getCourse(id, fn) {
    $.getJSON(`/api/v1/courses/${id}`, fn);
}
