# Canvas LMS Restrict SIS Course Settings Plug-in

Plugin for the [Canvas LMS theme app](https://github.com/artevelde-uas/canvas-lms-app) that restricts some settings in
courses created by the SIS import/sync.

## Installation

Using NPM:

    npm install @artevelde-uas/canvas-lms-restrict-sis-course-settings-plugin

Using Yarn:

    yarn add @artevelde-uas/canvas-lms-restrict-sis-course-settings-plugin

## Usage

Just import the plug-in and add it to the Canvas app:

```javascript
import canvas from '@artevelde-uas/canvas-lms-app';
import restrictSISCourseSettingsPlugin from '@artevelde-uas/canvas-lms-restrict-sis-course-settings-plugin';

canvas.addPlugin(restrictSISCourseSettingsPlugin);

canvas.run();
```
