# Canvas LMS Restrict SIS Course Settings Plug-in

Plugin for the [Canvas LMS theme app](https://github.com/ahsdile/canvas-lms-app) that restricts some settings in
courses created by the SIS import/sync.

## Installation

Using NPM:

    npm install @ahsdile/canvas-lms-restrict-sis-course-settings-plugin

Using Yarn:

    yarn add @ahsdile/canvas-lms-restrict-sis-course-settings-plugin

## Usage

Just import the plug-in and add it to the Canvas app:

```javascript
import canvas from '@ahsdile/canvas-lms-app';
import restrictSISCourseSettingsPlugin from '@ahsdile/canvas-lms-restrict-sis-course-settings-plugin';

canvas.addPlugin(restrictSISCourseSettingsPlugin);

canvas.run();
```
